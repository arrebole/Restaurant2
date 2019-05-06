import { ISeat, ILoginForm, ISiga, IManageDish, IDish, I0rder, IStatus } from "../types/interface";

interface IApi {
    getOrderSeats(): Promise<Array<ISeat>>,
    postTryLogin(data: ILoginForm): Promise<ISiga>,
    postManageDish(data: IManageDish): Promise<ISiga>,
    getAllDish(): Promise<Array<IDish>>,
    getPlaceholder(seatId: number | string): Promise<ISiga>,
    postOrder(data: I0rder): Promise<ISiga>,
    getOrderForm(seatId: string): Promise<Array<IDish>>;
    getSeatClose(seatId: string): Promise<ISiga>,
    getRefund(seatId: string): Promise<ISiga>,
    getStatus(): Promise<IStatus>,
}

// 单例模式
class SingletonApi implements IApi {
    private constructor() {
        this._domain = "127.0.0.1:8080";
    };
    private _domain: string;
    private static _instance: IApi;

    private commfetchGetFunc(url: string): Promise<any> {
        return fetch(url, {
            mode: "cors",
            method: "GET",
        }).then(response => {
            return response.json()
        })
    }

    private commfetchPostFunc(url: string, data: string): Promise<any> {
        return fetch(url, {
            mode: "cors",
            method: "POST",
            body: data,
            headers: {
                'content-type': 'application/json'
            },
        }).then(response => {
            return response.json()
        })
    }

    public getOrderSeats(): Promise<Array<ISeat>> {
        return this.commfetchGetFunc(`http://${this._domain}/api/Order/ChooseSeat`);
    }

    public postTryLogin(data: ILoginForm): Promise<ISiga> {
        return this.commfetchPostFunc(`http://${this._domain}/api/admin/login`, JSON.stringify(data));
    }

    public postManageDish(data: IManageDish): Promise<ISiga> {
        return this.commfetchPostFunc(`http://${this._domain}/api/admin/dish`, JSON.stringify(data));
    }

    public getAllDish(): Promise<Array<IDish>> {
        return this.commfetchGetFunc(`http://${this._domain}/api/order/getdish`);
    }

    public postOrder(data: I0rder): Promise<ISiga> {
        console.log(JSON.stringify(data));
        return this.commfetchPostFunc(`http://${this._domain}/api/order/updateorderform`, JSON.stringify(data));
    }

    public getPlaceholder(seatId: number | string): Promise<ISiga> {
        return this.commfetchGetFunc(`http://${this._domain}/api/order/placeholder?seatId=${seatId}`);
    }

    public getOrderForm(seatId: string): Promise<Array<IDish>> {
        return this.commfetchGetFunc(`http://${this._domain}/api/order/orderForm?seatId=${seatId}`);
    }

    public getSeatClose(seatId: string): Promise<ISiga> {
        return this.commfetchGetFunc(`http://${this._domain}/api/order/PlaceClose?seatId=${seatId}`);
    }

    public getRefund(seatId: string): Promise<ISiga> {
        return this.commfetchGetFunc(`http://${this._domain}/api/order/Refund?seatId=${seatId}`);
    }

    public getStatus(): Promise<IStatus> {
        return this.commfetchGetFunc(`http://${this._domain}/api/admin/Statistics`);
    }
    public static Instance(): IApi {
        if (!this._instance) {
            this._instance = new SingletonApi();
        }
        return this._instance;
    }
}

export default SingletonApi.Instance();