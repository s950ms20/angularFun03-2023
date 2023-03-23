import { MenuService, MenuData } from './../../services/menu.service';
import { routes } from './../../app-routing.module';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(90deg)' })),
      transition('rotated => default', animate('500ms')),
      transition('default => rotated', animate('500ms')),
    ]),
  ],
})
export class NavComponent {
  constructor(private menu: MenuService) {}
  @ViewChild('menuBtn') menuBtn?: ElementRef;

  filteredRotes = routes
    .filter((r) => r.path !== '**')
    .filter((r) => r.path !== 'user');

  createMenu: number[] = new Array(1, 2, 4);

  menuData: MenuData = {
    showMenu: window.innerWidth <= 650 ? false : true,
    innerWidth: window.innerWidth,
  };

  state: string = 'default';

  rotate() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
    this.menuBtn?.nativeElement.classList.toggle('active');
  }

  hideMenu = () => (this.menuData.showMenu = !this.menuData.showMenu);

  ngOnInit() {
    onresize = (): void => {
      this.menuData = this.menu.onresize();
    };
  }
}
