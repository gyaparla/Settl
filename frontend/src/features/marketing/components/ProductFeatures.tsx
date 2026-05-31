import {
  Bell,
  HandHeart,
  IndianRupee,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: IndianRupee,
    title: "Lightning-fast expenses",
    desc: "Add an expense in under 15 seconds with smart defaults and remembered splits.",
  },
  {
    icon: Users,
    title: "Groups for everything",
    desc: "Trips, flats, couples, teams — keep every shared wallet separate and tidy.",
  },
  {
    icon: Wallet,
    title: "Smart balance engine",
    desc: "Auto-simplifies who owes whom so you settle in the fewest payments possible.",
  },
  {
    icon: Bell,
    title: "Gentle reminders",
    desc: "Soft, non-awkward nudges so balances never pile up between friends.",
  },
  {
    icon: TrendingUp,
    title: "Insights you'll love",
    desc: "Understand where the group's money is going with beautiful breakdowns.",
  },
  {
    icon: HandHeart,
    title: "Made for India",
    desc: "UPI-ready settlements, ₹ formatting and currency precision built-in.",
  },
];

const ProductFeatures = () => {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-primary">Features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
            Everything you need. Nothing you don't.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Settl strips away the friction of group money - so you can focus on
            the trip, the dinner, the moment.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="group rounded-2xl border bg-gradient-card p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-glow group-hover:scale-105 transition-transform">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
