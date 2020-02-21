import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {
  isActive: boolean;
  collapsed: boolean;
  showMenu: string;

  @Output() collapsedEvent = new EventEmitter<boolean>();
  constructor(public router: Router) {

    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }



  ngOnInit() {
    this.isActive = false;
    this.collapsed = false;
    this.showMenu = '';
  }

  eventCalled() {
    this.isActive = !this.isActive;
}

addExpandClass(element: any) {
    if (element === this.showMenu) {
        this.showMenu = '0';
    } else {
        this.showMenu = element;
    }
}

toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
}

isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    // return dom.classList.contains(this.pushRightClass);
    return dom.classList.contains(this.showMenu);
}

toggleSidebar() {
    const dom: any = document.querySelector('body');
    // dom.classList.toggle(this.pushRightClass);
}
onLoggedout() {
  localStorage.removeItem('isLoggedin');
}

}
