"use strict";
const dataObject = {
    width: 360,
    height: 300,
    locale: "en",
    toolbar_bg: "",
    interval: "3h",
    pair: "BTC_USD"
};
class GenerateUrl {
    constructor() {
        this.generateUrl = (url, query) => {
            return `${url}${this.getQueryParam(query)}`;
        };
        this.deleteKeysWithNoValue = (obj) => {
            let params = {};
            Object.assign(params, obj);
            for (let key in params) {
                if (params[key] === "") {
                    delete params[key];
                }
            }
            return params;
        };
        this.getQueryParam = (obj) => {
            const sanitizedObj = this.deleteKeysWithNoValue(obj);
            let routeParam = "?";
            for (let key in sanitizedObj) {
                routeParam += `${key}=${sanitizedObj[key]}&`;
            }
            return routeParam.slice(0, -1);
        };
    }
}
const generate = new GenerateUrl();
console.log(generate.generateUrl("http://www.google.com", dataObject));
