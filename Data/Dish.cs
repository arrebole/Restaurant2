namespace Restaurant.Data
{

    public class DishBise
    {
        public long Id{ get; set; }
        public double price{ get; set; }
        public string name{ get; set; }
        public string classify{ get; set; }

    }
    public class Dish : DishBise
    {
        public string coverURL{ get; set; }
        public int salesVoluma{ get; set; } // 销量
        public string description{ get; set; }
        public int count{ get; set; }
    }

    public enum ManageDishFunc
    {
        add = 1,
        modify = 0,
        delete = -1,
    }

    public class ManageDish : DishBise
    {
        public ManageDishFunc func{ get; set;}
    }

    public class DishFactoary
    {
        public static Dish ManageDishToDish(ManageDish manageDish)
        {
            Dish dish = new Dish
            {
                name = manageDish.name,
                price = manageDish.price,
                classify = manageDish.classify,
            };
            return dish;
        }
    }
}