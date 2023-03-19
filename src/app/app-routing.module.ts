import { FifthComponent } from './components/fifth/fifth.component';
import { FourthComponent } from './components/fourth/fourth.component';
import { ThirdComponent } from './components/third/third.component';
import { SecondComponent } from './components/second/second.component';
import { FirstComponent } from './components/first/first.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'user',
    component: UserDetailComponent,
  },

  {
    path: 'first',
    component: FirstComponent,
  },
  {
    path: 'second',
    component: SecondComponent,
  },
  {
    path: 'third',
    component: ThirdComponent,
  },
  {
    path: 'fourth',
    component: FourthComponent,
  },
  {
    path: 'fifth',
    component: FifthComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
