import React from "react";
import Button from "../../../shared/components/Button";
import { Link } from "react-router-dom";
import { ROUTENAMES } from "../../../app/routes/routePaths";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "../../../shared/lib/utils";
import ProductPreview from "./ProductPreview";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Split expenses <br className="hidden sm:block" />
            <span className="text-gradient-primary">
              without the awkwardness
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Track, split and settle shared expenses with friends, roommates and
            travel groups - in seconds
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              className="rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow px-7 text-base"
            >
              <Link to={ROUTENAMES.SIGNUP} className="flex items-center">
                Get Started <ArrowRight className="ml-1.5 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-6 flex justify-center gap-5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              Free forever <Check className="w-3.5 h-3.5 text-primary" />
            </span>
            <span className="flex items-center gap-1.5">
              No card required <Check className="w-3.5 h-3.5 text-primary" />
            </span>
            <span className="flex items-center gap-1.5">
              Works offline <Check className="w-3.5 h-3.5 text-primary" />
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="mt-16 mx-auto max-w-5xl"
        >
          <ProductPreview />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
