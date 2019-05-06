import { RouteComponentProps } from "react-router-dom";

export interface IProps extends RouteComponentProps { }

export interface ISeat {
    id: number,
    isCanUse: boolean,
}

export interface ILoginForm {
    userName: string,
    passWord: string,
}

export interface IDish {
    id: number,
    name: string,
    price: number,
    classify: string,
    salesVoluma: number,
    count: number,
}

export interface IManageDish {
    id: number,
    name: string,
    func: number,
    price: number,
    classify: string
}


export interface ISiga {
    code: string
}

export interface I0rder {
    seatId: number,
    time: string
    total: number,
    list: string,
}

export interface IStatus {
    totalRevenue: number,
    subscription: number,
    refund: number
}