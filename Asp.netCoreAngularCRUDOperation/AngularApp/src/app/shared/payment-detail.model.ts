export class PaymentDetail {

    constructor(
        private PMID :number,
        private CardOwnerName:string,
        private CardNumber:string,
        private ExpirationDate:string,
        private CVV:string,
        ){}
}
