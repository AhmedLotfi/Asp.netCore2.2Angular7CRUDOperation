export class PaymentDetailModel {
    constructor(
        public PMID :number,
    public CardOwnerName:string,
    public CardNumber:string,
    public ExpirationDate:string,
    public CVV:string,
    ){}
  
}
