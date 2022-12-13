using System.Text.RegularExpressions;

namespace reactprojectaspnetcore_backend.Models;

public class SocialSecurityNumber
{
    public string Personnummer { get; set; }

    public SocialSecurityNumber(string socialSecurityNumber)
    {
        Personnummer = socialSecurityNumber;
    }

    public bool IsValidSocialSecurityNumber()
    {
        Regex socialSecurityPattern = new Regex(@"^\d{6}\-\d{4}$");
        bool validPattern = socialSecurityPattern.IsMatch(Personnummer) ? true : false;

        string dateString = Personnummer.Trim().Substring(0, 6);
        string numbers = Personnummer.Trim().Substring(7);

        // Check for samordningsnummer (dag + 60 = 61 - 91)
        int samordningsNr = int.Parse(Personnummer.Trim().Substring(4, 2));
        if (samordningsNr > 60 && samordningsNr < 92)
        {
            dateString = dateString.Substring(0, 4) + (samordningsNr - 60);
        }

        // Check for valid date
        bool isValidDate = DateTime.TryParseExact(dateString, "yyMMdd", System.Globalization.CultureInfo.InvariantCulture, System.Globalization.DateTimeStyles.None, out DateTime birthDate);

        dateString = Personnummer.Trim().Substring(0, 6);

        // Calculate last digit
        char[] tecken = (dateString + numbers).Substring(0, 9).ToArray();
        List<int> digits = new List<int>();

        int multiplication = 2;
        foreach (var sign in tecken)
        {
            digits.Add(int.Parse(sign.ToString()) * multiplication);
            multiplication = multiplication == 2 ? 1 : 2;
        }

        int sum = 0;
        foreach (var digit in digits)
        {

            if (digit > 9)
            {
                sum += digit / 10;
                sum += digit % 10;
            }
            else
            {
                sum += digit;
            }
        }

        int checksum = (10 - sum % 10) % 10;

        bool isValidChecksum = int.Parse(Personnummer.Substring(10, 1)) == checksum ? true : false;

        return validPattern && isValidDate && isValidChecksum;
    }

    public bool IsFemale()
    {
        int secondLastDigit = int.Parse(Personnummer.Substring(9, 1));
        return secondLastDigit % 2 == 0 ? true : false;
    }
}
