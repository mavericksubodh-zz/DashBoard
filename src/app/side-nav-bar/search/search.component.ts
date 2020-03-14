import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchService } from './search.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm = new FormGroup({
    environment: new FormControl(''),
    instance: new FormControl(''),
    grepControl: new FormControl(''),
    grepString: new FormControl(''),
    credentials: new FormGroup({
      userId: new FormControl(''),
      password: new FormControl('')
    })
  });


  // credentials: FormGroup;
  grepControl = '-n';
  showGrepOptions = false;
  showInstanceOptions = false;
  showCustom = false;
  showStringTextArea = false;
  showUsrId = false;
  showPwd = false;
  showSearchButton = false;
  showSearchResults = false;


  searchResults;
  searchResultMap: any = [];
  httpClient: HttpClient;

  constructor(
    private searchService: SearchService) { }

  ngOnInit() {
    //   this.credentials = this.formBuilder.group({
    //     userid: ['', [Validators.required, Validators.minLength(7),
    //      Validators.maxLength(7)]],
    //     password: ['', Validators.required]
    // });
  }

  fnShowGrepOptions(type) {
    console.log('Reached fnShowGrepOptions ' + type);
    this.searchForm.patchValue({
      environment: type
    });
    this.showInstanceOptions = true;
    this.showGrepOptions = false;
    this.showStringTextArea = false;
    this.showSearchButton = false;
    this.showCustom = false;
    this.showUsrId = false;
    this.showPwd = false;
    this.showSearchButton = false;
    console.log('this.showInstanceOptions is ' + this.showInstanceOptions);
  }
  fnShowCustomSearch() {
    this.showCustom = true;
    this.showUsrId = false;
  }

  fnShowStringTextArea(type) {
    console.log('Reached fnShowStringTextArea : ' + type);
    this.searchForm.patchValue({
      instance: type
    });
    this.showStringTextArea = true;
    this.showUsrId = false;
    this.showPwd = false;
    this.showCustom = false;
    this.showSearchButton = false;
    console.log('this.showSearchButton is ' + this.showSearchButton);
  }
  fnShowUserId() {
    this.showUsrId = true;
    this.showPwd = true;
    this.showCustom = false;
    this.showSearchButton = false;
    console.log('this.showSearchButton is ' + this.showSearchButton);

  }
  fnShowPassword() {
    this.showPwd = true;
    this.showSearchButton = false;
  }

  fnShowSearchButton() {
    console.log('turning showSearchButton true');
    this.showSearchButton = true;
  }

// Using this function in html
  async fnCallSearchService(env, cluster, searchString) {
    console.warn(this.searchForm.value);
    console.warn(this.searchForm.get('environment').value + '-env ' + this.searchForm.get('credentials.userId').value);
    console.log('calling fnSendGetRequest.');
    env = this.searchForm.get('environment').value;
    searchString = this.searchForm.get('grepString').value;
    cluster = this.searchForm.get('instance').value;
    this.searchService.fnSendGetRequest(
      env, cluster, searchString).subscribe(
        data => {
          this.searchResults = data;
          console.log('from stringify ' + JSON.parse(JSON.stringify(data)));
          console.log(data + ' data returned by the service');
          console.log('Printing data from search.component in next line ');
          console.log(this.searchResultMap);
          this.searchResultMap = JSON.parse(JSON.stringify(data));
          console.log('Showing searchResultMap' + this.searchResultMap);
        }
    );
    console.log('Call to fnSendGetRequest done');
    this.showSearchResults = true;
  }

}
