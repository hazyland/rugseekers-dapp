import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";
// import RUGSEEKER_ABI from '../../assets/rugseekerABI.json'
import RUGSEEKER_ABI from '../../assets/EagleEyeABI.json'
import { ethers, utils } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
export const RUGSEEKER_ADDRESS = '0x4e6a510659d3d0F6897bbab3Db67DA0B3d001fB7';
export const NODE_URL = "https://bsc-dataseed.binance.org/";
interface Web3State {
  currentWallet: string | "";
  web3Provider: any
  walletProvider: any;
  web3Modal: any;
  currentContract: any;
  userTokenBalance: string | number;
  userTotalRewards: string | number;
  timeLeftHours: number | string
  timeLeftMinutes: number | string
  timeLeftSeconds: number | string,
  totalSupply: string | number,
  tokensToBurn: string | number,
  tokensBurned: string | number,
  totalRewards: string | number,
}
const initalState: Web3State = {
  web3Provider: null,
  currentWallet: "",
  walletProvider: null,
  web3Modal: null,
  currentContract: null,
  userTokenBalance: 0,
  userTotalRewards: 0,
  timeLeftHours: 0,
  timeLeftMinutes: 0,
  timeLeftSeconds: 0,
  totalSupply: 0,
  tokensToBurn: 0,
  tokensBurned: 0,
  totalRewards: 0
};

const Web3StateContext = createContext(initalState);
const Web3DispatchContext = createContext<any>(null);

interface Action {
  type: string;
  payload: any;
}
function reducer(state: Web3State, action: Action) {
  switch (action.type) {
    case "UPDATE_WEB3_PROVIDER":
      return { ...state, web3Provider: action.payload };
    case "UPDATE_CURRENT_WALLET":
      return { ...state, currentWallet: action.payload };
    case "UPDATE_WALLET_PROVIDER":
      return { ...state, walletProvider: action.payload };
    case "UPDATE_WEB3_MODAL":
      return { ...state, web3Modal: action.payload };
    case "UPDATE_CURRENT_CONTRACT":
      return { ...state, currentContract: action.payload };
    case "UPDATE_USER_TOKEN_BALANCE": {
      const rawBalance = action.payload;

      const formattedbalance = utils.commify(
        utils.formatUnits(rawBalance, 9).split(".")[0]
      ); // EE Decimals = 9

      return { ...state, userTokenBalance: formattedbalance };
    }
    case "UPDATE_USER_TOTAL_REWARDS": {
      const rawBalance = action.payload;
      const remainder = rawBalance.mod(1e12);
      const formattedbalance = utils.formatEther(rawBalance.sub(remainder));
      // EE Decimals = 9
      return { ...state, userTotalRewards: formattedbalance };
    }
    case "UPDATE_TIME": {
      try{
        const totalSeconds = parseInt(action.payload);
        const hours = (totalSeconds / 3600);
        const minutes =(hours  % 1) * 60;
        const seconds = (minutes  % 1) * 60;
        return { ...state, timeLeftHours: hours.toFixed(0), timeLeftMinutes: minutes.toFixed(0), timeLeftSeconds: seconds.toFixed(0) };
      } catch(e) {
        console.log(e)
        return {...state}
      }
    }
    case "UPDATE_SUPPLY": {
      try{
        const totalSupply = action.payload;
        const formattedSupply =  utils.commify(utils.formatUnits(totalSupply, 9))
        return { ...state, totalSupply: formattedSupply.split('.')[0] };
      } catch(e) {
        console.log(e)
        return {...state}
      }
    }
    case "UPDATE_TOKENS_TO_BURN": {
      try{
        const tokens = action.payload;
        const formattedTokens =  utils.commify(utils.formatUnits(tokens, 9))
        return { ...state, tokensToBurn: formattedTokens.split('.')[0] };
      } catch(e) {
        console.log(e)
        return {...state}
      }
    }
    case "UPDATE_TOTAL_BURNED": {
      try{
        const tokens = action.payload;
        const formattedTokens =  utils.commify(utils.formatUnits(tokens, 9))
          return { ...state, tokensBurned: formattedTokens.split('.')[0] };
      } catch(e) {
        console.log(e)
        return {...state}
      }
    }
    case "UPDATE_TOTAL_REWARDS": {
      try{
        const bnb = action.payload;
        const remainder = bnb.mod(1e12);
        const formattedBnb = utils.formatEther(bnb.sub(remainder));
          return { ...state, totalRewards: formattedBnb };
      } catch(e) {
        console.log(e)
        return {...state}
      }
    }

  }
}
async function initWeb3(web3Dispatch: any) {
  const provider = new ethers.providers.JsonRpcProvider(NODE_URL);

  const EagleEyeContract = new ethers.Contract(
    // DOBO_BNB_LP_ADDRESS,
    RUGSEEKER_ADDRESS,
    RUGSEEKER_ABI,
    provider
  );
  const [totalRewards, totalSupply, tokensBurned, tokensToBurn, timeLeft] = await Promise.all([EagleEyeContract.totalRewardBNBPaid(),EagleEyeContract.totalSupply(), EagleEyeContract.totalTokensBurned(), EagleEyeContract.tokensToBurn(), EagleEyeContract.liquidityUnlockTimeLeft()])
  web3Dispatch({ type: "UPDATE_WEB3_PROVIDER", payload: provider });
  web3Dispatch({ type: "UPDATE_CURRENT_CONTRACT", payload: EagleEyeContract });
  // const totalRewards = await EagleEyeContract.totalRewardBNBPaid();
  console.log('totalRewards',totalRewards,);
  web3Dispatch({ type: "UPDATE_TOTAL_REWARDS", payload: totalRewards });
  // const totalSupply = await EagleEyeContract.totalSupply();
  web3Dispatch({ type: "UPDATE_SUPPLY", payload: totalSupply.toString() });
  // const tokensBurned = await EagleEyeContract.totalTokensBurned();
  web3Dispatch({ type: "UPDATE_TOTAL_BURNED", payload: tokensBurned });
  // const tokensToBurn = await EagleEyeContract.tokensToBurn();
  web3Dispatch({ type: "UPDATE_TOKENS_TO_BURN", payload: tokensToBurn });
  // const timeLeft = await EagleEyeContract.liquidityUnlockTimeLeft();
  web3Dispatch({ type: "UPDATE_TIME", payload: timeLeft.toString() });
}
export default function Web3Provider({ children }: PropsWithChildren<any>) {
  const [state, dispatch] = useReducer(reducer, initalState as never);
  useEffect(() => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          rpc: {
            "56": NODE_URL,
          },
          chainId: 56,
          supportedChainIds: [56],
          network: "binance",
          bridge: "https://bridge.walletconnect.org", // Required
        },
      },
    };
    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
    });
    
    if (web3Modal.cachedProvider) {
      const provider = web3Modal.connect();
    }
    web3Modal.on("connect", async (provider) => {
      dispatch({ type: "UPDATE_WALLET_PROVIDER", payload: provider });
      const accounts = await provider.request({ method: "eth_accounts" });
      dispatch({ type: "UPDATE_CURRENT_WALLET", payload: accounts[0] });
    });
    if (web3Modal.cachedProvider) {
      // const accounts = await provider.request({method: 'eth_accounts'});
      // web3Dispatch({type: "UPDATE_CURRENT_WALLET", payload: accounts[0]})
    } else {
      // not cache
    }
    dispatch({ type: "UPDATE_WEB3_MODAL", payload: web3Modal });
    initWeb3(dispatch);
  }, []);
  return (
    <Web3DispatchContext.Provider value={dispatch}>
      <Web3StateContext.Provider value={state}>
        {children}
      </Web3StateContext.Provider>
    </Web3DispatchContext.Provider>
  );
}

export function useWeb3ProviderState() {
  const ctx = useContext(Web3StateContext);
  return ctx;
}
export function useWeb3ProviderDispatch() {
  const ctx = useContext(Web3DispatchContext);
  return ctx;
}
