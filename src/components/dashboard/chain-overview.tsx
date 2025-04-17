
import { ChainCard } from "@/components/ui/chain-card";

// Sample blockchain data - in a real app this would come from an API
const CHAINS = [
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
  }
];

export function ChainOverview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Chain Overview</h2>
        <a 
          href="/chains" 
          className="text-primary text-sm hover:underline"
        >
          View All Chains
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CHAINS.map((chain) => (
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
  );
}
