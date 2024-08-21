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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RazorpayProvider = void 0;
const razorpay_1 = __importDefault(require("razorpay"));
const RazorpayOrder_1 = __importDefault(require("./types/RazorpayOrder"));
class RazorpayProvider {
    constructor(publicKey, privateKey) {
        this.name = "razorpay";
        this.razorpay = new razorpay_1.default({
            key_id: publicKey,
            key_secret: privateKey
        });
    }
    initializePayment(amount, currency, receiptId, notes) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                amount,
                currency: currency.toUpperCase(),
                receipt: receiptId,
                notes: notes ? { notes } : undefined
            };
            try {
                const order = yield this.razorpay.orders.create(options);
                return new RazorpayOrder_1.default(order.id);
            }
            catch (error) {
                console.log(error);
                throw new Error(`Razorpay order creation failed: ${error.message}`);
            }
        });
    }
    capturePayment() {
        throw new Error("Method not implemented.");
    }
    getName() {
        return this.name;
    }
}
exports.RazorpayProvider = RazorpayProvider;
