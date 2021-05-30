import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SalesLead } from './sales-lead.model';

@Injectable({
  providedIn: 'root'
})
export class SalesLeadService {
    formData : SalesLead;

  constructor(private firestore: AngularFirestore) { }

    getSalesLeads(){
        return this.firestore.collection("salesLeads").snapshotChanges();       //Observable -t ad vissza
    }

}
