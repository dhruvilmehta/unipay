"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeOrder = void 0;
class StripeOrder {
    constructor(sessionId) {
        this.sessionId = sessionId;
    }
    getOrderId() {
        return this.sessionId;
    }
}
exports.StripeOrder = StripeOrder;
