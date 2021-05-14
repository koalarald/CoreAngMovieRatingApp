using System.Collections.Generic;

namespace MoviesRatingsWeBAPI.ViewModels
{
    public class SWAPITypeList<T>
    {
        public int count { get; set; }
        public string next { get; set; }
        public string previous { get; set; }
        public IEnumerable<T> results { get; set; }

    }

}
