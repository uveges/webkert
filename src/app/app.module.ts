import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import { AngularFireAuthModule } from '@angular/fire/auth';
import {FormsModule} from "@angular/forms"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { SalesLeadsComponent } from './sales-leads/sales-leads.component';
import { SalesLeadComponent } from './salesLeads/sales-lead/sales-lead.component';
import { SalesLeadListComponent } from './salesLeads/sales-lead-list/sales-lead-list.component';
import { SalesLeadService } from './shared/sales-lead.service';

import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    SalesLeadsComponent,
    SalesLeadComponent,
    SalesLeadListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, 
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    MatCardModule, 
    MatToolbarModule,
    AppRoutingModule, 
    FlexLayoutModule, 
    MatFormFieldModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'application')
  ],
  providers: [SalesLeadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
