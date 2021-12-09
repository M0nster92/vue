const data = {
    message: 'hello',
}

const handler = {
    set(target, key, value){
        target.message =  value;
    }
}

const proxy = new Proxy(data, handler)

proxy.message = "New value";

console.log(proxy.message)