using System.ComponentModel.DataAnnotations;

namespace reactprojectaspnetcore_backend.Models;

public class City
{
    public int Id { get; set; }

    [MaxLength(50)]
    public string CityName { get; set; }

    public List<Property> Properties { get; set; } = new List<Property>();
}
