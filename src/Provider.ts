import { PaymentOrder } from "./types/PaymentOrder";

export default interface Provider {
    getName(): string;
    initializePayment(amount: number, currency: string, receiptId: string, notes?: string): Promise<PaymentOrder>
    capturePayment(): string
}