import React from "react";
import AdminHeader from "../../compoents/AdminHeader"
import ModifyMenu from "../../compoents/ModifyDishMenu";
import AllDish from "../../compoents/AllDish";

import { Redirect } from "react-router-dom";
import { isAdmin } from "../../utils";
import "../../styles/dishManage.css";

class DishManage extends React.Component {
    constructor(props: any) {
        super(props)
    }
    render() {
        if (!isAdmin()) {
            return <Redirect to="/admin/login"></Redirect>
        }

        return (
            <div className="Manage">
                <AdminHeader />
                <article className="dish-manage-main">
                    <ModifyMenu />

                </article>
            </div>
        )
    }
}

export default DishManage;