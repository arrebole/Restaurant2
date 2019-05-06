import React from "react";
import api from "../api";
import { ISeat, IProps } from "../types/interface";
import { localStorage, StorageType } from "../utils";

interface State {
    seat: Array<ISeat>,
}


class CustomerSeats extends React.Component<IProps, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            seat: [],
        }
    }
    // 生命周期钩子
    public componentDidMount() {
        this.fetchData();
    }
    // 获取后台数据
    private async fetchData() {
        let res: ISeat[] = await api.getOrderSeats();
        this.setState({
            seat: res
        })

    }
    private bindHandleIn(e:any){
        let seatId = e.currentTarget.dataset["seatid"];
        if(seatId == null){
            return;
        }
        window.location.replace(`/order/set-order?seatId=${seatId}`);
    }
    // 根据是否可使用创建button
    private createButton(seatid: number, isCanUse: boolean): JSX.Element {
        if (isCanUse) {
            return <button className="buttonCanUse" data-seatid={seatid} onClick={this.bindHandleClick} type="button"> 选位 </button>
        }
        return <button style={{backgroundColor:"rgb(92, 92, 92)"}} className="buttonNotCanUse" data-seatid={seatid} type="button" onClick={this.bindHandleIn}> 已满 </button>
    }

    private bindHandleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        let seatId = e.currentTarget.dataset["seatid"];

        let id = seatId ? seatId : "-1";

        api.getPlaceholder(id).then((res) => {
            if (res.code === "success") {
                localStorage.setlocalStorage(StorageType.seatId, id);
                window.location.replace(`/order/set-order?seatId=${id}`);
            }
        })

    }

    render() {
        return (
            <article className="choose-seat-container">
                {
                    // 渲染座位列表
                    this.state.seat.map((item, index) => {
                        return (
                            <section key={index} className="seat-modul" >
                                <h3>座位号：{item.id}</h3>
                                {this.createButton(item.id, item.isCanUse)}
                            </section>
                        )
                    })
                }
            </article>
        )
    }
}

export default CustomerSeats;