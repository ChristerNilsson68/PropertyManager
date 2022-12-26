using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using reactprojectaspnetcore_backend.Data;
using reactprojectaspnetcore_backend.Models;
using System.ComponentModel.DataAnnotations;

namespace reactprojectaspnetcore_backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CityController : ControllerBase
{
    public CityController(Context context)
    {
        this.context = context;
    }

    public Context context { get; set; }


    [HttpGet]
    public IEnumerable<City> GetAllCities()
    {
        var cities = context.City
            .Include(x => x.Properties)
            .ThenInclude(y => y.Apartments)
            .ToList();

        return cities;
    }

    [HttpGet("{city}")]
    public List<City> GetCity(string city)
    {
        var cities = context.City
            .Include(x => x.Properties)
            .ThenInclude(y => y.Apartments)
            .Where(x => x.CityName == city)
            .ToList();

        return cities;
    }

    [HttpPost]
    public IActionResult SaveCity(CreateCityDto cityName)
    {
        var newCity = new City
        {
            CityName = cityName.CityName,
        };

        var city = context.City.Add(newCity);
        context.SaveChanges();

        return Created("", null);
    }


}

public class CityDto
{
    public int Id { get; set; }
    public string CityName { get; set; }
    public List<PropertyDto> Properties { get; set; }
}

public class PropertyDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public City City { get; set; }
    //public List<Apartment> Apartments { get; set; }
}

public class CreateCityDto
{
    public string CityName { get; set; }
}