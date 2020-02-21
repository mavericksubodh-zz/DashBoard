import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // credentials: FormGroup;
  showSearchOptions = false;
  showCustom = false;
  showUsrId = false;
  showPwd = false;
  showSearchButton = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    //   this.credentials = this.formBuilder.group({
    //     userid: ['', [Validators.required, Validators.minLength(7),
    //      Validators.maxLength(7)]],
    //     password: ['', Validators.required]
    // });
  }

  showGrepOptions() {
    this.showSearchOptions = true;
    this.showSearchButton = false;
    this.showCustom = false;
    this.showUsrId = false;
    this.showPwd = false;
    this.showSearchButton = false;
  }

  showCustomSearch() {
    this.showCustom = true;
    this.showUsrId = false;
  }
  showUserId() {
    this.showUsrId = true;
    this.showPwd = true;
    this.showCustom = false;
  }
  showPassword() {
    this.showPwd = true;
  }

  showSearchButtonFn() {
    this.showSearchButton = true;
  }

}
