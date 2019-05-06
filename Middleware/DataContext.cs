using Restaurant.Data;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
namespace Restaurant.Middleware
{
    // 数据库上下文
    public class DataContext : DbContext
    {
        // 数据库设置
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        // 数据库表
        public User user = new User { userName = "root", passWord = "123456" };
        public DbSet<Statistics> statistics { set; get; }
        public DbSet<Dish> dishs { set; get; }
        public DbSet<Seat> seats { set; get; }

    }
}