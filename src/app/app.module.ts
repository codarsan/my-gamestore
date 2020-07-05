import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ActualityComponent } from './components/actuality/actuality.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductByCatComponent } from './components/product-by-cat/product-by-cat.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { UserFormComponent } from './components/users/user-form.component';
import { LoginComponent } from './components/login/login.component';
import { FeedbackListComponent } from './components/feedback-list/feedback-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductListComponent,
    ActualityComponent,
    NotFoundComponent,
    ProductFormComponent,
    CategoryFormComponent,
    ProductByCatComponent,
    FeedbackComponent,
    UserFormComponent,
    LoginComponent,
    FeedbackListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
