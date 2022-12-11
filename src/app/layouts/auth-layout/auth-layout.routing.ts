import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { PrincipalComponent } from '../../pages/principal/principal.component';
import { OrganizacionesComponent } from '../../pages/organizaciones/organizaciones.component';


export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'principal',       component: PrincipalComponent },
    { path: 'organizaciones',       component: OrganizacionesComponent }
];
