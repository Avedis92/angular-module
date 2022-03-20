import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { app_route } from './app-routes';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app_route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
