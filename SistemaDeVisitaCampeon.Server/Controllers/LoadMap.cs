using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SistemaDeVisitaCampeon.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoadMap : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var coordenadas = new List<object>
            {
             new { id = 1, nombre = "Juan" },
             new { id = 2, nombre = "Ana" },
             new { id = 3, nombre = "Luis" }
            };
            return Ok(coordenadas);
        }
    }
     
}
