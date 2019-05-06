import React from "react";
import api from "../../api";
import { setCookie } from "../../utils"
import "../../styles/login.css";

interface IState {
    userName: string,
    passWord: string,
}


class Login extends React.Component<any, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            userName: "",
            passWord: ""
        }
        this.handelUserChange = this.handelUserChange.bind(this);
        this.handelPasswdChange = this.handelPasswdChange.bind(this);
        this.bindLoginClick = this.bindLoginClick.bind(this);
    }
    private async bindLoginClick() {
        let res = await api.postTryLogin({
            userName: this.state.userName,
            passWord: this.state.passWord,
        });
        if (res.code === "success") {
            setCookie("admin", "ok");
            window.location.href = "/admin/dish-manage";
            return;
        }
        alert("错误");

    }
    private handelUserChange(e: any) {
        this.setState({
            userName: e.currentTarget.value
        })
    }

    private handelPasswdChange(e: any) {
        this.setState({
            passWord: e.currentTarget.value
        })
    }

    render() {
        return (
            <div className="login">
                <h1 className="login-title">管理员登陆页面</h1>
                <section className="login-main">
                    <form>
                        <div>
                            <strong>用户</strong>
                            <input className="login-input" autoComplete="on" onChange={this.handelUserChange} placeholder="UserName" />
                        </div>
                        <div>
                            <strong>密码</strong>
                            <input className="login-input" autoComplete="on" onChange={this.handelPasswdChange} type="password" placeholder="PassWorld" />
                        </div>
                        <div>
                            <button className="login-btn" type="button" onClick={this.bindLoginClick} >登陆</button>
                        </div>

                    </form>
                </section>
            </div>
        )
    }
}

export default Login;