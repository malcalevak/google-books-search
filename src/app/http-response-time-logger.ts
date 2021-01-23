import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { defer } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class HttpResponseTimeLogger implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return defer(() => {
      const key = req.urlWithParams;
      const startTime = new Date().getTime();
      return next.handle(req).pipe(finalize(() => {
        const endTime = new Date().getTime();
        const responseTime = endTime - startTime;
        console.log(responseTime);
      }));
    });
  }
}