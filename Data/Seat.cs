using System;
using System.Collections.Generic;
using Restaurant.Data;


namespace Restaurant.Data
{
    public class Seat
    {
        public long Id { get; set; }
        public Boolean isCanUse { get; set; }
        public double total { get; set; }
        public string orderForm { get; set; }
    }


    // Patterns: Creational SimpleFactory
    // Algorithm: _
    // Description: 创建初始化的 List<Srat>
    public class SeatFactory
    {
        public static List<Seat> createSeats(int num)
        {
            var seats = new List<Seat>();
            for (int i = 0; i < num; i++)
            {
                seats.Add(new Seat
                {
                    isCanUse = true,
                    total = 0,
                });
            }
            return seats;
        }
    }
}