import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable()
export class PoliClassHttp extends HttpClient {
    
    constructor(private authService: AuthService, private httpHandler: HttpHandler){
        super(httpHandler);
    }
  
    public patch<T>(url: string, body: any, options?: any): Observable<T> {
      return this.realizaRequisicao<T>(() => super.patch<T>(url, options));
    }
  
    public head<T>(url: string, options?: any): Observable<T> {
      return this.realizaRequisicao<T>(() => super.head<T>(url, options));
    }
  
    public options<T>(url: string, options?: any): Observable<T> {
      return this.realizaRequisicao<T>(() => super.options<T>(url, options));
    }
  
    public get<T>(url: string, options?: any): Observable<T> {
      return this.realizaRequisicao<T>(() => super.get<T>(url, options));
    }
  
    public post<T>(url: string, body: any, options?: any): Observable<T> {
      return this.realizaRequisicao<T>(() => super.post<T>(url, body, options));
    }
  
    public put<T>(url: string, body: any, options?: any): Observable<T> {
      return this.realizaRequisicao<T>(() => super.put<T>(url, body, options));
    }

    public delete<T>(url: string, options?: any): Observable<T>{
        return this.realizaRequisicao<T>(() => super.patch<T>(url, options));
    }

    private realizaRequisicao<T>(fn: Function): Observable<T> {
        if (this.authService.isTokenValid()) {
          console.log('Requisição HTTP com access token inválido. Obtendo novo token...');
          

          return fn();
        } else {
          return fn();
        }
      }
}