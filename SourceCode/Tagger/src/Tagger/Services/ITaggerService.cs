using System.Collections.Generic;
using Tagger.Models;

namespace Tagger.Services
{
    public interface ITaggerService
    {
        List<TaggedWord> GetTag(string sentence);
    }
}