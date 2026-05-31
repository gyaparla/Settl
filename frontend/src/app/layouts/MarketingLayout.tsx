import Header from "../../features/marketing/components/Header";
import Footer from "../../features/marketing/components/Footer";
import { Outlet } from "react-router-dom";

const MarketingLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MarketingLayout;
