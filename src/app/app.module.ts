import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

//import { library } from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { faStar } from '@fortawesome/free-solid-svg-icons';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpaces } from './convert-to-spaces.pipe';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';

import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

//library.add(faStar);

const routes : Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: ProductListComponent}
 // {path: "add-product", component: AddProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //FontAwesomeModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase,),
    AngularFirestoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
