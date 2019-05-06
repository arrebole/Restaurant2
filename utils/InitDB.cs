using Restaurant.Middleware;
using Restaurant.Data;
using Microsoft.EntityFrameworkCore;

namespace Restaurant.Utils
{
    public class initDB
    {
        public static void makeSeat(DataContext _dbContext, int num)
        {
            var seats = SeatFactory.createSeats(num);
            foreach (var item in seats)
            {
                _dbContext.seats.Add(item);
            }
            _dbContext.SaveChanges();
        }

    }
}