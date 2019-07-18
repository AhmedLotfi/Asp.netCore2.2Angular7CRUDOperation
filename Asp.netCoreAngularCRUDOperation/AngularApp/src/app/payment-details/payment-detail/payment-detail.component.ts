import { Component, OnInit } from '@angular/core';
import { PaymentServiceService  } from '../../shared/payment-service.service';
import { NgForm } from '@angular/forms';
import { PaymentDetailModel } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(
    public service:PaymentServiceService,
    private toastr:ToastrService ) {
   }

  ngOnInit() {
    this.resetForm();
  }


  onSubmit(form:NgForm){
     if(!form.valid) return;

     if(this.service.formData.PMID === 0){
       this.insertRow(form);
     }else{
       this.updateRow(form);
     }
    
  }


  getData(){
    this.service.getPaymentDetail();
  }

  insertRow(form:NgForm){

    this.service.postPaymentDetail().subscribe(res=>{
      if(res !==null){
        this.toastr.success('Adding Payment Detail','Added Successfully');
        this.resetForm();
        this.getData();
      }
      console.log(res);
    },
    error=>{
     this.toastr.error('Adding Payment Detail',`Error : ${error}`);
      console.log(error);
    });
  }


  updateRow(form:NgForm){

    this.service.putPaymentDetail().subscribe(res=>{
      if(res.done){
        this.toastr.success('Update Payment Detail','Updated Successfully');
        this.resetForm();
        this.getData();
      }
      console.log(res);
    },
    error=>{
     this.toastr.error('Update Payment Detail',`Error : ${error}`);
      console.log(error);
    });
  }

  resetForm(form?:NgForm){

    if(form)
    {
      form.reset();
      this.service.formData = new PaymentDetailModel(0,'','','','');
    }

  }
}
