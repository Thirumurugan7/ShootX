import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Suspense } from "react";
import './index.css'
import { ChatProvider } from './hooks/useChat'
import Loading from "./interface/Loading";
import { Provider } from "react-redux";
import { store, persistor } from "../store/store";
import { ThirdwebProvider } from "thirdweb/react";
import { BaseSepoliaTestnet } from "@thirdweb-dev/chains";
import { PersistGate } from "redux-persist/integration/react";
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthersExtension } from "@dynamic-labs/ethers-v5";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

import GunSelectionScreen from "./components/NewStore/GunSelectionScreen.jsx";
import CharacterSelectionScreen from "./components/NewStore/CharacterSelectionScreen.jsx";

const huddleClient = new HuddleClient({
  projectId: "yn1GSFecK63Bm7pRiiuBuUUQQhWmpJM3",
  options: {
    activeSpeakers: {
      size: 12,
    },
  },
});

import { StarknetWalletConnectors } from "@dynamic-labs/starknet";
import { HuddleClient, HuddleProvider } from "@huddle01/react";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <ChatProvider>
    <Suspense fallback={<Loading />}>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HuddleProvider key="huddle01-provider" client={huddleClient}>
    
      <App />

      </HuddleProvider>
      </PersistGate>
      </Provider>
      </Suspense>
    </ChatProvider>
    
  </React.StrictMode>,
)
