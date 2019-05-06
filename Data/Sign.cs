namespace Restaurant.Data
{
    public enum SignType
    {
        error,
        success,
    }
    public class Sign
    {
        public Sign(string code)
        {
            this.code = code;
        }
        public string code;
    }

    public class SignFactory
    {
        public static Sign createSign(SignType t)
        {
            switch (t)
            {
                case SignType.error:
                    return new Sign("error");
                case SignType.success:
                    return new Sign("success");
                default:
                    return null;
            }
        }
    }
}