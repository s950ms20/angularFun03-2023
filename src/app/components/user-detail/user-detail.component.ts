import { Subscription } from 'rxjs/internal/Subscription';
import { Component } from '@angular/core';
import { User } from 'src/app/types/user.type';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';
import { NavigationServiceService } from 'src/app/services/navigation-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  sub: Subscription = new Subscription();
  id: number = 0;
  usersArray: User[] = [];
  userData: User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  };

  constructor(
    private route: ActivatedRoute,
    private getDataService: GetDataService,
    private navigation: NavigationServiceService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.sub = this.getDataService
        .getData()
        .subscribe(
          (data) => (this.userData = data.filter((d) => d.id == this.id)[0])
        );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack = (): void => this.navigation.back();
}
