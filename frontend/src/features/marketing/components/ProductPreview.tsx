import React from "react";

const PreviewStat = ({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "positive" | "negative";
}) => {
  return (
    <div className="rounded-2xl border bg-gradient-card p-5">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div
        className={`mt-2 text-2xl font-semibold ${tone === "positive" ? "text-primary" : "text-destructive"}`}
      >
        {value}
      </div>
    </div>
  );
};

function PreviewActivity({
  emoji,
  title,
  who,
  amount,
  positive,
  last,
}: {
  emoji: string;
  title: string;
  who: string;
  amount: string;
  positive?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between py-3 ${last ? "" : "border-b border-border/60"}`}
    >
      <div className="flex items-center gap-3">
        <span className="grid place-items-center w-9 h-9 rounded-xl bg-muted text-base">
          {emoji}
        </span>
        <div>
          <div className="text-sm font-medium">{title}</div>
          <div className="text-xs text-muted-foreground">{who}</div>
        </div>
      </div>
      <div
        className={`text-sm font-semibold ${positive ? "text-primary" : "text-destructive"}`}
      >
        {positive ? "+" : "-"} {amount}
      </div>
    </div>
  );
}
const ProductPreview: React.FC = () => {
  return (
    <div className="relative">
      <div
        className="absolute -inset-x-10 -inset-y-6 bg-gradient-primary opacity-20 blur-3xl rounded-[3rem]"
        aria-hidden
      />
      <div className="relative glass rounded-3xl p-3 shadow-card">
        <div className="rounded-2xl bg-card overflow-hidden border">
          {/* fake app chrome */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b bg-muted/40">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">
              settl.app/dashboard
            </span>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 p-6">
            <PreviewStat label="You are owed" value="₹4,820" tone="positive" />
            <PreviewStat label="You owe" value="₹1,240" tone="negative" />
            <PreviewStat label="Net balance" value="+ ₹3,580" tone="positive" />
            <div className="sm:col-span-3 rounded-2xl border bg-gradient-card p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold">Recent activity</h3>
                <span className="text-xs text-muted-foreground">
                  Last 7 days
                </span>
              </div>
              <PreviewActivity
                emoji="🏝️"
                title="Beach shack dinner"
                who="You paid · split 4 ways"
                amount="₹4,800"
                positive
              />
              <PreviewActivity
                emoji="🏠"
                title="Electricity bill"
                who="Kabir paid · you owe"
                amount="₹1,240"
              />
              <PreviewActivity
                emoji="💞"
                title="Aanya settled with you"
                who="via UPI"
                amount="₹600"
                positive
                last
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
