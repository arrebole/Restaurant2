using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Restaurant.Controllers
{
    //[Produces("application/json")]
    [Route("api/[controller]/[action]")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public ActionResult<string> Index()
        {
            return "hello world";
        }

    }
}
