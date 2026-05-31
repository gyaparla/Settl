const steps = [
  {
    step: "01",
    title: "Create a group",
    desc: "Spin up a group for your trip, flat or team — and invite friends in one tap.",
  },
  {
    step: "02",
    title: "Add an expense",
    desc: "Type the amount, pick who paid and how to split. Settl handles the math.",
  },
  {
    step: "03",
    title: "Settle up",
    desc: "We simplify the chain of IOUs into the fewest payments. Pay and you're done.",
  },
];

const HowitWorks = () => {
  return (
    <section id="how" className="py-24 lg:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-primary">How it works</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
            Simple. Fast. Effective
          </h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {steps.map((step) => {
            return (
              <div key={step.step} className="rounded-2xl border bg-card p-4">
                <div className="text-sm font-mono text-primary">
                  {step.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowitWorks;
