import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { GuaranteeComponent } from './components/guarantee/guarantee.component';
import { CooperationComponent } from './components/cooperation/cooperation.component';
import { ElementComponent } from './components/element/element.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { AccountComponent } from './components/authentication/account/account.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { httpInterceptorProviders } from './components/authentication/auth-interceptor';
import { HttpErrorInterceptor } from './components/errors/http-error.interceptor';
import { ErrorComponent } from './components/errors/error/error.component';
import { MustMatchDirective } from './components/authentication/must-match.directive';
import { AccessoriesComponent } from './components/products/accessories/accessories.component';
import { BatteryComponent } from './components/products/battery/battery.component';
import { BoxmodComponent } from './components/products/boxmod/boxmod.component';
import { ChargerComponent } from './components/products/charger/charger.component';
import { ComplectsComponent } from './components/products/complects/complects.component';
import { ComponentsComponent } from './components/products/components/components.component';
import { ConsumablesComponent } from './components/products/consumables/consumables.component';
import { LiquidComponent } from './components/products/liquid/liquid.component';
import { MechmodComponent } from './components/products/mechmod/mechmod.component';
import { RdaComponent } from './components/products/rda/rda.component';
import { RdtaComponent } from './components/products/rdta/rdta.component';
import { RtaComponent } from './components/products/rta/rta.component';
import { AdminPageComponent } from './components/authentication/admin-page/admin-page.component';
import { AddProductComponent } from './components/authentication/add-product/add-product.component';
import { EditProductComponent } from './components/authentication/edit-product/edit-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    ContactsComponent,
    GuaranteeComponent,
    CooperationComponent,
    ElementComponent,
    CategoryViewComponent,
    AccountComponent,
    SignupComponent,
    SigninComponent,
    ErrorComponent,
    MustMatchDirective,
    AccessoriesComponent,
    BatteryComponent,
    BoxmodComponent,
    ChargerComponent,
    ComplectsComponent,
    ComponentsComponent,
    ConsumablesComponent,
    LiquidComponent,
    MechmodComponent,
    RdaComponent,
    RdtaComponent,
    RtaComponent,
    AdminPageComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [httpInterceptorProviders,
  {provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
