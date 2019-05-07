using Restaurant.Data;
using Restaurant.Middleware;
using Microsoft.EntityFrameworkCore;

namespace Restaurant.Utils
{
    public class Copy
    {
        public static Seat UpdateOrderForm(Seat seat, OrderForm orderForm)
        {
            seat.orderForm = orderForm.list;
            seat.total = orderForm.total;
            return seat;
        }

        public static Dish UpdateDish(Dish needUpdate, Dish template)
        {
            needUpdate.name = template.name;
            needUpdate.price = template.price;
            needUpdate.classify = template.classify;
            return needUpdate;
        }
    }
}