import express from 'express'
import Provider from '../Provider'
import { PaymentManager } from '../PaymentManager'
import { RazorpayProvider } from '../RazorpayProvider';
import { unipay } from '../PaymentManager';

const app = express();

unipay.registerProvider(new RazorpayProvider("rzp_test_VR2iva4ym2KHCY", "bZXFAk5DGaCiYinHBG1eGWEh"));

app.get("/providers", (req, res) => {
    const providers: string[] = unipay.getProviders();
    return res.status(200).json(providers);
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})