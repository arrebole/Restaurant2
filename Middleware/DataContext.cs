using Restaurant.Data;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using Restaurant.Utils;

namespace Restaurant.Middleware
{
    // 数据库上下文
    public class DataContext : DbContext
    {
        // 数据库设置
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            if (DataContext.flag == 0)
            {
                IDBcontextBuilder builder = new initDB(this);
                IUserFactory root = new DefaultUserFactory();

                this.user = root.createUser();
                builder.makeSeats(12);
                builder.makeStatistics();
                DataContext.flag = 2;
            }

        }
        public static int flag = 0;
        // 数据库表
        public User user { set; get; }
        public DbSet<Statistics> statistics { set; get; }
        public DbSet<Dish> dishs { set; get; }
        public DbSet<Seat> seats { set; get; }

    }
}