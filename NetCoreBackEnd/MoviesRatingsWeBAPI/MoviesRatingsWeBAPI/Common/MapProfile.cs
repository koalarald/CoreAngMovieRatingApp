﻿using AutoMapper;
using MoviesRatingsWeBAPI.ViewModels;

namespace MoviesRatingsWeBAPI.Common
{
    public class MapProfile : Profile
    {
        public MapProfile()
        {
            CreateMap<Movie, ViewMovie>()
                .ForMember(dest => dest.Id,
            opt => opt.MapFrom(src => src.url.Substring(27, src.url.Length - 28)));
        }
    }
}
