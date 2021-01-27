import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { MedformComponent } from './Medform/Medform.component';

import { MedformService } from './Medform/Medform.service';

@NgModule({
  declarations: [	
    AppComponent,
    NavMenuComponent,
    HomeComponent,
      MedformComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'Medform', component: MedformComponent },
    ])
  ],
  providers: [
     MedformService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
