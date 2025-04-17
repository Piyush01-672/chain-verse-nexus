
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { BrowserProvider, Eip1193Provider } from "ethers";
import { toast } from "sonner";

declare global {
  interface Window {
    ethereum?: Eip1193Provider & {
      on: (event: string, handler: (...args: any[]) => void) => void;
      removeListener: (event: string, handler: (...args: any[]) => void) => void;
    };
  }
}

interface WalletContextType {
  address: string | null;
  provider: BrowserProvider | null;
  chainId: number | null;
  isConnecting: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | null>(null);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  // Check if wallet was previously connected
  useEffect(() => {
    const savedAddress = localStorage.getItem("walletAddress");
    if (savedAddress) {
      connectWallet();
    }
  }, []);

  // Listen for account changes
  useEffect(() => {
    if (!window.ethereum) return;

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnectWallet();
      } else if (accounts[0] !== address) {
        setAddress(accounts[0]);
        localStorage.setItem("walletAddress", accounts[0]);
      }
    };

    const handleChainChanged = (chainIdHex: string) => {
      setChainId(parseInt(chainIdHex, 16));
    };

    window.ethereum.on("accountsChanged", handleAccountsChanged);
    window.ethereum.on("chainChanged", handleChainChanged);

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
        window.ethereum.removeListener("chainChanged", handleChainChanged);
      }
    };
  }, [address]);

  const connectWallet = async () => {
    if (!window.ethereum) {
      toast.error("Wallet not found. Please install MetaMask or another Ethereum wallet");
      return;
    }

    try {
      setIsConnecting(true);
      const ethersProvider = new BrowserProvider(window.ethereum);
      const accounts = await ethersProvider.send("eth_requestAccounts", []);
      const network = await ethersProvider.getNetwork();
      
      setProvider(ethersProvider);
      setAddress(accounts[0]);
      setChainId(Number(network.chainId));
      
      localStorage.setItem("walletAddress", accounts[0]);
      
      toast.success(`Wallet connected: ${shortenAddress(accounts[0])}`);
    } catch (error) {
      console.error("Error connecting wallet:", error);
      toast.error("Could not connect to your wallet");
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAddress(null);
    setProvider(null);
    setChainId(null);
    localStorage.removeItem("walletAddress");
    toast.info("Your wallet has been disconnected");
  };

  return (
    <WalletContext.Provider
      value={{
        address,
        provider,
        chainId,
        isConnecting,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  
  return context;
}

// Utility function to shorten address for display
export function shortenAddress(address: string, chars = 4): string {
  return `${address.substring(0, chars + 2)}...${address.substring(42 - chars)}`;
}
