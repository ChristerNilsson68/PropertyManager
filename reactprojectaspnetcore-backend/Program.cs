using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using reactprojectaspnetcore_backend.Data;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Mvc.Versioning;
using Microsoft.OpenApi.Models;
using System.Reflection;

namespace reactprojectaspnetcore_backend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Kunna tolka Bearer i headern
            builder.Services
                .AddAuthentication()
                .AddJwtBearer(options =>
                {
                    var signingKey = Convert.FromBase64String(builder.Configuration["Jwt:SigningSecret"]);

                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        IssuerSigningKey = new SymmetricSecurityKey(signingKey)
                    };
                });

            builder.Services.AddAuthorization(options =>
                options.AddPolicy("IsAdministrator", policy =>
                   policy.RequireRole("Administrator")));

            builder.Services.AddSession(options =>
            {
                options.Cookie.IsEssential = true;
            });

            builder.Services.AddControllers();

            builder.Services.AddCors();

            // Add services to the container.
            builder.Services.AddDbContext<Context>
                (options => options.UseSqlServer(
                    builder.Configuration.GetConnectionString("Default")));

            builder.Services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<Context>();

            builder.Services.AddApiVersioning(options =>
            {
                options.AssumeDefaultVersionWhenUnspecified = true;

                options.ApiVersionReader = ApiVersionReader.Combine(
                            new HeaderApiVersionReader("X-Version"),
                            new QueryStringApiVersionReader("v"));
            });

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();

            builder.Services.AddSwaggerGen(options =>
            {
                options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = @"JWT Authorization header using the Bearer scheme. \r\n\r\n Enter 'Bearer' [space] and then your token in the text input below. \r\n\r\nExample: 'Bearer abc123'",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"
                });

                options.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                            {
                                Reference = new OpenApiReference
                                    {
                                        Type = ReferenceType.SecurityScheme,
                                        Id = "Bearer"
                                    },
                                    Scheme = "oauth2",
                                    Name = "Bearer",
                                    In = ParameterLocation.Header,
                            },
                            new List<string>()
                    }
                });

                //var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";

                //options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI(config =>
                {
                    config.SwaggerEndpoint(
                        "/swagger/v1/swagger.json",
                        "FreakyFashion API");
                });
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            // Shows UseCors with CorsPolicyBuilder.
            app.UseCors(builder =>
            {
                builder.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
            });

            app.UseSession();

            app.UseHttpsRedirection();
            app.UseAuthentication(); ;

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}