using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using Tagger.Models;
using Tagger.Services;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Tagger.Controllers
{
    [Route("api/[controller]")]
    public class TaggerController : Controller
    {
        private readonly ITaggerService _taggerService;

        public TaggerController(ITaggerService taggerService)
        {
            _taggerService = taggerService;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new List<string>();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "";
        }

        // POST api/values
        [HttpPost]
        public List<TaggedWord> Post(string sentence)
        {
            return _taggerService.GetTag(sentence);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}