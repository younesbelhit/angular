import { BrowserModule , Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { TodoComponent } from './components/todo/todo.component';
import { AuthGuard } from './guards/auth.guard';
import { TodoService } from './services/todo.service';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user.service';
import { ChartTwoComponent } from './components/chart-two/chart-two.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  {
    path: '', 
    component: TodoComponent 
  },
  {
    path: 'chart', 
    component: ChartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users', 
    component: UserComponent 
  },
  {
    path: 'product', 
    component: ProductComponent 
  },
  {
    path: 'upload', 
    component: UploadComponent 
  },
  {
    path: '**', 
    component: NotFoundComponent 
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    TodoComponent,
    UserComponent,
    ChartTwoComponent,
    NotFoundComponent,
    ProductComponent,
    ProductListComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    Title,
    AuthGuard, 
    TodoService, 
    UserService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
