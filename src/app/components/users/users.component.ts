import { User } from './../../types/user.type';
import { Component } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  usersArray: User[] = [];
  data: Subscription = new Subscription();

  constructor(private getDataService: GetDataService) {}

  ngOnInit() {
    this.data = this.getDataService
      .getData()
      .subscribe((data) => (this.usersArray = data));
  }

  ngOnDestroy() {
    this.data.unsubscribe();
  }
}
