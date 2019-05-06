import React from 'react';
import AllDish from "../../compoents/AllDish";
import { IProps } from "../../types/interface";
import "../../styles/setOrder.css";
import { Alert, Button } from 'antd';

class SetOrder extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props)
        this.state = {
        }
    }

    // 生命周期钩子
    public componentDidMount() {
        //this.ifJump();
    }

    // 获取url的seatId
    private urlParams(): (string | null) {
        let param = window.location.search;

        let reg = new RegExp(`(?!seatId=)[0-9]+`);
        let UrlParamSeatId = param.match(reg);

        if (UrlParamSeatId == null) {
            return null;
        }
        return UrlParamSeatId[0];
    }

    private jump(url = "/order/choose-seat") {
        window.location.replace(url);
    }

    // 判断是否允许入座，非法用户进行跳转
    private ifJump() {
        let seatId = window.localStorage.getItem("seatId");
        let UrlParamSeatId = this.urlParams();

        if (seatId == null || UrlParamSeatId == null) {
            this.jump();
            return;
        }
        if (UrlParamSeatId[0] !== seatId) {
            this.jump(`/order/set-order?seatId=${seatId}`);
            return;
        }
    }



    public render(): JSX.Element {
        return (
            <div className="set-order">
                <article className="set-order-main">
                    <section>
                        <Alert
                            message="点餐页面"
                            //description={`￥：${this.state.total}`}
                            type="success"
                            showIcon
                        />
                    </section>


                    <section className="show-dishs">
                        <AllDish></AllDish>
                    </section>

                </article>

            </div>
        )
    }
}


export default SetOrder;