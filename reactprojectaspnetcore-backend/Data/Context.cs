using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using reactprojectaspnetcore_backend.Models;

namespace reactprojectaspnetcore_backend.Data;

public class Context : IdentityDbContext<IdentityUser>
{
    public Context(DbContextOptions<Context> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        // Customize the ASP.NET Identity model and override the defaults if needed.
        // For example, you can rename the ASP.NET Identity table names and more.
        // Add your customizations after calling base.OnModelCreating(builder);
    }

    public DbSet<Person> Person { get; set; }

    public DbSet<Phone> Phone { get; set; }

    public DbSet<Email> Email { get; set; }

    public DbSet<City> City { get; set; }

    public DbSet<Property> Property { get; set; }

    public DbSet<Apartment> Apartment { get; set; }
}
