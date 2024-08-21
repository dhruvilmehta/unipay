import { PaymentOrder } from "./PaymentOrder";

class RazorpayOrder implements PaymentOrder {
    private orderId: string;

    constructor(orderId: string) {
        this.orderId = orderId;
    }

    getOrderId(): string {
        return this.orderId;
    }
}
export default RazorpayOrder