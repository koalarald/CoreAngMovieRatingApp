using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MoviesRatingsWeBAPI.Common;
using MoviesRatingsWeBAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MoviesRatingsApp.Controllers
{
    [ApiController]
    [Route("api/moviesratings")]
    public class MoviesRatingsController : ControllerBase
    {
        private readonly ISWAPIService _swapiService;
        private readonly IMapper _mapper;
        private readonly IMoviesRatingsService _movieRatingsService;
        private readonly ILogger<MoviesRatingsController> _logger;

        public IEnumerable<Movie> SWAPIMovies { get; private set; }
        public IEnumerable<ViewMovie> ViewMoviesWithRatings { get; private set; }

        public Movie SWAPIMovie { get; private set; }
        public ViewMovie ViewMovieWithRating { get; private set; }


        public MoviesRatingsController(ISWAPIService swapiService, IMapper mapper, IMoviesRatingsService movieRatingsService, ILogger<MoviesRatingsController> logger)
        {
            _swapiService = swapiService;
            _mapper = mapper;
            _logger = logger;
            _movieRatingsService = movieRatingsService;
        }

        [HttpGet]
        //GET: api/MoviesRatings
        public async Task<IEnumerable<ViewMovie>> Index()
        {
            SWAPIMovies = await _swapiService.GetMovies();

            ViewMoviesWithRatings = _mapper.Map<IEnumerable<Movie>, IEnumerable<ViewMovie>>(SWAPIMovies);
            foreach (ViewMovie ViewMovieWRating in ViewMoviesWithRatings)
            {
                var MovieRatingEntry = await _movieRatingsService.GetMovieRatingEntryById(ViewMovieWRating.Id);
                if (MovieRatingEntry != null)
                {
                    ViewMovieWRating.Rating = MovieRatingEntry.Rating;
                }

            }

            return ViewMoviesWithRatings;
        }

        [HttpGet("{id}")]
        // GET: api/MoviesRatings/5
        public async Task<ActionResult<ViewMovie>> EditMovieRating(int? Id)
        {
            if (Id == null)
            {
                return NotFound();
            }
            SWAPIMovie = await _swapiService.GetMovie(Id.Value);

            ViewMovieWithRating = _mapper.Map<Movie, ViewMovie>(SWAPIMovie);
            var MovieRatingEntry = await _movieRatingsService.GetMovieRatingEntryById(ViewMovieWithRating.Id);

            if (MovieRatingEntry != null)
            {
                ViewMovieWithRating.Rating = MovieRatingEntry.Rating;
            }

            List<Task> lt = new();
            ViewMovieWithRating.CharactersList = new();
            ViewMovieWithRating.PlanetsList = new();
            ViewMovieWithRating.StarshipsList = new();
            ViewMovieWithRating.VehiclesList = new();
            ViewMovieWithRating.SpeciesList = new();

            foreach (string item in ViewMovieWithRating.characters)
            {
                lt.Add(Task.Run(async () =>
                {
                    ViewMovieWithRating.CharactersList.Add(await _swapiService.GetPeople(item));
                }));
            }
            foreach (string item in ViewMovieWithRating.planets)
            {
                lt.Add(Task.Run(async () =>
                {
                    ViewMovieWithRating.PlanetsList.Add(await _swapiService.GetPlanet(item));
                }));
            }
            foreach (string item in ViewMovieWithRating.starships)
            {
                lt.Add(Task.Run(async () =>
                {
                    ViewMovieWithRating.StarshipsList.Add(await _swapiService.GetStarship(item));
                }));
            }
            foreach (string item in ViewMovieWithRating.vehicles)
            {
                lt.Add(Task.Run(async () =>
                {
                    ViewMovieWithRating.VehiclesList.Add(await _swapiService.GetVehicle(item));
                }));
            }
            foreach (string item in ViewMovieWithRating.species)
            {
                lt.Add(Task.Run(async () =>
                {
                    ViewMovieWithRating.SpeciesList.Add(await _swapiService.GetSpecies(item));
                }));
            }

            await Task.WhenAll(lt);

            return ViewMovieWithRating;
        }

        // POST: api/MoviesRatings/5
        [HttpPost("{id}")]
        public async Task<IActionResult> UpdateMovieRating(int id, [Bind("Id,Rating")] ViewMovie viewMovieWithRating)
        {
            if (id != viewMovieWithRating.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    await _movieRatingsService.SaveMovieWithRating(viewMovieWithRating.Id, viewMovieWithRating.Rating);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "DB Saving issue");
                }
            }
            return CreatedAtAction(
                nameof(EditMovieRating),
                new { id = viewMovieWithRating.Id },
                viewMovieWithRating);
            //return NoContent();
        }


    }
}
