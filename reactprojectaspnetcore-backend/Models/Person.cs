using System.ComponentModel.DataAnnotations;

namespace reactprojectaspnetcore_backend.Models;

public class Person
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(40)]
    public string FirstName { get; set; }

    [Required]
    [MaxLength(40)]
    public string LastName { get; set; }

    [Required]
    public string SocialSecurityNumber { get; set; }

    [MaxLength(20)]
    public IEnumerable<Phone> Phone { get; set; } = new List<Phone>();

    [MaxLength(100)]
    public IEnumerable<Email> Email { get; set; } = new List<Email>();

    public bool IsActive { get; set; } = true;

}
