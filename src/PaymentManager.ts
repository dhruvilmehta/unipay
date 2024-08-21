import Provider from './Provider'
import { PaymentOrder } from './types/PaymentOrder';

export class PaymentManager {
	private providers: Map<string, Provider>;
	private static instance: PaymentManager;

	private constructor() {
		this.providers = new Map<string, Provider>();
	}

	static getInstance(): PaymentManager {
		if (!this.instance) {
			this.instance = new PaymentManager();
		}
		return this.instance;
	}

	getProviders(): string[] {
		return Array.from(this.providers.values()).map(value => value.getName());
	}

	public registerProvider(provider: Provider): string {
		if (this.providers.get(provider.getName())) return "Already registeres";
		this.providers.set(provider.getName(), provider);
		return "Registered successfully"
	}

	public initializePayment(gateway: string, amount: number, currency: string, receiptId: string, notes?: string): Promise<PaymentOrder> {
		let provider: Provider | undefined = this.providers.get(gateway);
		if (!provider) throw new Error(`No registered Provider found`);
		return provider.initializePayment(amount, currency, receiptId, notes);
	}
}

export const unipay = PaymentManager.getInstance();
