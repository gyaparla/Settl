import React from "react";

// const faqs = [
//   {
//     q: "Is Settl free?",
//     a: "Yes - core features are free forever. Premium add-ons (OCR scanning, AI insights) will come later.",
//   },
//   {
//     q: "Does it work for international currencies?",
//     a: "Yes. You'll pick a preferred currency at onboarding. Multi-currency groups are on the roadmap.",
//   },
//   {
//     q: "How do settlements work?",
//     a: "Settl simplifies the chain of IOUs into the fewest possible payments. You can mark settlements as cash, UPI or bank transfer.",
//   },
//   {
//     q: "Is my data safe?",
//     a: "Absolutely. Everything is encrypted in transit and at rest. We never share data with third parties.",
//   },
// ];

const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-medium text-primary">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Questions, answered.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Faq;
