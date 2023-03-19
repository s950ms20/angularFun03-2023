import { MenuService, MenuData } from './../../services/menu.service';
import { routes } from './../../app-routing.module';
import { Component } from '@angular/core';
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
      state('rotated', style({ transform: 'rotate(180deg)' })),
      transition('rotated => default', animate('500ms ease-out')),
      transition('default => rotated', animate('500ms ease-in')),
    ]),
  ],
})
export class NavComponent {
  constructor(private menu: MenuService) {}

  filteredRotes = routes
    .filter((r) => r.path !== '**')
    .filter((r) => r.path !== 'user');

  createMenu: number[] = new Array(1, 2, 4);

  menuData: MenuData = {
    showMenu: true,
    innerWidth: window.innerWidth,
  };

  state: string = 'default';

  rotate() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }

  hideMenu = () => (this.menuData.showMenu = !this.menuData.showMenu);

  ngOnInit() {
    onresize = (): void => {
      this.menuData = this.menu.onresize();
    };
  }
}
