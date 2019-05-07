namespace Restaurant.Data
{

    public interface IUserFactory
    {
        User createUser();
    }

    public class User
    {
        public string passWord { get; set; }
        public string userName { get; set; }
    }

    public class DefaultUserFactory : IUserFactory
    {
        public User createUser()
        {
            return new User
            {
                userName = "root",
                passWord = "123456",
            };
        }
    }
}