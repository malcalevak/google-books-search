import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { defer } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpResponseTimeLogger implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return defer(() => {
      const startTime = new Date().getTime();
      return next.handle(req).pipe(
        tap(evt => {
          if (evt instanceof HttpResponse) {
            const endTime = new Date().getTime();
            const responseTime = endTime - startTime;
            //from here, it seems we'd need to alter the HttpResponse body to add the variable, however I can't seem to get it to work
            evt.body.responseTime = responseTime;
            console.log("Response time: " + responseTime + "ms");
          }
        })
      );
    });
  }
}