using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace reactprojectaspnetcore_backend.Models;

public class Phone
{
    //public Phone(int id, string phoneNumber)
    //{
    //    Id = id;
    //    PhoneNumber = phoneNumber;
    //}

    public int Id { get; set; }

    [MaxLength(20)]
    public string PhoneNumber { get; set; }

    public Person Person { get; set; }


    public bool IsValidPhoneNumber()
    {
        Regex phonePattern = new Regex(@"^(([+]46)\s*(7)|07)[02369]\s*(\d{4})\s*(\d{3})$");
        return phonePattern.IsMatch(PhoneNumber) ? true : false;
    }
}
