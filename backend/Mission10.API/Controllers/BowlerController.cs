using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission10.API.Data;

namespace Mission10.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private BowlerDbContext _context;
        public BowlerController(BowlerDbContext temp) 
        { 
            _context = temp;
        }

        public IEnumerable<Bowler> GetBowler()
        {
            return _context.Bowlers.ToList();
        }
    }
}
