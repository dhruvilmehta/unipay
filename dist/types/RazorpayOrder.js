"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RazorpayOrder {
    constructor(orderId) {
        this.orderId = orderId;
    }
    getOrderId() {
        return this.orderId;
    }
}
exports.default = RazorpayOrder;
