using Microsoft.EntityFrameworkCore;
using MoviesRatingsApp.Controllers;
using MoviesRatingsWeBAPI.Common;
using MoviesRatingsWeBAPI.Data;
using MoviesRatingsWeBAPI.Models;
using System;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace MoviesRatingsWeBAPIxTests
{
    public class MovieRatingsWAPITests
    {
        [Fact]
        public void TestController1()
        {
            //MoviesRatingsController mrc = new MoviesRatingsController()
        }
    }

    public class AnotherMovieRatingsContrTestClass
    {

        private DbContextOptions<ApplicationDBContext> dbContextOptions = new DbContextOptionsBuilder<ApplicationDBContext>()
            .UseInMemoryDatabase(databaseName: "ApplicationDB")
            .Options;
        private MoviesRatingsController controller;

        public AnotherMovieRatingsContrTestClass()
        {
            SeedDb();

            ///controller = new ReservationsController(new PrimeDbContext(dbContextOptions));
        }

        private void SeedDb()
        {
            using (var context = new ApplicationDBContext(dbContextOptions))
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();

                var MovieRatingEntry = new MovieRating();
                MovieRatingEntry.MovieID = 2;
                MovieRatingEntry.Rating = 6;
                context.Add(MovieRatingEntry);
                context.SaveChanges();
            }
            

           


            //    var rooms = new List<Room>
            //{
            //    new Room { Id = 1, Description = "Room nr 1", Number = 1, Level = 1, RoomType = RoomType.Standard },
            //    new Room { Id = 2, Description = "Room nr 2", Number = 2, Level = 1, RoomType = RoomType.Standard },
            //    new Room { Id = 3, Description = "Room nr 3", Number = 3, Level = 2, RoomType = RoomType.Suite }
            //};

            //    var profiles = new List<Profile>
            //{
            //    new Profile { Id = 1, Ref = "Profile 1", Forename = "Micha³", Surname = "Bia³ecki" },
            //    new Profile { Id = 2, Ref = "Profile 2", Forename = "John", Surname = "Show" },
            //    new Profile { Id = 3, Ref = "Profile 3", Forename = "Daenerys", Surname = "Targaryen" }
            //};

            //    context.AddRange(rooms);
            //    context.AddRange(profiles);

            //    context.AddRange(new List<Reservation>
            //{
            //    new Reservation
            //    {
            //        Id = 1,
            //        Room = rooms[0],
            //        Profiles = new List<Profile>{ profiles[0] },
            //        From = DateTime.Today,
            //        To = DateTime.Today.AddDays(2)
            //    },
            //    new Reservation
            //    {
            //        Id = 2,
            //        Room = rooms[2],
            //        Profiles = new List<Profile>{ profiles[1], profiles[2] },
            //        From = DateTime.Today.AddDays(1),
            //        To = DateTime.Today.AddDays(3)
            //    }
            //});

            //context.SaveChanges();
        }


        [Fact]
        public async Task Get_MovieRatingsService_GetMovieRatingEntryByID()
        {
            using var context = new ApplicationDBContext(dbContextOptions);
            var mrs = new MoviesRatingsService(context);
            var mr = await mrs.GetMovieRatingEntryById(2);
            Assert.NotNull(mr);
        }

        [Fact]
        public async Task TestSaveMovieRating()
        {
            using var context = new ApplicationDBContext(dbContextOptions);
            var mrs = new MoviesRatingsService(context);
            await mrs.SaveMovieWithRating(1, 5);
            var mr = await mrs.GetMovieRatingEntryById(1);
            Assert.True(mr.Rating == 5);
        }
    }
    public class AnotherInheritingMovieRatingsContrTestClass
    {
        protected DbContextOptions<ApplicationDBContext> ContextOptions { get; }

        protected AnotherInheritingMovieRatingsContrTestClass(DbContextOptions<ApplicationDBContext> contextOptions)
        {
            ContextOptions = contextOptions;

            Seed();
        }



        private void Seed()
        {
            using (var context = new ApplicationDBContext(ContextOptions))
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();

                var MovieRatingEntry = new MovieRating();
                MovieRatingEntry.MovieID = 2;
                MovieRatingEntry.Rating = 6;
                context.Add(MovieRatingEntry);
                context.SaveChanges();


                //var one = new Item("ItemOne");
                //one.AddTag("Tag11");
                //one.AddTag("Tag12");
                //one.AddTag("Tag13");

                //var two = new Item("ItemTwo");

                //var three = new Item("ItemThree");
                //three.AddTag("Tag31");
                //three.AddTag("Tag31");
                //three.AddTag("Tag31");
                //three.AddTag("Tag32");
                //three.AddTag("Tag32");

                //context.AddRange(one, two, three);

                //context.SaveChanges();
            }
        }
    }

    public class InMemoryMovieRatingControllerTest : AnotherInheritingMovieRatingsContrTestClass
    {
        public InMemoryMovieRatingControllerTest()
            : base(
                new DbContextOptionsBuilder<ApplicationDBContext>()
                    .UseInMemoryDatabase(databaseName: "ApplicationDB")
                    .Options)
        {
        }


        [Fact]
        public async Task Can_get_items()
        {
            using var context = new ApplicationDBContext(ContextOptions);
            var mrs = new MoviesRatingsService(context);
            var mr = await mrs.GetMovieRatingEntryById(2);
            Assert.NotNull(mr);
        }

        [Fact]
        public async Task Can_save_items()
        {
            using var context = new ApplicationDBContext(ContextOptions);
            var mrs = new MoviesRatingsService(context);
            await mrs.SaveMovieWithRating(1, 5);
            var mr = await mrs.GetMovieRatingEntryById(1);
            Assert.True(mr.Rating == 5);
        }
    }


    //have a library up on GitHub/Nuget that makes things a little easier: https://github.com/richardszalay/mockhttp
    //var mockHttp = new MockHttpMessageHandler();

    //// Setup a respond for the user api (including a wildcard in the URL)
    //mockHttp.When("http://localost/api/user/*")
    //    .Respond("application/json", "{'name' : 'Test McGee'}"); // Respond with JSON

    //// Inject the handler or client into your application code
    //var client = new HttpClient(mockHttp);

    //var response = await client.GetAsync("http://localhost/api/user/1234");
    //// or without async: var response = client.GetAsync("http://localhost/api/user/1234").Result;

    //var json = await response.Content.ReadAsStringAsync();

    //// No network connection required
    //Console.Write(json); // {'name' : 'Test McGee'}



    //public class MockHttpMessageHandler : HttpMessageHandler
    //{
    //    protected override async Task<HttpResponseMessage> SendAsync(
    //        HttpRequestMessage request,
    //        CancellationToken cancellationToken)
    //    {
    //        //request.RequestUri
    //        //request.Content

    //        var responseMessage = new HttpResponseMessage(HttpStatusCode.OK)
    //        {
    //            Content = new StringContent("Content as string")
    //        };

    //        return await Task.FromResult(responseMessage);
    //    }
    //}

}

