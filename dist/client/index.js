"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PaymentManager_1 = require("../PaymentManager");
const RazorpayProvider_1 = require("../RazorpayProvider");
const app = (0, express_1.default)();
PaymentManager_1.PaymentManager.getInstance().registerProvider(new RazorpayProvider_1.RazorpayProvider("rzp_test_VR2iva4ym2KHCY", "bZXFAk5DGaCiYinHBG1eGWEh"));
app.get("/providers", (req, res) => {
    const providers = PaymentManager_1.PaymentManager.getInstance().getProviders();
    return res.status(200).json(providers);
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
