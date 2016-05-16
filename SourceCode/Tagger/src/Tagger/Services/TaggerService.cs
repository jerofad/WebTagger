using System.Collections.Generic;
using Tagger.Models;

namespace Tagger.Services
{
    public class TaggerService : ITaggerService
    {
        public List<TaggedWord> GetTag(string sentence)
        {
            return new List<TaggedWord>()
            {
                new TaggedWord()
                {
                    Word = "abc",
                    Tag = "ass"
                },
                new TaggedWord()
                {
                    Word = "abc",
                    Tag = "ass"
                }
            };
        }
    }
}