using System.ComponentModel.DataAnnotations;

namespace reactprojectaspnetcore_backend.Models;

public class Apartment
{
    public int Id { get; set; }

    [MaxLength(10)]
    public string ApartmentName { get; set; }

    public int? Floor { get; set; } = 0;

    public int? NoOfRooms { get; set; } = 0;

    public int? SqrMeter { get; set; } = 0;
}
