interface HttpResponse<T = any>{
    statusCode : number, 
    body:T
}

interface HttpRequest<T = any>{
    statusConde : number, 
    body:T
}

const ok = (data:any): HttpResponse=> {
    return {
        statusCode:200, 
        body: data
    }
}

export {ok,HttpRequest, HttpResponse}
