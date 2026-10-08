import React from 'react';

export const ConnectionProvider = ({ children }: any) => <>{children}</>;
export const WalletProvider = ({ children }: any) => <>{children}</>;
export const WalletModalProvider = ({ children }: any) => <>{children}</>;
export const useWallet = () => ({ wallet: null, connect: () => {}, disconnect: () => {}, select: () => {} });
export const useConnection = () => ({ connection: null });

export enum WalletAdapterNetwork {
    Mainnet = 'mainnet-beta',
    Testnet = 'testnet',
    Devnet = 'devnet'
}

export class DummyAdapter {
    name = 'Dummy';
    url = '';
    icon = '';
    readyState = 'NotDetected';
    connecting = false;
    connected = false;
}

export const PhantomWalletAdapter = DummyAdapter;
export const SlopeWalletAdapter = DummyAdapter;
export const SolflareWalletAdapter = DummyAdapter;
export const TorusWalletAdapter = DummyAdapter;
export const LedgerWalletAdapter = DummyAdapter;
export const SolletWalletAdapter = DummyAdapter;
export const SolletExtensionWalletAdapter = DummyAdapter;

export const clusterApiUrl = (net: string) => net;
