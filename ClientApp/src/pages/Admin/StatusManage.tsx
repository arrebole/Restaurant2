import React from "react";
import AdminHeader from "../../compoents/AdminHeader"
import { Redirect } from "react-router-dom";
import { isAdmin } from "../../utils";
import { Statistic, Row, Col, Icon } from 'antd';
import api from "../../api/index";
import "../../styles/statusManage.css";
import { IStatus } from "../../types/interface"

class StatusManage extends React.Component<any, IStatus> {
    constructor(props: any) {
        super(props)
        this.state = {
            totalRevenue: 0,
            subscription: 0,
            refund: 0
        }
        this.fetchData = this.fetchData.bind(this);
    }

    public componentDidMount() {
        this.fetchData();
    }

    private async fetchData() {
        let res = await api.getStatus();
        console.log(res);
        this.setState({
            totalRevenue: res.totalRevenue,
            subscription: res.subscription,
            refund: res.refund,
        })
        console.log(this.state);
    }

    render() {
        if (!isAdmin()) {
            return <Redirect to="/admin/login"></Redirect>
        }
        return (
            <div className="Manage">
                <AdminHeader />
                <section className="StatusManage-grah">
                    <Row gutter={16}>
                        <Col span={12}>
                            <Statistic title="总收入" value={this.state.totalRevenue} prefix={<Icon type="euro" />} />
                        </Col>
                        <Col span={12}>
                            <Statistic title="订单次数/退款" value={this.state.subscription} suffix={`/${this.state.refund}`} />
                        </Col>
                    </Row>
                </section>

            </div>
        )
    }
}

export default StatusManage;