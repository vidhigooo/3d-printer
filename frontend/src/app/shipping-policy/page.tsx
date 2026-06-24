import React from 'react';

export const metadata = {
  title: 'Shipping Policy | VEKTOR3D SYSTEMS',
  description: 'Shipping policies for Vektor3D Systems products and services.',
};

export default function ShippingPolicy() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-foreground mb-8 tracking-tight">
          Shipping <span className="text-blue-600 dark:text-blue-500">Policy</span>
        </h1>
        
        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed mt-12">
          
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-foreground mb-4">DOMESTIC SHIPPING POLICY</h2>
            <ul className="list-disc list-outside ml-6 mt-4 space-y-3">
              <li>All orders are processed within 2 – 3 business days. Orders are not shipped or delivered on weekends or holidays.</li>
              <li>If we are expecting a high volume of orders, shipments may be delayed by 7-10 business days. Please allow additional days for transit and delivery. If there is any significant delay in shipment of your order, we will contact you via email or telephone</li>
              <li>Generally, domestic shipments are in transit for 2 – 7 business days.</li>
            </ul>
            <p className="mt-6 font-medium">International Shipping Policy: Currently, we do not ship internationally.</p>
            <p className="mt-4 font-medium">Tracking: You will receive a notification on email and SMS when your order is Dispatched. The notification will have tracking link. You can get Live updates with the link.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-foreground mb-4">SHIPPING AND DELIVERY (RETURNS)</h2>
            <p>To return your product, you should file a return case with us first by sending us an email to infous@Vektor3D.com and include the following information in your email,</p>
            <ol className="list-decimal list-outside ml-6 mt-4 space-y-2">
              <li>Order/ Invoice No</li>
              <li>Item(s) you wish to return</li>
              <li>Reason for return</li>
              <li>Your name, email, address, and contact number</li>
            </ol>
            <p className="mt-4">You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
            <p className="mt-4">Depending on where you live, the time it may take for your exchanged product to reach you, may vary. You should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
