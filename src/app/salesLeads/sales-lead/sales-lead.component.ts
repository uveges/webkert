import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SalesLeadService } from 'src/app/shared/sales-lead.service';


@Component({
  selector: 'app-sales-lead',
  templateUrl: './sales-lead.component.html',
  styleUrls: ['./sales-lead.component.css']
})
export class SalesLeadComponent implements OnInit {

  constructor( //properties
        public service : SalesLeadService,
        public firestore: AngularFirestore,
        public toastr : ToastrService
      ) { }

  ngOnInit(): void {
      this.resetForm();
  }
            //? nullable


  resetForm (form?: NgForm){

    if(form != null) {
        form.resetForm();
    }
                            //Object with reset values!
    this.service.formData = {
        idStr : "0",
        hrefStr : '',				
        descriptionStr:	'',
        nameStr: '',
        ratingStr: '',
        referredDateStr: '',
        typeStr: '',
        estimatedRevenue: ''
    }
  }

    onSubmit(form : NgForm) {

    let data = Object.assign({}, form.value);                                      //form data
    
    //delete data.idStr;
    if(form.value.idStr === "0") {
        data.idStr = Math.floor(Math.random() * 1000000);
        console.log(data.idStr);
        this.firestore.collection('salesLeads').doc(data.idStr.toString()).set(data);

    } else {
        this.firestore.doc('salesLeads/' + form.value.idStr).update(data);
    }
    
    this.resetForm(form);
    this.toastr.success("Sikeres mentés!");
  }

}
