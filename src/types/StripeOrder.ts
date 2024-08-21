import { PaymentOrder } from "./PaymentOrder";

export class StripeOrder implements PaymentOrder {
    sessionId: string;

    constructor(sessionId: string) {
        this.sessionId = sessionId;
    }

    getOrderId(): string {
        return this.sessionId;
    }
}
