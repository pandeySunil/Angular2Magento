import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }
  from '@angular/common/http';

import { Observable } from 'rxjs';
//import 'rxjs/add/operator/do';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        
        const duplicate = req.clone({ params: req.params.set('filter', 'completed') });
    
        return next.handle(duplicate);
      }
}