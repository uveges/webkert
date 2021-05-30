import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { SalesLead } from 'src/app/shared/sales-lead.model';
import { SalesLeadService } from 'src/app/shared/sales-lead.service';

@Component({
  selector: 'app-sales-lead-list',
  templateUrl: './sales-lead-list.component.html',
  styleUrls: ['./sales-lead-list.component.css']
})
export class SalesLeadListComponent implements OnInit {

    list : SalesLead[];
    constructor(
        public service: SalesLeadService,
        private firestore: AngularFirestore,
        private toastr : ToastrService
        ) 
        {}

    ngOnInit(): void {

    this.service.getSalesLeads().subscribe(actionArray => {
        this.list = actionArray.map(item => {
            return {
                id: item.payload.doc.id,
                ...item.payload.doc.data() as SalesLead
            } 
        })
    });
  }
  onEdit(sales: SalesLead){
      this.service.formData = Object.assign({}, sales);
  }

  onDelete(id : string){
    if(confirm("Biztos benne, hogy törölni szeretné?")) {
        this.firestore.doc('salesLeads/' + id).delete();
        this.toastr.warning('Törlés sikeres!');
    }
  }

}
