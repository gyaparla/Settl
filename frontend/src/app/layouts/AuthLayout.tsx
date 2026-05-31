import { Link, Outlet } from "react-router-dom";
import AppLogo from "../../shared/components/AppLogo";
import ThemeToggle from "../../shared/components/ThemeToggle";

const AuthLayout = () => {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70">
        <nav className="flex justify-between items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16">
          <AppLogo />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </nav>
      </header>
      <section className="min-h-[calc(100vh-4rem)] grid lg:grid-cols-2 bg-background">
        {/* Left Panel */}
        <div className="hidden lg:flex relative overflow-hidden bg-gradient-hero p-12 flex-col">
          <div className="flex-1 flex items-center">
            <div className="relative">
              <div
                className="absolute -inset-10 bg-gradient-primary opacity-20 blur-3xl rounded-full"
                aria-hidden
              />
              <blockquote className="relative text-2xl font-semibold leading-snug tracking-tight">
                "Goa trip. Four friends. Zero awkward 'who paid for what'
                moments. Settl just handles it."
              </blockquote>
              <p className="relative mt-4 text-sm text-muted-foreground">
                — Aanya R., Settl user
              </p>
            </div>
          </div>
          <div className="relative text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Settl
          </div>
        </div>

        {/* Right Panel - form*/}
        <div className="flex items-center justify-center p-6">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default AuthLayout;
