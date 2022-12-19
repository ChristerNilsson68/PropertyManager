using System.ComponentModel.DataAnnotations;

namespace reactprojectaspnetcore_backend.Models;

public class Property
{
    public int Id { get; set; }

    [MaxLength(70)]
    public string Name { get; set; }

    public List<Apartment> Apartments { get; set; } = new List<Apartment>();
}
