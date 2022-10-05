import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { baseurl } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthserviceService {
  apiurl = "https://api-demo-trainee-dev.cardinalityai.xyz/auth/login";
  constructor(private http: HttpClient) {}
  // submit(data): Observable<any> {
  // return this.http.post(`${baseurl}auth/login`,data);
    submit(data): Observable<any> {
    return this.http.post(this.apiurl, data);
  }
}
