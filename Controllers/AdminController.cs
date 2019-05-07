using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Restaurant.Data;
using Restaurant.Middleware;
using Restaurant.Utils;
using Microsoft.EntityFrameworkCore;

namespace Restaurant.Controllers
{
    //[Produces("application/json")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        // 数据库上下文引用
        private DataContext _dbContext;

        // 构造函数
        public AdminController(DataContext dbContext)
        {
            // 初始化座位
            this._dbContext = dbContext;
        }

        // 管理员登陆
        [HttpPost]
        public ActionResult<Sign> Login([FromBody]User info)
        {
            if (info.userName == this._dbContext.user.userName && info.passWord == this._dbContext.user.passWord)
            {
                return SignFactory.createSign(SignType.success);
            }
            return SignFactory.createSign(SignType.error);
        }

        // 菜单管理
        [HttpPost]
        public ActionResult<Sign> Dish([FromBody]ManageDish manageDish)
        {
            // 将菜单操作转化为菜单对象
            //Console.WriteLine("========修改菜单===========");
            Dish dish = DishFactoary.ManageDishCloneToDish(manageDish);

            // 区分操作
            switch (manageDish.func)
            {
                // 添加
                case ManageDishFunc.add:
                    //Console.WriteLine("========添加===========");
                    _dbContext.dishs.Add(dish);
                    break;

                // 删除
                case ManageDishFunc.delete:
                    // Console.WriteLine("=========删除===========");
                    var item = _dbContext.dishs.FirstOrDefault(t => t.name == manageDish.name);
                    _dbContext.dishs.Remove(item);
                    break;

                // 修改
                case ManageDishFunc.modify:
                    // Console.WriteLine("========修改===========");
                    var updateItem = _dbContext.dishs.FirstOrDefault(t => t.name == manageDish.name);
                    if (updateItem == null)
                    {
                        return SignFactory.createSign(SignType.error);
                    }

                    updateItem = Copy.UpdateDish(updateItem, dish);
                    _dbContext.dishs.Update(updateItem);
                    break;

                default:
                    break;
            }
            
            _dbContext.SaveChanges();
            return SignFactory.createSign(SignType.success);
        }


        [HttpGet]
        public ActionResult<List<Dish>> Getdish()
        {
            //Console.WriteLine("========获取所有菜单===========");
            return _dbContext.dishs.AsNoTracking().ToList();
        }

        // 营收统计
        [HttpGet]
        public ActionResult<Statistics> Statistics()
        {
            var item = _dbContext.statistics.AsNoTracking().ToList();
            return item[0];
        }

    }
}