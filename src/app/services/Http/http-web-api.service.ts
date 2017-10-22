import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable()
export class HttpWebApiService {
  environment: any = environment;
  results: string[]; 
  constructor(private http: HttpClient) {}

  Get(Url)
  { 
    this.http.get(environment.BaseUrl + Url).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
    });
  }

  Post(Url, Data)
  { 
    this.http.get(environment.BaseUrl + Url, Data).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
    });
  }

  Delete(Url, Data)
  { 
    this.http.delete(environment.BaseUrl + Url).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
    });
  }

}
