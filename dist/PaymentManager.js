"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentManager = void 0;
class PaymentManager {
    constructor() {
        this.providers = new Map();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new PaymentManager();
        }
        return this.instance;
    }
    getProviders() {
        return Array.from(this.providers.values()).map(value => value.getName());
    }
    registerProvider(provider) {
        if (this.providers.get(provider.getName()))
            return "Already registeres";
        this.providers.set(provider.getName(), provider);
        return "Registered successfully";
    }
    initializePayment(gateway, amount, currency, receiptId, notes) {
        let provider = this.providers.get(gateway);
        if (!provider)
            throw new Error(`No registered Provider found`);
        return provider.initializePayment(amount, currency, receiptId, notes);
    }
}
exports.PaymentManager = PaymentManager;
