import { Injectable } from '@angular/core';
import { PaymentDetailModel } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

 formData:PaymentDetailModel = new PaymentDetailModel(0,'','','','');
 listPaymentDetails:Array<PaymentDetailModel> = [];

 get _url(){
   return 'http://localhost:50699/api/PaymentDetail';
 }

  constructor(private http:HttpClient) { }

  postPaymentDetail():Observable<any>{
    return this.http.post<PaymentDetailModel>(this._url,this.formData).pipe();
  }

  putPaymentDetail():Observable<any>{
    return this.http.put<PaymentDetailModel>(`${this._url}/${this.formData.PMID}`,this.formData).pipe();
  }

  deletePaymentDetail(id):Observable<any>{
    return this.http.delete<PaymentDetailModel>(`${this._url}/${id}`).pipe();
  }

  getPaymentDetail(){
    return this.http.get<PaymentDetailModel[]>(`${this._url}`).pipe(tap()).subscribe(res=>{
      this.listPaymentDetails = res;
    },err=>{
      console.log(err);
    });
  }


}
