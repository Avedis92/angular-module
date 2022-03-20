import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DetailsComponent } from './details/details.component';
import { UserComponent } from './user/user.component';

export const routes:Routes=[
    {path:'',component:UserComponent},
    {path:'details',component:DetailsComponent},
    {path:'portfolio',component:PortfolioComponent}
]