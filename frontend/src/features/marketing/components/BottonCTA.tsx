import React from "react";
import Button from "../../../shared/components/Button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTENAMES } from "../../../app/routes/routePaths";

const BottonCTA: React.FC = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 lg:p-16 text-center shadow-glow">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white, transparent 40%)",
            }}
            aria-hidden
          />
          <h2 className="relative text-3xl sm:text-4xl font-bold tracking-tight text-primary-foreground">
            Stop chasing friends for money.
          </h2>
          <p className="relative mt-4 text-primary-foreground/80 max-w-lg mx-auto">
            Join thousands using Settl to keep their groups balanced - and their
            friendships intact.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              className="rounded-full bg-background text-foreground hover:bg-background/90 h-12 px-7 text-base"
            >
              <Link to={ROUTENAMES.SIGNUP} className="flex items-center">
                Get Started Free <ArrowRight className="ml-1.5 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottonCTA;
