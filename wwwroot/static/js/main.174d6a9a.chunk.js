(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{187:function(e,t,a){e.exports=a(392)},192:function(e,t,a){},193:function(e,t,a){},202:function(e,t,a){},374:function(e,t,a){},375:function(e,t,a){},376:function(e,t,a){},379:function(e,t,a){},380:function(e,t,a){},386:function(e,t,a){},392:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(8),s=a.n(c),i=(a(192),a(12)),o=a(13),l=a(18),u=a(17),d=a(19),h=a(32),m=a(55),f=(a(193),function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("header",{className:"home-header"},r.a.createElement("h3",null,"yanglisha")),r.a.createElement("article",{className:"home-article home-wrapper"},r.a.createElement("section",{className:"select-service"},r.a.createElement("h3",null,r.a.createElement(h.b,{to:"/order/choose-seat"},"\u7528\u6237\u4e0b\u5355"))),r.a.createElement("section",{className:"select-service"},r.a.createElement("h3",null,r.a.createElement(h.b,{to:"/admin/dish-manage"},"\u540e\u53f0\u7ba1\u7406")))))}}]),t}(r.a.Component)),p=a(27),b=a.n(p),v=a(33),g=function(){function e(){Object(i.a)(this,e),this._domain=void 0,this._domain=""}return Object(o.a)(e,[{key:"commfetchGetFunc",value:function(e){return fetch(e,{mode:"cors",method:"GET"}).then(function(e){return e.json()})}},{key:"commfetchPostFunc",value:function(e,t){return fetch(e,{mode:"cors",method:"POST",body:t,headers:{"content-type":"application/json"}}).then(function(e){return e.json()})}},{key:"getOrderSeats",value:function(){return this.commfetchGetFunc("".concat(this._domain,"/api/Order/ChooseSeat"))}},{key:"postTryLogin",value:function(e){return this.commfetchPostFunc("".concat(this._domain,"/api/admin/login"),JSON.stringify(e))}},{key:"postManageDish",value:function(e){return this.commfetchPostFunc("".concat(this._domain,"/api/admin/dish"),JSON.stringify(e))}},{key:"getAllDish",value:function(){return this.commfetchGetFunc("".concat(this._domain,"/api/order/getdish"))}},{key:"postOrder",value:function(e){return console.log(JSON.stringify(e)),this.commfetchPostFunc("".concat(this._domain,"/api/order/updateorderform"),JSON.stringify(e))}},{key:"getPlaceholder",value:function(e){return this.commfetchGetFunc("".concat(this._domain,"/api/order/placeholder?seatId=").concat(e))}},{key:"getOrderForm",value:function(e){return this.commfetchGetFunc("".concat(this._domain,"/api/order/orderForm?seatId=").concat(e))}},{key:"getSeatClose",value:function(e){return this.commfetchGetFunc("".concat(this._domain,"/api/order/PlaceClose?seatId=").concat(e))}},{key:"getRefund",value:function(e){return this.commfetchGetFunc("".concat(this._domain,"/api/order/Refund?seatId=").concat(e))}},{key:"getStatus",value:function(){return this.commfetchGetFunc("".concat(this._domain,"/api/admin/Statistics"))}}],[{key:"Instance",value:function(){return this._instance||(this._instance=new e),this._instance}}]),e}();g._instance=void 0;var y,E=g.Instance();!function(e){e[e.seatId=0]="seatId"}(y||(y={}));var k=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,null,[{key:"getlocalStorage",value:function(e){switch(e){case y.seatId:return window.localStorage.getItem("seatId")}}},{key:"setlocalStorage",value:function(e,t){switch(e){case y.seatId:return window.localStorage.setItem("seatId",t)}}}]),e}();function O(e,t){var a=new Date;a.setTime(a.getTime()+18e5),document.cookie=e+"="+escape(t)+";expires="+a.toUTCString()+";path=/"}function j(){var e=document.cookie,t=new RegExp("admin=ok");return null!=e.match(t)}var w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={seat:[]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=Object(v.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getOrderSeats();case 2:t=e.sent,this.setState({seat:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"bindHandleIn",value:function(e){var t=e.currentTarget.dataset.seatid;null!=t&&window.location.replace("/order/set-order?seatId=".concat(t))}},{key:"createButton",value:function(e,t){return t?r.a.createElement("button",{className:"buttonCanUse","data-seatid":e,onClick:this.bindHandleClick,type:"button"}," \u9009\u4f4d "):r.a.createElement("button",{style:{backgroundColor:"rgb(92, 92, 92)"},className:"buttonNotCanUse","data-seatid":e,type:"button",onClick:this.bindHandleIn}," \u5df2\u6ee1 ")}},{key:"bindHandleClick",value:function(e){var t=e.currentTarget.dataset.seatid,a=t||"-1";E.getPlaceholder(a).then(function(e){"success"===e.code&&(k.setlocalStorage(y.seatId,a),window.location.replace("/order/set-order?seatId=".concat(a)))})}},{key:"render",value:function(){var e=this;return r.a.createElement("article",{className:"choose-seat-container"},this.state.seat.map(function(t,a){return r.a.createElement("section",{key:a,className:"seat-modul"},r.a.createElement("h3",null,"\u5ea7\u4f4d\u53f7\uff1a",t.id),e.createButton(t.id,t.isCanUse))}))}}]),t}(r.a.Component),C=(a(202),function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"ifJump",value:function(){var e=k.getlocalStorage(y.seatId);return null!=e?e:null}},{key:"render",value:function(){return r.a.createElement("div",{className:"choose-seat"},r.a.createElement("header",{className:"choose-seat-header"},r.a.createElement("nav",{className:"header-nav"},r.a.createElement(h.b,{to:"/"},r.a.createElement("strong",null,"\u8fd4\u56de\u9996\u9875")))),r.a.createElement(w,this.props))}}]),t}(r.a.Component)),S=(a(203),a(182)),x=(a(131),a(96)),N=(a(132),a(73)),I=(a(76),a(30)),F=(a(208),a(124)),D=(a(210),a(75)),T=(a(212),a(184)),_=(a(214),a(127)),P=a(26),R=(a(393),a(125)),B=R.a.Column,G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={seatId:"0",dataSource:[],orderForm:[],total:0},a.fetchData=a.fetchData.bind(Object(P.a)(a)),a.changeOrder=a.changeOrder.bind(Object(P.a)(a)),a.postOrder=a.postOrder.bind(Object(P.a)(a)),a.calculateTotal=a.calculateTotal.bind(Object(P.a)(a)),a.settlement=a.settlement.bind(Object(P.a)(a)),a.bindRefund=a.bindRefund.bind(Object(P.a)(a)),a.goBack=a.goBack.bind(Object(P.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchData(),this.setQuerySeatId()}},{key:"setQuerySeatId",value:function(){var e=function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),a=window.location.search.substr(1).match(t);return null!=a?unescape(a[2]):null}("seatId");e?this.setState({seatId:e}):this.goBack()}},{key:"fetchData",value:function(){var e=Object(v.a)(b.a.mark(function e(){var t,a,n,r,c,s,i,o,l,u,d,h,m,f;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getAllDish();case 2:return t=e.sent,e.next=5,E.getOrderForm(this.state.seatId);case 5:a=e.sent,n=!0,r=!1,c=void 0,e.prev=9,s=a[Symbol.iterator]();case 11:if(n=(i=s.next()).done){e.next=35;break}for(o=i.value,l=!0,u=!1,d=void 0,e.prev=16,h=t[Symbol.iterator]();!(l=(m=h.next()).done);l=!0)f=m.value,o.id==f.id&&(f.count=o.count);e.next=24;break;case 20:e.prev=20,e.t0=e.catch(16),u=!0,d=e.t0;case 24:e.prev=24,e.prev=25,l||null==h.return||h.return();case 27:if(e.prev=27,!u){e.next=30;break}throw d;case 30:return e.finish(27);case 31:return e.finish(24);case 32:n=!0,e.next=11;break;case 35:e.next=41;break;case 37:e.prev=37,e.t1=e.catch(9),r=!0,c=e.t1;case 41:e.prev=41,e.prev=42,n||null==s.return||s.return();case 44:if(e.prev=44,!r){e.next=47;break}throw c;case 47:return e.finish(44);case 48:return e.finish(41);case 49:this.setState({dataSource:t,orderForm:a}),this.calculateTotal();case 51:case"end":return e.stop()}},e,this,[[9,37,41,49],[16,20,24,32],[25,,27,31],[42,,44,48]])}));return function(){return e.apply(this,arguments)}}()},{key:"countBadge",value:function(){return this.state.orderForm.map(function(e){return r.a.createElement(T.a,{key:e.name,style:{margin:"10px"},count:e.count},r.a.createElement("div",{style:{height:"12px",fontSize:"16px",padding:"16px"}},r.a.createElement(_.a,{color:"green"},e.name)))})}},{key:"goBack",value:function(){window.location.replace("/order/choose-seat")}},{key:"calculateTotal",value:function(){var e=0,t=this.state.orderForm,a=!0,n=!1,r=void 0;try{for(var c,s=t[Symbol.iterator]();!(a=(c=s.next()).done);a=!0){var i=c.value;i.count>0&&(e+=i.count*i.price)}}catch(o){n=!0,r=o}finally{try{a||null==s.return||s.return()}finally{if(n)throw r}}this.setState({total:e})}},{key:"changeOrder",value:function(e,t){var a=this.state.dataSource,n=!0,r=!1,c=void 0;try{for(var s,i=a[Symbol.iterator]();!(n=(s=i.next()).done);n=!0){var o=s.value;o.id===t.id&&(o.count=parseInt(e))}}catch(b){r=!0,c=b}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}this.setState({dataSource:a});var l=[],u=!0,d=!1,h=void 0;try{for(var m,f=a[Symbol.iterator]();!(u=(m=f.next()).done);u=!0){var p=m.value;p.count>0&&l.push(p)}}catch(b){d=!0,h=b}finally{try{u||null==f.return||f.return()}finally{if(d)throw h}}this.setState({orderForm:l}),this.calculateTotal()}},{key:"postOrder",value:function(){this.state.total<=0?D.a.error("\u6ca1\u6709\u8ba2\u5355"):E.postOrder({seatId:parseInt(this.state.seatId),time:(new Date).toLocaleString(),total:this.state.total,list:JSON.stringify(this.state.orderForm)}).then(function(e){"success"===e.code?F.a.open({message:"success",description:"\u6570\u636e\u66f4\u65b0\u6210\u529f",duration:3}):F.a.open({message:"error",description:"\u6570\u636e\u63d0\u4ea4\u5931\u8d25",duration:3})})}},{key:"settlement",value:function(){var e=Object(v.a)(b.a.mark(function e(){var t=this;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.state.total<=0)){e.next=3;break}return D.a.error("\u6ca1\u6709\u8ba2\u5355"),e.abrupt("return");case 3:return e.next=5,E.getSeatClose(this.state.seatId);case 5:"success"===e.sent.code&&(D.a.success("\u6210\u529f\u603b\u8ba1\uffe5".concat(this.state.total)),setTimeout(function(){t.goBack()},2e3));case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"bindRefund",value:function(){var e=Object(v.a)(b.a.mark(function e(){var t=this;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getRefund(this.state.seatId);case 2:"success"===e.sent.code&&(D.a.success("\u9000\u6b3e\u6210\u529f"),setTimeout(function(){t.goBack()},2e3));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("article",{className:"alldish"},r.a.createElement("section",{className:"set-order-buttons"},r.a.createElement(I.a,{onClick:this.goBack},"\u8fd4\u56de"),r.a.createElement(I.a,{onClick:this.postOrder},"\u63d0\u4ea4/\u4fee\u6539"),r.a.createElement(I.a,{onClick:this.settlement},"\u7ed3\u7b97\u5e76\u9000\u5ea7"),r.a.createElement(I.a,{type:"danger",onClick:this.bindRefund},"\u9000\u6b3e")),r.a.createElement("section",{className:"set-order-buttons"},r.a.createElement(N.a,{title:"\u603b\u8ba1\uffe5",value:this.state.total})),r.a.createElement("section",{className:"order-list"},this.countBadge()),r.a.createElement(R.a,{rowKey:function(e){return e.name},dataSource:this.state.dataSource},r.a.createElement(B,{title:"\u83dc\u540d",dataIndex:"name",key:"name"}),r.a.createElement(B,{title:"\u4ef7\u683c",dataIndex:"price",key:"price"}),r.a.createElement(B,{title:"\u9500\u91cf",dataIndex:"salesVoluma",key:"salesVoluma"}),r.a.createElement(B,{title:"\u7c7b\u578b",dataIndex:"classify",key:"classify",render:function(e){return r.a.createElement("span",null,r.a.createElement(_.a,{color:"blue",key:e},e))}}),r.a.createElement(B,{title:"\u64cd\u4f5c",render:function(t,a){return r.a.createElement("span",null,r.a.createElement(x.a,{min:0,max:1e5,defaultValue:a.count,onChange:function(t){e.changeOrder(t,a)}}))}})))}}]),t}(r.a.Component),J=(a(374),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"urlParams",value:function(){var e=window.location.search,t=new RegExp("(?!seatId=)[0-9]+"),a=e.match(t);return null==a?null:a[0]}},{key:"jump",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/order/choose-seat";window.location.replace(e)}},{key:"ifJump",value:function(){var e=window.localStorage.getItem("seatId"),t=this.urlParams();null!=e&&null!=t?t[0]===e||this.jump("/order/set-order?seatId=".concat(e)):this.jump()}},{key:"render",value:function(){return r.a.createElement("div",{className:"set-order"},r.a.createElement("article",{className:"set-order-main"},r.a.createElement("section",null,r.a.createElement(S.a,{message:"\u70b9\u9910\u9875\u9762",type:"success",showIcon:!0})),r.a.createElement("section",{className:"show-dishs"},r.a.createElement(G,null))))}}]),t}(r.a.Component)),M=(a(375),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={userName:"",passWord:""},a.handelUserChange=a.handelUserChange.bind(Object(P.a)(a)),a.handelPasswdChange=a.handelPasswdChange.bind(Object(P.a)(a)),a.bindLoginClick=a.bindLoginClick.bind(Object(P.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"bindLoginClick",value:function(){var e=Object(v.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.postTryLogin({userName:this.state.userName,passWord:this.state.passWord});case 2:if("success"!==e.sent.code){e.next=7;break}return O("admin","ok"),window.location.href="/admin/dish-manage",e.abrupt("return");case 7:alert("\u9519\u8bef");case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handelUserChange",value:function(e){this.setState({userName:e.currentTarget.value})}},{key:"handelPasswdChange",value:function(e){this.setState({passWord:e.currentTarget.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"login"},r.a.createElement("h1",{className:"login-title"},"\u7ba1\u7406\u5458\u767b\u9646\u9875\u9762"),r.a.createElement("section",{className:"login-main"},r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("strong",null,"\u7528\u6237"),r.a.createElement("input",{className:"login-input",autoComplete:"on",onChange:this.handelUserChange,placeholder:"UserName"})),r.a.createElement("div",null,r.a.createElement("strong",null,"\u5bc6\u7801"),r.a.createElement("input",{className:"login-input",autoComplete:"on",onChange:this.handelPasswdChange,type:"password",placeholder:"PassWorld"})),r.a.createElement("div",null,r.a.createElement("button",{className:"login-btn",type:"button",onClick:this.bindLoginClick},"\u767b\u9646")))))}}]),t}(r.a.Component)),U=(a(376),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"admin-header"},r.a.createElement("nav",null,r.a.createElement(h.b,{to:"/"},"\u9996\u9875"),r.a.createElement(h.b,{to:"/admin/dish-manage"},"\u83dc\u5355\u7ba1\u7406"),r.a.createElement(h.b,{to:"/admin/status-manage"},"\u8425\u4e1a\u7edf\u8ba1")))}}]),t}(r.a.Component)),L=(a(377),a(181)),W=(a(134),a(45)),H=(a(379),W.a.Option),V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={func:0,id:-1,price:0,name:"",classify:"\u4e3b\u83dc"},a.handelChange=a.handelChange.bind(Object(P.a)(a)),a.handelSub=a.handelSub.bind(Object(P.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handelChange",value:function(e,t){switch(t){case"func":this.setState({func:e});break;case"price":this.setState({price:e});break;case"classify":this.setState({classify:e});break;case"name":this.setState({name:e})}}},{key:"handelSub",value:function(){var e=Object(v.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.postManageDish({id:this.state.id,classify:this.state.classify,func:this.state.func,name:this.state.name,price:this.state.price});case 2:"success"===e.sent.code?window.location.reload():alert("\u5931\u8d25");case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"modify-dish"},r.a.createElement("div",{className:"dish-input"},r.a.createElement("h3",null,"\u64cd\u4f5c\uff1a"),r.a.createElement(W.a,{style:{width:300},placeholder:"\u9009\u62e9\u4e00\u79cd\u64cd\u4f5c",onChange:function(t){e.handelChange(parseInt(t),"func")}},r.a.createElement(H,{value:"1"},"\u6dfb\u52a0"),r.a.createElement(H,{value:"0"},"\u4fee\u6539"),r.a.createElement(H,{value:"-1"},"\u5220\u9664"))),r.a.createElement("div",{className:"dish-input"},r.a.createElement("h3",null,"\u83dc\u540d\uff1a"),r.a.createElement(L.a,{onChange:function(t){e.handelChange(t.currentTarget.value,"name")},style:{width:300},placeholder:"\u4f8b\u5982\uff1a\u76ae\u86cb\u7626\u8089\u7ca5"})),r.a.createElement("div",{className:"dish-input"},r.a.createElement("h3",null,"\u5206\u7c7b\uff1a"),r.a.createElement(W.a,{style:{width:300},placeholder:"\u83dc\u54c1\u5206\u7c7b",onChange:function(t){e.handelChange(t,"classify")}},r.a.createElement(H,{value:"\u4e3b\u98df"},"\u4e3b\u98df"),r.a.createElement(H,{value:"\u51c9\u83dc"},"\u51c9\u83dc"),r.a.createElement(H,{value:"\u70ed\u83dc"},"\u70ed\u83dc"),r.a.createElement(H,{value:"\u6c64\u7c7b"},"\u6c64\u7c7b"))),r.a.createElement("div",{className:"dish-input"},r.a.createElement("h3",null,"\u4ef7\u683c\uff1a"),r.a.createElement(x.a,{"data-flag":"price",style:{width:300},min:0,step:.1,defaultValue:0,onChange:function(t){e.handelChange(t,"price")}})),r.a.createElement("div",{className:"dish-input dish-button"},r.a.createElement(I.a,{type:"primary",icon:"thunderbolt",onClick:this.handelSub},"\u63d0\u4ea4\uff01")))}}]),t}(r.a.Component),A=(a(380),function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return j()?r.a.createElement("div",{className:"Manage"},r.a.createElement(U,null),r.a.createElement("article",{className:"dish-manage-main"},r.a.createElement(V,null))):r.a.createElement(m.a,{to:"/admin/login"})}}]),t}(r.a.Component)),Q=(a(381),a(183)),z=(a(383),a(126)),K=(a(384),a(9)),$=(a(386),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={totalRevenue:0,subscription:0,refund:0},a.fetchData=a.fetchData.bind(Object(P.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=Object(v.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getStatus();case 2:t=e.sent,console.log(t),this.setState({totalRevenue:t.totalRevenue,subscription:t.subscription,refund:t.refund}),console.log(this.state);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return j()?r.a.createElement("div",{className:"Manage"},r.a.createElement(U,null),r.a.createElement("section",{className:"StatusManage-grah"},r.a.createElement(Q.a,{gutter:16},r.a.createElement(z.a,{span:12},r.a.createElement(N.a,{title:"\u603b\u6536\u5165",value:this.state.totalRevenue,prefix:r.a.createElement(K.a,{type:"euro"})})),r.a.createElement(z.a,{span:12},r.a.createElement(N.a,{title:"\u8ba2\u5355\u6b21\u6570/\u9000\u6b3e",value:this.state.subscription,suffix:"/".concat(this.state.refund)}))))):r.a.createElement(m.a,{to:"/admin/login"})}}]),t}(r.a.Component)),q=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:f}),r.a.createElement(m.b,{exact:!0,path:"/order/choose-seat",component:C}),r.a.createElement(m.b,{exact:!0,path:"/order/set-order",component:J}),r.a.createElement(m.b,{exact:!0,path:"/admin/login",component:M}),r.a.createElement(m.b,{exact:!0,path:"/admin/dish-manage",component:A}),r.a.createElement(m.b,{exact:!0,path:"/admin/status-manage",component:$}),r.a.createElement(m.a,{to:"/"})))}}]),t}(r.a.Component),X=(a(391),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(q,null)}}]),t}(r.a.Component));s.a.render(r.a.createElement(X,null),document.getElementById("root"))}},[[187,1,2]]]);
//# sourceMappingURL=main.174d6a9a.chunk.js.map