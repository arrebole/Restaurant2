import React from "react";
import AdminHeader from "../../compoents/AdminHeader"
import { Redirect } from "react-router-dom";
import {isAdmin } from "../../utils";

class SeatManage extends React.Component {
    constructor(props: any) {
        super(props)
    }
    render() {
        if(!isAdmin()){
            return <Redirect to="/admin/login"></Redirect>
        }
        return (
            <div className="Manage">
            <AdminHeader />
                SeatManage
            </div>
        )
    }
}

export default SeatManage;