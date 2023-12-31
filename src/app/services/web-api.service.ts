import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompanyInfo } from '../models/CompanyInfo';
import { HttpMethod } from '../models/HttpMethod';
import { AuthorizationService } from './authorization.service';
import { User } from '../models/User';

const { GET, POST, PUT, DELETE, PATCH } = HttpMethod;

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  private apiUrl = `${environment.baseApiUrl}/api/v1`;

  constructor(
    private http: HttpClient,
    private authorizationService: AuthorizationService
  ) { }

  public getAllUsers(): Observable<User[]> {
    return this.perform(GET, `${this.apiUrl}/user`);
  }

  public updateUser(user: User): Observable<User> {
    return this.perform(PATCH, `${this.apiUrl}/user`, user);
  }

  public deleteUser(userId: number): Observable<any> {
    return this.perform(DELETE, `${this.apiUrl}/user/${userId}`);
  }

  public authenticate(username: string, password: string): Observable<User> {
    return this.perform(POST, `${this.apiUrl}/user/authenticate`, {username, password});
  }

  public register(user: User): Observable<User> {
    return this.perform(POST, `${this.apiUrl}/user/register`, user);
  }

  public getCompanyInfo(): Observable<CompanyInfo> {
    return this.perform(GET, `${this.apiUrl}/companyinfo`);
  }

  private perform(method: HttpMethod, url: string, data?: any): Observable<any> {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let response$: Observable<object>;

    if (this.authorizationService.getAccessToken() !== '') {
      headers = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.authorizationService.getAccessToken()}`,
          'Content-Type': 'application/json'
        })
      };
    }

    switch (method) {
      case GET:
      case DELETE:
        response$ = this.http[method](url, headers);
        break;
      case PUT:
      case POST:
      case PATCH:
        if (null === data) {
          throw new Error('Data parameter cannot be null on PUT or POST.');
        }
        response$ = this.http[method](url, data, headers);
        break;
      default:
        throw new Error(`HTTP method ${method} not implemented.`);
    }

    return response$;
  }
}