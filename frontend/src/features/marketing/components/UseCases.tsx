import { Briefcase, Heart, Home, Plane } from "lucide-react";
import React from "react";

const useCaseScenarios = [
  {
    icon: Plane,
    title: "Trips & travel",
    desc: "Goa weekend, Europe backpack, ski trip — keep the vibe, not the spreadsheet.",
  },
  {
    icon: Home,
    title: "Roommates",
    desc: "Rent, bills, groceries, that one Swiggy order at 2am. Sorted automatically.",
  },
  {
    icon: Heart,
    title: "Couples",
    desc: "Shared subscriptions, date nights, EMIs. Stay aligned without keeping score.",
  },
  {
    icon: Briefcase,
    title: "Small teams",
    desc: "Offsites, founder dinners, client reimbursements. Clean and auditable.",
  },
];
const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-primary">Use cases</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Made for every shared wallet.
          </h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {useCaseScenarios.map((useCase) => {
            return (
              <div
                key={useCase.title}
                className="rounded-2xl border bg-gradient-card p-4"
              >
                <useCase.icon className="w-6 h-6 text-primary" />
                <h3 className="mt-4 font-semibold">{useCase.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {useCase.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
