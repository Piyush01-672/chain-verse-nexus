
import { Navbar } from "@/components/navbar";
import { ChainCard } from "@/components/ui/chain-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";


const ALL_CHAINS = [
  {
    id: "ethereum",
    name: "Ethereum",
    icon:"https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=024",
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
    icon: "https://www.bing.com/images/search?view=detailV2&ccid=8nNVynS6&id=6DF2084C0EE4576A21FEBBC2370B657870C0D73C&thid=OIP.8nNVynS6U7MZ_V4doDd2lwHaE8&mediaurl=https%3a%2f%2fcoingape.com%2fwp-content%2fuploads%2f2023%2f12%2fcryptocurrency_Solana_Diamond_Visuals_Alamy-1-3.jpg&exph=3840&expw=5760&q=solana&simid=608030455204554929&FORM=IRPRST&ck=A887AED88DA3CDACFC4FF30A860F2ABD&selectedIndex=6&itb=0",
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
            <h1 className="text-3xl font-bold tracking-tight ml-6 text-center">Chain Explorer</h1>
            <p className="text-muted-foreground ml-6 text-center">
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
      <footer className="bg-gradient-to-r from-[#1c1e2b] via-[#232640] to-[#1f2235] text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           
            <div>
              <h2 className="text-3xl font-bold mb-4 ml-6 text-purple-400">ChainVerse Nexus</h2>
              <p className="text-sm ml-6 text-gray-300">
              Explore the future of blockchain with our seamless NFT and blockchain platform.
              </p>
            </div>

           
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition">Dashboard</a></li>
                <li><a href="./nft-gallery" className="hover:text-white transition">NFT Gallery</a></li>
                <li><a href="./chains" className="hover:text-white transition">Chain Explorer</a></li>
                <li><a href="#" className="hover:text-white transition">Market Insights</a></li>
              </ul>
            </div>

            
            <div>
              <h3 className="text-lg font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

           
            <div>
              <h3 className="text-lg font-semibold mb-3">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-white">
                  <i className="fab fa-discord"></i>
                </a>
                <a href="https://github.com/Piyush01-672" className="hover:text-white">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="hover:text-white">
                  <i className="fab fa-telegram-plane"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            © 2025 ChainVerse Nexus. Built with 💜 for the blockchain future.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChainExplorer;
