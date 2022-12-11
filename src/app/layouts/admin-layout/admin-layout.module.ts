import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { InicioComponent } from '../../pages/inicio/inicio.component';
import { MiOrganizacionSocialComponent } from '../../pages/mi-organizacion-social/mi-organizacion-social.component';
import { GenerarSolicitudComponent } from '../../pages/generar-solicitud/generar-solicitud.component';
import { MiPerfilComponent } from '../../pages/mi-perfil/mi-perfil.component';
import { FormPerfilComponent } from '../../pages/mi-perfil/form-perfil/form-perfil.component';
import { SolicitudesRechazadasComponent } from '../../pages/solicitudes-rechazadas/solicitudes-rechazadas.component';
import { RequisitosComponent } from '../../pages/requisitos/requisitos.component';
import { OrganizacionesSocialesComponent } from '../../pages/organizaciones-sociales/organizaciones-sociales.component';
import { DatosdemiJuntaDirectivaComponent} from '../../pages/generar-solicitud/datos-jd/datos-jd.component';
import { DatosdeMiembrosComponent } from 'src/app/pages/generar-solicitud/datos-miembros/datos-miembros.component';
import { RDocumentosComponent } from 'src/app/pages/generar-solicitud/r-documentos/r-documentos.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    InicioComponent,
    SolicitudesRechazadasComponent,
    MiOrganizacionSocialComponent,
    GenerarSolicitudComponent,
    RequisitosComponent,
    OrganizacionesSocialesComponent,
    MiPerfilComponent,
    FormPerfilComponent,
    DatosdemiJuntaDirectivaComponent,
    DatosdeMiembrosComponent,
    RDocumentosComponent
  ]
})

export class AdminLayoutModule { }
