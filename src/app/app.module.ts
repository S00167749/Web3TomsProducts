import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpaces } from './convert-to-spaces.pipe';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';

import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { NavigationComponent } from './navigation/navigation.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
   MatMenuModule, MatIconModule , MatListModule, MatProgressSpinnerModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotificationsComponent } from './notifications/notifications.component';

import { AuthGuard } from './service/auth.guard';
import { AuthService } from './service/auth.service';
import { NotificationService } from './service/notification.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

library.add(faStar);

const routes : Routes = [
  {path: '', redirectTo: "login", pathMatch: 'full',canActivate: [AuthGuard]},
  {path: 'product-list', component: ProductListComponent, canActivate: [AuthGuard]},
  {path: 'home', component: ProductListComponent, canActivate: [AuthGuard]},
  {path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '**', redirectTo: 'login',  canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarRatingComponent,
    NavigationComponent,
    AddProductComponent,
    LoginComponent,
    SignupComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase,),
    AngularFirestoreModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
    MatInputModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},AuthService, AuthGuard, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
