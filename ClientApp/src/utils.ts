
export enum StorageType {
    seatId,
}

export class localStorage {
    static getlocalStorage(t: StorageType) {
        switch (t) {
            case StorageType.seatId:
                return window.localStorage.getItem("seatId");
        }
    }
    static setlocalStorage(t: StorageType, v: string) {
        switch (t) {
            case StorageType.seatId:
                return window.localStorage.setItem("seatId", v);
        }
    }
}

export function setCookie(name: string, value: string) {
    var h = 0.5;
    var exp = new Date();
    exp.setTime(exp.getTime() + h * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toUTCString() + ";path=/";
}

export function isAdmin(): boolean {
    let cookie = document.cookie;
    let reg = new RegExp("admin=ok");
    let key = cookie.match(reg);
    if (key == null) {
        return false
    }
    return true;
}

export function GetQueryString(name: string) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
    if (r != null) return unescape(r[2]); return null;
}
