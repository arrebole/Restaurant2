namespace Restaurant.Data
{
    public class Statistics
    {
        public long Id { get; set; }
        // 总收入
        public double totalRevenue { get; set; }
        // 点单统计
        public int subscription { get; set; }
        // 退订统计
        public int refund { get; set; }
        // 月份
        public string date { get; set; }
    }

    // Patterns: Creational SimpleFactory
    // Algorithm: _
    // Description: 初始化的Statistics
    public class StatisticsFactory
    {
        public static Statistics createStatistics()
        {
            return new Statistics
            {
                totalRevenue = 0,
                subscription = 0,
                refund = 0,
            };
        }
    }
}