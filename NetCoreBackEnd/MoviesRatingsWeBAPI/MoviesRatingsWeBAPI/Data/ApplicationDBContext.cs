using Microsoft.EntityFrameworkCore;
using MoviesRatingsWeBAPI.Models;

namespace MoviesRatingsWeBAPI.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options)
            : base(options)
        {
        }

        public DbSet<MovieRating> MovieRatings { get; set; }
    }
}
