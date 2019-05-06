import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import ChooseSeat from "./pages/Order/ChooseSeat";
import SetOrder from "./pages/Order/SetOrder";
import Login from "./pages/Admin/Login";
import DishManage from "./pages/Admin/DishManage"
import SeatManage from "./pages/Admin/SeatManage"
import StatusManage from "./pages/Admin/StatusManage"


class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/order/choose-seat" component={ChooseSeat} />
                    <Route exact path="/order/set-order" component={SetOrder} />
                    <Route exact path="/admin/login" component={Login} />
                    <Route exact path="/admin/dish-manage" component={DishManage} />
                    {/* <Route exact path="/admin/seat-manage" component={SeatManage} /> */}
                    <Route exact path="/admin/status-manage" component={StatusManage} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;