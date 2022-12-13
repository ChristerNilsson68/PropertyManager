using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace reactprojectaspnetcore_backend.Models;

public class Email
{
    //public Email(int id, string emailAdress)
    //{
    //    Id = id;
    //    EmailAdress = emailAdress;
    //}

    public int Id { get; set; }

    [MaxLength(100)]
    public string EmailAdress { get; set; }

    public Person Person { get; set; }


    public bool IsValidEmailAddress()
    {
        Regex emailPattern = new Regex(@" 	
^(?("")("".+?(?<!\\)""@)|(([0-9a-z]((\.(?!\.))|[-!#\$%&'\*\+/=\?\^`\{\}\|~\w])*)(?<=[0-9a-z])@))(?(\[)(\[(\d{1,3}\.){3}\d{1,3}\])|(([0-9a-z][-\w]*[0-9a-z]*\.)+[a-z0-9][\-a-z0-9]{0,22}[a-z0-9]))$");
        return emailPattern.IsMatch(EmailAdress) ? true : false;
    }
}

