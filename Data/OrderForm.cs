using System.Collections.Generic;
using Restaurant.Data;

namespace Restaurant.Data
{

    public class OrderForm
    {
        public long Id { get; set; }
        public int seatId { get; set; }
        public double total { get; set; }
        public string time { get; set; }

        public string list { get; set; }
        // 找零
        // public double change(double pay)
        // {
        //     return pay - total;
        // }

        // // 打印账单
        // public string printOrder()
        // {
        //     return "hello world";
        // }

    }
}