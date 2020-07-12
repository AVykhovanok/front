import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { GuaranteeComponent } from './components/guarantee/guarantee.component';
import { CooperationComponent } from './components/cooperation/cooperation.component';
import { HomeComponent } from './components/home/home.component';
import { ElementComponent } from './components/element/element.component';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { ErrorComponent } from './components/errors/error/error.component';
import { AccountComponent } from './components/authentication/account/account.component';
import { AuthGuard } from './components/authentication/guards/auth.guard';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
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
import { AuthAdminGuard } from './components/authentication/guards/auth.admin.guard';
import { AddProductComponent } from './components/authentication/add-product/add-product.component';
import { EditProductComponent } from './components/authentication/edit-product/edit-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'quarantee', component: GuaranteeComponent },
  { path: 'cooperation', component: CooperationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'admin-page', component: AdminPageComponent, canActivate: [AuthAdminGuard] },
  { path: 'add-product/:category', component: AddProductComponent, canActivate: [AuthAdminGuard] },
  { path: 'edit-product/:category/:id', component: EditProductComponent, canActivate: [AuthAdminGuard] },
  { path: 'category-view/:category', component: CategoryViewComponent },
  { path: 'element/:category/:id', component: ElementComponent },
  { path: 'accessories/:id', component: AccessoriesComponent },
  { path: 'battery/:id', component: BatteryComponent },
  { path: 'boxmod/:id', component: BoxmodComponent },
  { path: 'charger/:id', component: ChargerComponent },
  { path: 'complects/:id', component: ComplectsComponent },
  { path: 'components/:id', component: ComponentsComponent },
  { path: 'consumables/:id', component: ConsumablesComponent },
  { path: 'liquid/:id', component: LiquidComponent },
  { path: 'mechmod/:id', component: MechmodComponent },
  { path: 'rda/:id', component: RdaComponent },
  { path: 'rdta/:id', component: RdtaComponent },
  { path: 'rta/:id', component: RtaComponent },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
