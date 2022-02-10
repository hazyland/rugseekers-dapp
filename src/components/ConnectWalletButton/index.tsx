import { useEffect } from "react";
import { useWeb3ProviderDispatch, useWeb3ProviderState } from "../../contexts/Web3/Web3Provider";

export function ConnectWalletButton() {
    const web3Dispatch = useWeb3ProviderDispatch();
    const web3State = useWeb3ProviderState();
  
    async function clearWallet() {
      await web3State.web3Modal.resetState();
      await web3State.web3Modal.clearCachedProvider();
      localStorage.clear()
      web3Dispatch({ type: "UPDATE_CURRENT_WALLET", payload: "" });
    }
  
    async function triggerWeb3Modal() {
      const provider = await web3State.web3Modal.connect();
      web3Dispatch({ type: "UPDATE_WALLET_PROVIDER", payload: provider });
  
      provider.on("accountsChanged", (accounts: string[]) => {
        console.log(accounts);
        web3Dispatch({ type: "UPDATE_CURRENT_WALLET", payload: accounts[0] });
      });
  
      // Subscribe to chainId change
      provider.on("chainChanged", (chainId: number) => {
        console.log(chainId);
      });
  
      // Subscribe to provider connection
      provider.on("connect", (info: { chainId: number }) => {
        console.log("CONNECTED", info);
      });
  
      // Subscribe to provider disconnection
      provider.on("disconnect", (error: { code: number; message: string }) => {
        console.log(error);
      });
    }
  
    useEffect(() => {}, []);
  
    const { currentWallet } = web3State;
    const walletBegin = currentWallet.substring(0, 5);
    const walletEnd = currentWallet.substring(
      currentWallet.length - 5,
      currentWallet.length
    );
    const formattedWallet = `${walletBegin}...${walletEnd}`;
    return (
      <div className={"leftNavBottom"} style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        {web3State.currentWallet ? (
          <span>{formattedWallet}</span>
        ) : (
          <span onClick={triggerWeb3Modal}>Connect Wallet</span>
        )}
        {web3State.currentWallet && <div style ={{
          background: "green",
          position: "absolute",
          transform: "translateY(100%)",
          width: "min-content",
          margin: "5px 0 0 0",
          borderRadius: "6px",
          padding: "5px",
          cursor: "pointer",
          boxShadow: "0px 0px 10px 2px black"
        }} onClick={clearWallet}>DISCONNECT</div>}
      </div>
    );
  }
  