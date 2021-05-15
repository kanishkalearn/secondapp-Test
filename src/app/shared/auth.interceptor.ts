import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


export class AuthInterceptor{
    intercept(req:HttpRequest<any>,next :HttpHandler):Observable<HttpEvent<any>>{
        console.log('Intercepted', req);
        // const copiedReq = req.clone({params:req.params.set('','')});
        return next .handle(req);
    }
}