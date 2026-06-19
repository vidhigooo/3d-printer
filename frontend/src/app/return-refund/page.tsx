import React from 'react';

export const metadata = {
  title: 'Return and Refund Policy | VEKTOR3D SYSTEMS',
  description: 'Return, refund, and cancellation policies for Vektor3D Systems.',
};

export default function ReturnRefund() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-8 tracking-tight">
          Return / <span className="text-blue-600 dark:text-blue-500">Refund</span>
        </h1>
        
        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed mt-12">
          
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">CANCEL AND RETURN POLICY</h2>
            <p>Our policy lasts 10 days. If 10 days have gone by since your purchase, unfortunately we can’t offer you a returns or exchange.</p>
            <p className="mt-4">In order to protect your rights, please check the item is correct and completed immediately after you receive it. If the product is defected or damaged during the delivery, please contact customer service immediately.</p>
            <p className="mt-4">To be eligible for a return, your item must be UNUSED and in the same condition that you received it, restocking fee may apply. It must also be in the original packaging, the end-user is responsible for any damage incurred during shipping.</p>
            <p className="mt-4">To complete your return, we require a receipt or proof of purchase.</p>
            
            <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mt-6 mb-2">Exchanges (if applicable)</h3>
            <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at info@Vektor3ds.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">SHIPPING AND DELIVERY POLICY</h2>
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

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">REFUND POLICY</h2>
            <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. A 15％ restocking fee will be applied to the item(s) you returned If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>
            
            <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mt-6 mb-2">Late or missing refunds (if applicable)</h3>
            <p>If you haven’t received a refund yet, first check your bank account again.Then contact your credit card company, it may take some time before your refund is officially posted.Next contact your bank. There is often some processing time before a refund is posted. If you’ve done all of this and you still have not received your refund yet, please contact us at info@vektor3ds.com</p>
          </section>

        </div>
      </div>
    </main>
  );
}
