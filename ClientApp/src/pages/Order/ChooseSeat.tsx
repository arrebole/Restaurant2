import React from 'react';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import CustomerSeats from "../../compoents/CustomerSeats"
import { localStorage, StorageType } from "../../utils";
import "../../styles/chooseSeat.css"
import { IProps } from "../../types/interface";

class ChooseSeat extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    // 判断是否跳转
    private ifJump(): string | null {
        let seatId = localStorage.getlocalStorage(StorageType.seatId);
        if (seatId != null) {
            return seatId;
        }
        return null;
    }


    public render() {
        // let seatId = this.ifJump();
        // if (seatId != null) {
        //     return <Redirect to={`/order/set-order?seatId=${seatId}`}></Redirect>
        // }

        return (
            <div className="choose-seat">
                <header className="choose-seat-header">
                    <nav className="header-nav">
                        <Link to="/"><strong>返回首页</strong></Link>
                    </nav>
                </header>

                <CustomerSeats {...this.props}></CustomerSeats>

            </div>
        )
    }
}

export default ChooseSeat;