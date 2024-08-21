"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const PaymentManager_1 = require("../PaymentManager");
const RazorpayProvider_1 = require("../RazorpayProvider");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const manager = PaymentManager_1.PaymentManager.getInstance();
        manager.registerProvider(new RazorpayProvider_1.RazorpayProvider("rzp_test_VR2iva4ym2KHCY", "bZXFAk5DGaCiYinHBG1eGWEh"));
        const order = yield manager.initializePayment("razorpay", 1000, "inr", "testunipay", JSON.stringify({ test: "test1" }));
        console.log(order.getOrderId());
    });
}
main();
