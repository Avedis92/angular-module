import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { DetailsComponent } from './details/details.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserComponent,
    DetailsComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    UserComponent,
    DetailsComponent,
    PortfolioComponent,
    RouterModule
  ]
})
export class UserModule { }
