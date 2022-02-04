import { createContext, PropsWithChildren, useContext, useReducer } from "react";
import { utils } from "ethers";
import { useState, useEffect } from "react";

interface AppState {
  appDimensions: {innerWidth: number, innerHeight: number}
}
const initalState: AppState = {
  appDimensions: {innerWidth: 0, innerHeight: 0}

};

const AppStateContext = createContext(initalState);
const AppDispatchContext = createContext<any>(null);

interface Action {
  type: string;
  payload: any;
}



function reducer(state: AppState, action: Action) {
  switch (action.type) {
    case "updateDimensions":
      state.appDimensions = action.payload  
      return state
  }
}




  function useWindowDimensions() {
    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        innerWidth: width,
        innerHeight: height,
      };
    }
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }








 
  
export default function AppProvider({ children }: PropsWithChildren<any>) {
  const [state, dispatch] = useReducer(reducer, initalState as never);

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
}

export function useAppProvider() {
  const ctx = useContext(AppStateContext);
  return ctx;
}
export function useAppProviderDispatch() {
  const ctx = useContext(AppDispatchContext);
  return ctx;
}
