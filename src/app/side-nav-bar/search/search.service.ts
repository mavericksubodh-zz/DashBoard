import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private SEARCH_LOG_API = environment.baseUrl ;
  constructor(private httpClient: HttpClient) { }

  // this function is used in component
  fnSendGetRequest(env, cluster, searchString): Observable<any> {
    console.log('Reached fnSendGetRequest to search ' + searchString + ' in ' + cluster + ' cluster of ' + env );
    return this.httpClient.get(this.SEARCH_LOG_API + env + '&cluster=' + cluster + '&searchString=' + searchString );
  }

}
