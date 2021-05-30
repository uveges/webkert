import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {FormsModule} from "@angular/forms"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { SalesLeadsComponent } from './sales-leads/sales-leads.component';
import { SalesLeadComponent } from './salesLeads/sales-lead/sales-lead.component';
import { SalesLeadListComponent } from './salesLeads/sales-lead-list/sales-lead-list.component';
import { SalesLeadService } from './shared/sales-lead.service';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    SalesLeadsComponent,
    SalesLeadComponent,
    SalesLeadListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, 
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    MatCardModule
  ],
  providers: [SalesLeadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
