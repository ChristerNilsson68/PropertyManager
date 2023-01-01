using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using reactprojectaspnetcore_backend.Areas.API.V1.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace reactprojectaspnetcore_backend.Areas.API.V1.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    public AuthController(
        UserManager<IdentityUser> userManager,
        IConfiguration configuration
    )
    {
        UserManager = userManager;
        Configuration = configuration;
    }

    private UserManager<IdentityUser> UserManager { get; }
    private IConfiguration Configuration { get; }

    // POST /api/auth
    [HttpPost]
    public async Task<ActionResult> Login(CredentialsDto credentialsDto)
    {
        var user = await UserManager.FindByNameAsync(credentialsDto.UserName);

        var hasAccess = await UserManager.CheckPasswordAsync(user, credentialsDto.Password);

        if (!hasAccess)
        {
            return Unauthorized(); // 401 Unauthorized
        }

        var tokenDto = GenerateToken(user);

        return Created("", tokenDto); // 201 Created
    }

    private TokenDto GenerateToken(IdentityUser identityUser)
    {
        var signingKey = Convert.FromBase64String(Configuration["Jwt:SigningSecret"]);

        var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, identityUser.Id),
                new Claim(ClaimTypes.Name, identityUser.UserName),
                //new Claim(ClaimTypes.GivenName, identityUser.UserName)
            };

        var roles = UserManager.GetRolesAsync(identityUser).Result;

        foreach (var role in roles)
        {
            claims.Add(new Claim(ClaimTypes.Role, role));
        }

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            SigningCredentials = new SigningCredentials(
                new SymmetricSecurityKey(signingKey),
                SecurityAlgorithms.HmacSha256Signature),

            // nbf
            //NotBefore = DateTime.UtcNow.AddHours(1),

            // exp
            Expires = DateTime.UtcNow.AddHours(2),

            Subject = new ClaimsIdentity(claims)
        };

        var jwtTokenHandler = new JwtSecurityTokenHandler();

        var jwtSecurityToken = jwtTokenHandler.CreateJwtSecurityToken(tokenDescriptor);

        return new TokenDto
        {
            Token = jwtTokenHandler.WriteToken(jwtSecurityToken)
        };
    }
}