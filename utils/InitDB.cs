using Restaurant.Middleware;
using Restaurant.Data;
using Microsoft.EntityFrameworkCore;

namespace Restaurant.Utils
{

    interface IDBcontextBuilder
    {
        void makeSeats(int num);
        void makeStatistics();
    }

    // Patterns: Creational Builder
    // Algorithm: _
    // Description: 初始化 数据库
    public class initDB : IDBcontextBuilder
    {
        private DataContext _dbContext;

        public initDB(DataContext dbContext)
        {
            this._dbContext = dbContext;

        }

        public void makeSeats(int num)
        {
            var seats = SeatFactory.createSeats(num);
            foreach (var item in seats)
            {
                this._dbContext.seats.Add(item);
            }
            this._dbContext.SaveChanges();
        }

        public void makeStatistics()
        {
            var statistics = StatisticsFactory.createStatistics();
            this._dbContext.statistics.Add(statistics);
            this._dbContext.SaveChanges();
        }

    }
}