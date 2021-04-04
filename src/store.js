import {atom, selector} from "recoil";
import {setCookie} from "nookies";

export const auth = atom({
    key: "auth",
    default: null
});


