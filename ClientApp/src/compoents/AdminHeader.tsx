import React from "react";
import "../styles/adminHeader.css";
import { Link } from "react-router-dom";


class AdminHeader extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <header className="admin-header">
                <nav>
                    {/* <Link to="/admin/seat-manage">座位管理</Link> */}
                    <Link to="/">首页</Link>
                    <Link to="/admin/dish-manage">菜单管理</Link>
                    <Link to="/admin/status-manage">营业统计</Link>
                </nav>
            </header>
        )
    }
}

export default AdminHeader;