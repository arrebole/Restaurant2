import React from 'react';
//import { store } from "../../redux/store";
import { Link } from "react-router-dom";
import "../../styles/home.css";

class Home extends React.Component {
    constructor(props: any) {
        super(props);
        //this.state = store.getState();
    }
    render() {
        return (
            <div className="home">
                <header className="home-header">
                    <h3>yanglisha</h3>
                </header>
                <article className="home-article home-wrapper">

                    <section className="select-service">
                        <h3><Link to="/order/choose-seat">用户下单</Link></h3>
                    </section>

                    <section className="select-service">
                        <h3><Link to="/admin/dish-manage">后台管理</Link></h3>
                    </section>

                </article>

            </div>
        )
    }
}

export default Home;