import { PaymentManager } from "../PaymentManager";
import { RazorpayProvider } from "../RazorpayProvider";
import { PaymentOrder } from "../types/PaymentOrder";

async function main() {
    const manager: PaymentManager = PaymentManager.getInstance();

    manager.registerProvider(new RazorpayProvider("rzp_test_VR2iva4ym2KHCY", "bZXFAk5DGaCiYinHBG1eGWEh"))

    const order: PaymentOrder = await manager.initializePayment("razorpay", 1000, "inr", "testunipay", JSON.stringify({ test: "test1" }))
    console.log(order.getOrderId());
}

main()