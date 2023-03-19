import { Injectable } from '@angular/core';
import { Observable, throwError, map } from 'rxjs';

export interface MenuData {
  showMenu: boolean;
  innerWidth: number;
}

export class MenuData {
  constructor(showMenu: boolean, innerWidth: number) {
    this.showMenu = showMenu;
    this.innerWidth = innerWidth;
  }
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  ngOnInit() {
    this.onresize();
  }
  onresize = (): MenuData => {
    let innerWidth = window.innerWidth;
    let showMenu = innerWidth <= 650 ? false : true;
    return new MenuData(showMenu, innerWidth);
  };
}
