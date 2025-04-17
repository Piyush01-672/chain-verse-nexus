
import { Navbar } from "@/components/navbar";
import { ChainCard } from "@/components/ui/chain-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

// Sample blockchain data (expanded)
const ALL_CHAINS = [
  {
    id: "ethereum",
    name: "Ethereum",
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=026",
    color: "#627EEA",
    stats: [
      { label: "Price", value: "$3,245.16" },
      { label: "24h Change", value: "+2.4%" },
      { label: "Market Cap", value: "$389B" },
      { label: "TVL", value: "$48.2B" }
    ]
  },
  {
    id: "solana",
    name: "Solana",
    icon: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=026",
    color: "#14F195",
    stats: [
      { label: "Price", value: "$138.27" },
      { label: "24h Change", value: "+5.2%" },
      { label: "Market Cap", value: "$62.4B" },
      { label: "TVL", value: "$7.8B" }
    ]
  },
  {
    id: "polygon",
    name: "Polygon",
    icon: "https://cryptologos.cc/logos/polygon-matic-logo.svg?v=026",
    color: "#8247E5",
    stats: [
      { label: "Price", value: "$0.62" },
      { label: "24h Change", value: "+1.8%" },
      { label: "Market Cap", value: "$6.2B" },
      { label: "TVL", value: "$1.4B" }
    ]
  },
  {
    id: "avalanche",
    name: "Avalanche",
    icon: "https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=026",
    color: "#E84142",
    stats: [
      { label: "Price", value: "$28.35" },
      { label: "24h Change", value: "+3.1%" },
      { label: "Market Cap", value: "$10.5B" },
      { label: "TVL", value: "$3.1B" }
    ]
  },
  {
    id: "binance",
    name: "BNB Chain",
    icon: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=026",
    color: "#F0B90B",
    stats: [
      { label: "Price", value: "$545.20" },
      { label: "24h Change", value: "+0.9%" },
      { label: "Market Cap", value: "$84.3B" },
      { label: "TVL", value: "$5.7B" }
    ]
  },
  {
    id: "cardano",
    name: "Cardano",
    icon: "https://cryptologos.cc/logos/cardano-ada-logo.svg?v=026",
    color: "#0033AD",
    stats: [
      { label: "Price", value: "$0.35" },
      { label: "24h Change", value: "-0.8%" },
      { label: "Market Cap", value: "$12.4B" },
      { label: "TVL", value: "$0.18B" }
    ]
  }
];

const ChainExplorer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-10">
        <div className="space-y-8">
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">Chain Explorer</h1>
            <p className="text-muted-foreground">
              Explore and compare blockchain networks across the omnichain ecosystem
            </p>
          </div>
          
          <Card className="glassmorphism">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search chains..."
                    className="pl-9 bg-muted/50"
                  />
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" className="w-full">TVL</Button>
                  <Button variant="outline" className="w-full">Market Cap</Button>
                </div>
                <div className="flex justify-end">
                  <Button className="w-full md:w-auto">Compare Chains</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_CHAINS.map((chain) => (
              <ChainCard
                key={chain.id}
                name={chain.name}
                icon={chain.icon}
                color={chain.color}
                stats={chain.stats}
              />
            ))}
          </div>
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

export default ChainExplorer;
