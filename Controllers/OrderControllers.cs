using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Restaurant.Middleware;
using Restaurant.Data;
using Microsoft.AspNetCore.Cors;
using Restaurant.Utils;
using Newtonsoft.Json;

namespace Restaurant.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OrderController : Controller
    {
        // 数据库上下文引用
        private DataContext _dbContext;

        // 构造函数
        public OrderController(DataContext dbContext)
        {
            this._dbContext = dbContext;
            if (_dbContext.seats.Count() == 0)
            {
                initDB.makeSeat(_dbContext, 12);
            }

        }

        // 挑选座位
        [HttpGet]
        public ActionResult<List<Seat>> ChooseSeat()
        {
            return _dbContext.seats.AsNoTracking().ToList();
        }

        [HttpGet]
        public ActionResult<List<Dish>> Getdish()
        {
            Console.WriteLine("========获取所有菜单===========");
            return _dbContext.dishs.AsNoTracking().ToList();
        }

        [HttpPost]
        // 提交订单
        public ActionResult<Sign> UpdateOrderForm([FromBody]OrderForm postOrder)
        {
            var item = this._dbContext.seats.FirstOrDefault(i => i.Id == postOrder.seatId);
            item.orderForm = postOrder.list;
            item.total = postOrder.total;
            this._dbContext.seats.Update(item);
            this._dbContext.SaveChanges();
            return SignFactory.createSign(SignType.success);
        }

        [HttpGet]
        // 获取订单
        public string OrderForm(int seatId)
        {
            var item = _dbContext.seats.FirstOrDefault(t => t.Id == seatId);
            if (item.orderForm == null)
            {
                return "[]";
            }
            return item.orderForm;
        }

        [HttpGet]
        // 占位
        public ActionResult<Sign> PlaceHolder(long seatId)
        {
            var item = _dbContext.seats.FirstOrDefault(t => t.Id == seatId);
            if (item.isCanUse == false)
            {
                return SignFactory.createSign(SignType.error);
            }
            item.isCanUse = false;
            _dbContext.seats.Update(item);
            _dbContext.SaveChanges();
            Console.WriteLine(seatId);
            return SignFactory.createSign(SignType.success);
        }

        [HttpGet]
        // 退位置
        public ActionResult<Sign> PlaceClose(long seatId)
        {
            var item = _dbContext.seats.FirstOrDefault(t => t.Id == seatId);
            if (item.isCanUse == true)
            {
                return SignFactory.createSign(SignType.error);
            }
            item.isCanUse = true;

            // 提升销量
            var order = JsonConvert.DeserializeObject<List<Dish>>(item.orderForm);
            foreach (var i in order)
            {
                var dish = _dbContext.dishs.FirstOrDefault(t => t.Id == i.Id);
                dish.salesVoluma += i.count;
                _dbContext.dishs.Update(dish);
            }
            var statistics = _dbContext.statistics.FirstOrDefault(t => t.Id == 1);
            statistics.subscription++;
            _dbContext.statistics.Update(statistics);

            // 清空记录
            item.orderForm = null;
            _dbContext.seats.Update(item);
            _dbContext.SaveChanges();


            return SignFactory.createSign(SignType.success);
        }

        // 退款
        [HttpGet]
        public ActionResult<Sign> Refund(long seatId)
        {
            var item = _dbContext.seats.FirstOrDefault(t => t.Id == seatId);
            if (item.isCanUse == true)
            {
                return SignFactory.createSign(SignType.error);
            }
            item.isCanUse = true;

            var statistics = _dbContext.statistics.FirstOrDefault(t => t.Id == 1);
            statistics.refund++;
            _dbContext.statistics.Update(statistics);

            // 清空记录
            item.orderForm = null;
            _dbContext.seats.Update(item);
            _dbContext.SaveChanges();


            return SignFactory.createSign(SignType.success);
        }
    }
}