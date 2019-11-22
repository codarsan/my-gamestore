import { ProductFormComponent } from './components/product-form/product-form.component';
import { ActualityComponent } from './components/actuality/actuality.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { ProductByCatComponent } from './components/product-by-cat/product-by-cat.component';
import { CategoryResolver } from './resolvers/category-resolver.service';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { UserFormComponent } from './components/users/user-form.component';
import { LoginComponent } from './components/login/login.component';
import { FeedbackListComponent } from './components/feedback-list/feedback-list.component';

const routes: Routes = [
  { path: 'products',     component: ProductListComponent },
  { path: '',             component: ActualityComponent },
  { path: 'contactus',    component: FeedbackComponent},
  { path: 'feedlist',    component: FeedbackListComponent},
  { path: 'signup',    component: UserFormComponent},
  { path: 'login',    component: LoginComponent},
  { path: 'products/add', component: ProductFormComponent, resolve: {categories: CategoryResolver} },
  { path: 'category/add', component: CategoryFormComponent},
  { path: 'category/productlist', component: ProductByCatComponent},
  { path: '**',           component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
