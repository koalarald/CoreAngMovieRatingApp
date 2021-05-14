﻿using System.Collections.Generic;

namespace MoviesRatingsWeBAPI.ViewModels
{
    public class Planet : SWAPICommon
    {
        public string name { get; set; }
        public string rotation_period { get; set; }
        public string orbital_period { get; set; }
        public string diameter { get; set; }
        public string climate { get; set; }
        public string gravity { get; set; }
        public string terrain { get; set; }
        public string surface_water { get; set; }
        public string population { get; set; }

        public IEnumerable<string> residents { get; set; }
        public IEnumerable<string> films { get; set; }
    }
}
