import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private SEARCH_LOG_API = 'http://WHDQ9733:8080/util/logSearchMap/?environment=';
  constructor(private httpClient: HttpClient) { }

  // this function is used in component
  fnSendGetRequest(type, searchString): Observable<any> {
    console.log('Reached fnSendGetRequest to search ' + searchString + ' in ' + type );
    return this.httpClient.get(this.SEARCH_LOG_API + type + '&searchString=' + searchString );
  }

  // fnCallSearchService() {
  //   this.fnSendGetRequest().subscribe( (data: any[]) => {
  //     console.log(data);
  //     this.searchResult = data;
  //   });
  //   console.log('Calling fnCallSearchService');
  //   alert('interesting');
  //   return this.httpClient.get(this.SEARCH_LOG_API);
  // }

}
