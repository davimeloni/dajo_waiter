import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { MdDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { OpenaccountsComponent } from './components/openaccounts/openaccounts.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { WaiterserviceService } from './services/waiterservice.service';
import { AuthService } from './services/auth.service';

import { RegisterComponent } from './components/register/register.component';
import { FilterPipe } from './pipe/filter.pipe';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  {
    path: 'main',
    component: OpenaccountsComponent,
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    OpenaccountsComponent,
    DialogComponent,
    RegisterComponent,
    FilterPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot()
  ],
  entryComponents: [ DialogComponent ],
  providers: [WaiterserviceService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
