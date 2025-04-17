
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { OverviewStats } from "@/components/dashboard/overview-stats";
import { FeaturedNFTs } from "@/components/dashboard/featured-nfts";
import { ChainOverview } from "@/components/dashboard/chain-overview";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <div className="container py-10 space-y-10">
          <OverviewStats />
          <ChainOverview />
          <FeaturedNFTs />
        </div>
      </main>
      <footer className="border-t border-border/60 py-6 backdrop-blur-sm bg-background/30">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2025 ChainVerse Nexus. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
