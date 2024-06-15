class PaymentProcessor {
  constructor(processor) {
    this.gateway = processor;
  }
  processPayment = (amount) => this.gateway.processPayment(amount);
}

class StripeProcessor {
  processPayment(amount) {
    console.log(`Payment Done By stripe of ${amount}`);
  }
}

class PayPalProcessor {
  processPayment(amount) {
    console.log(`Payment Done By paypal of ${amount}`);
  }
}

const pay = new PaymentProcessor(new StripeProcessor());
pay.processPayment(2000);

const pay2 = new PaymentProcessor(new PayPalProcessor());
pay2.processPayment(5000);
