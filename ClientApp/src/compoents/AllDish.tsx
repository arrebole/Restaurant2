import React from "react";
import api from "../api/index";
import { GetQueryString } from "../utils";
import { IDish } from "../types/interface";
import { Table, Tag, InputNumber, Badge, Statistic, Button, notification, message } from 'antd';

const { Column } = Table;

interface IState {
    dataSource: Array<IDish>
    orderForm: Array<IDish>,
    total: number,
    seatId: string
}

class AllDish extends React.Component<any, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            seatId: "0",
            dataSource: [],
            orderForm: [],
            total: 0,
        }
        this.fetchData = this.fetchData.bind(this);
        this.changeOrder = this.changeOrder.bind(this);
        this.postOrder = this.postOrder.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
        this.settlement = this.settlement.bind(this);
        this.bindRefund = this.bindRefund.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    // 生命周期钩子
    public componentDidMount() {
        this.fetchData();
        this.setQuerySeatId();

    }

    private setQuerySeatId() {
        let seatId = GetQueryString("seatId");
        if (!seatId) {
            this.goBack();
            return;
        }
        this.setState({
            seatId
        })
    }
    // 获取后台数据
    private async fetchData() {
        let dataSource: IDish[] = await api.getAllDish();
        let orderForm: IDish[] = await api.getOrderForm(this.state.seatId);

        for (let i of orderForm) {
            for (let j of dataSource) {
                if (i.id == j.id) {
                    j.count = i.count;
                }
            }
        }

        this.setState({
            dataSource,
            orderForm,
        })
        this.calculateTotal();
    }
    private countBadge() {
        return (
            this.state.orderForm.map((dish) => {
                return <Badge key={dish.name} style={{ margin: '10px' }} count={dish.count}>
                    <div style={{ height: "12px", fontSize: "16px", padding: "16px" }}>
                        <Tag color="green">{dish.name}</Tag>
                    </div>
                </Badge >
            })
        )
    }
    private goBack() {
        window.location.replace("/order/choose-seat");
    }

    // 计算订单的总价格
    private calculateTotal() {
        let total = 0;
        let cache = this.state.orderForm;
        for (let item of cache) {
            if (item.count > 0) {
                total += (item.count * item.price);
            }
        }
        this.setState({
            total
        })
    }

    private changeOrder(e: any, dish: any) {
        let cache = this.state.dataSource;
        for (let item of cache) {

            if (item.id === dish.id) {
                item.count = parseInt(e);
            }
        }
        this.setState({
            dataSource: cache
        })

        // 将大于0的数据存放到订单中
        let orderForm: IDish[] = [];
        for (let item of cache) {
            if (item.count > 0) {
                orderForm.push(item);
            }
        }
        this.setState({
            orderForm,
        })

        this.calculateTotal();
    }

    private postOrder() {
        if(this.state.total <= 0){
            message.error("没有订单");
            return;
        }
        api.postOrder({
            seatId: parseInt(this.state.seatId),
            time: new Date().toLocaleString(),
            total: this.state.total,
            list: JSON.stringify(this.state.orderForm),
        }).then((res) => {
            if (res.code === "success") {
                notification.open({
                    message: 'success',
                    description: '数据更新成功',
                    duration: 3,
                });
            } else {
                notification.open({
                    message: 'error',
                    description: '数据提交失败',
                    duration: 3,
                });
            }
        })
    }

    private async settlement() {
        if(this.state.total <= 0){
            message.error("没有订单");
            return;
        }
        let res = await api.getSeatClose(this.state.seatId);
        if (res.code === "success") {
            message.success(`成功总计￥${this.state.total}`)
            setTimeout(() => {
                this.goBack()
            }, 2000)
        }
    }

    private async bindRefund() {
        let res = await api.getRefund(this.state.seatId);
        if (res.code === "success") {
            message.success("退款成功");
            setTimeout(() => {
                this.goBack()
            }, 2000)
        }
    }
    render() {
        return (
            <article className="alldish">

                <section className="set-order-buttons">
                    <Button onClick={this.goBack}>返回</Button>
                    <Button onClick={this.postOrder}>提交/修改</Button>
                    <Button onClick={this.settlement}>结算并退座</Button>
                    <Button type="danger" onClick={this.bindRefund}>退款</Button>
                </section>

                <section className="set-order-buttons">
                    <Statistic title="总计￥" value={this.state.total} />
                </section>

                <section className="order-list">
                    {this.countBadge()}
                </section>


                <Table
                    rowKey={item => item.name}
                    dataSource={this.state.dataSource}>

                    <Column
                        title="菜名"
                        dataIndex="name"
                        key="name"
                    />
                    <Column
                        title="价格"
                        dataIndex="price"
                        key="price"
                    />

                    <Column
                        title="销量"
                        dataIndex="salesVoluma"
                        key="salesVoluma"
                    />
                    <Column
                        title="类型"
                        dataIndex="classify"
                        key="classify"
                        render={tags => (
                            <span>
                                {<Tag color="blue" key={tags}>{tags}</Tag>}
                            </span>
                        )}
                    />
                    <Column
                        title="操作"
                        render={(text, record: IDish) => (
                            <span>
                                <InputNumber min={0} max={100000} defaultValue={record.count} onChange={value => { this.changeOrder(value, record) }} />
                            </span>
                        )}
                    />
                </Table>
            </article>
        )
    }
}

export default AllDish;