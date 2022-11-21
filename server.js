const data = {
    width: 360,
    height: 300,
    locale: "en",
    toolbar_bg:"",
    interval: "3h",
    pair: "BTC_USD"
}

function generateUrl(url, query){
    return `${url}+${getQueryParam(query)}` 
}

function deleteKeysWithNoValue(obj){
    let params ={} 
    Object.assign(params,obj)
    for(let key in params ){
        if(params[key] === ""){
            delete params[key]
        }
    }
    return params
}
function getQueryParam(obj){
    const sanitizedObj = deleteKeysWithNoValue(obj)
    let routeParam = "?"
    for(let key in sanitizedObj ){
       routeParam += `${key}=${sanitizedObj[key]}&`
    }
    return routeParam.slice(0,-1)
}
console.log(makeUrl("http://www.google.com",data))
