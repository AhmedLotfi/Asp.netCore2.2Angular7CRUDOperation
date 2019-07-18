import { Component, OnInit } from '@angular/core';
import { PaymentDetailModel } from '../../shared/payment-detail.model';
import { PaymentServiceService } from 'src/app/shared/payment-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})
export class PaymentDetailListComponent implements OnInit {


  constructor(public payDetailService:PaymentServiceService,private toastService:ToastrService) { }

  ngOnInit() {
    this.payDetailService.getPaymentDetail();
  }


  onRowClicked(pay:PaymentDetailModel){
   this.payDetailService.formData = Object.assign({},pay);
  }

  deleteRow(id){
    if(confirm('Are sure for deleting this row ? ')){
      this.payDetailService.deletePaymentDetail(id).subscribe(res=>{
        this.payDetailService.getPaymentDetail();
        this.toastService.success('Delete Payment Detail','deleted successfully');
      },error=>{
        this.toastService.error('Delete Payment Detail',`Error : ${error.message}`);
      });
    }
  }

}
