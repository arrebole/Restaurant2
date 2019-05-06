import React from "react";
import "../styles/modifyDishMenu.css"

import { Select, Input, InputNumber, Button } from 'antd';
import api from "../api";
const Option = Select.Option;


interface IState {
    func: number,
    id: number,
    price: number,
    name: string,
    classify: string,
}

class ModifyMenu extends React.Component<any, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            func: 0,
            id: -1,
            price: 0,
            name: "",
            classify: "主菜",
        }
        this.handelChange = this.handelChange.bind(this);
        this.handelSub = this.handelSub.bind(this);
    }

    private handelChange(value: any, key: string) {
        //console.log(value, key);
        switch (key) {
            case "func":
                this.setState({ func: value });
                break;
            case "price":
                this.setState({ price: value });
                break;
            case "classify":
                this.setState({ classify: value });
                break;
            case "name":
                this.setState({ name: value });
                break;
            default:
                break;
        }
    }

    private async handelSub() {
        let res = await api.postManageDish({
            id: this.state.id,
            classify: this.state.classify,
            func: this.state.func,
            name: this.state.name,
            price: this.state.price,
        });
        if (res.code === "success") {
            window.location.reload()
        } else {
            alert("失败");
        }
    }

    render() {

        return (
            <section className="modify-dish">

                <div className="dish-input">
                    <h3>操作：</h3>
                    <Select
                        style={{ width: 300 }}
                        placeholder="选择一种操作"
                        onChange={(value: string) => { this.handelChange(parseInt(value), "func") }}
                    >
                        <Option value="1">添加</Option>
                        <Option value="0">修改</Option>
                        <Option value="-1">删除</Option>
                    </Select>
                </div>


                <div className="dish-input">
                    <h3>菜名：</h3>
                    <Input
                        onChange={(e) => { this.handelChange(e.currentTarget.value, "name") }}
                        style={{ width: 300 }} placeholder="例如：皮蛋瘦肉粥" />
                </div>

                <div className="dish-input">
                    <h3>分类：</h3>
                    <Select
                        style={{ width: 300 }}
                        placeholder="菜品分类"
                        onChange={(value) => { this.handelChange(value, "classify") }}
                    >
                        <Option value="主食">主食</Option>
                        <Option value="凉菜">凉菜</Option>
                        <Option value="热菜">热菜</Option>
                        <Option value="汤类">汤类</Option>
                    </Select>
                </div>

                <div className="dish-input">
                    <h3>价格：</h3>
                    <InputNumber
                        data-flag="price"
                        style={{ width: 300 }}
                        min={0}
                        step={0.1}
                        defaultValue={0.0}
                        onChange={(value) => { this.handelChange(value, "price") }} />
                </div>

                <div className="dish-input dish-button">
                    <Button type="primary" icon="thunderbolt" onClick={this.handelSub}>
                        提交！
                    </Button>
                </div>


            </section>
        )
    }
}

export default ModifyMenu;