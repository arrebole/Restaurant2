import { createStore, Store, Action } from "redux";

// state接口
export interface IState {
    userName: string,
    isAdmin:boolean,
}
// 初始化 state 具体对象
const DefaultState: IState = {
    userName: "custom",
    isAdmin: false,
}

// reducer 
function reducer(state: IState = DefaultState, action: Action): IState {
    return state
}

export const store: Store = createStore(reducer);

