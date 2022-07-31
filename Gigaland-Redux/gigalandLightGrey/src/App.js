import logo from './logo.svg';
import './App.css';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { ChainId, IpfsStorage, ThirdwebProvider } from "@thirdweb-dev/react";

const App = () => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
      <YourApp />
    </ThirdwebProvider>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



const KitchenSinkExample = () => {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Mainnet}
      chainRpc={{ [ChainId.Mainnet]: "https://mainnet.infura.io/v3" }}
      dAppMeta={{
        name: "Example App",
        description: "This is an example app",
        isDarkMode: false,
        logoUrl: "https://example.com/logo.png",
        url: "https://example.com",
      }}
      storageInterface={new IpfsStorage("https://your.ipfs.host.com")}
      supportedChains={[ChainId.Mainnet]}
      walletConnectors={[
        "walletConnect",
        { name: "injected", options: { shimDisconnect: false } },
        {
          name: "walletLink",
          options: {
            appName: "Example App",
          },
        },
        {
          name: "magic",
          options: {
            apiKey: "your-magic-api-key",
            rpcUrls: {
              [ChainId.Mainnet]: "https://mainnet.infura.io/v3",
            },
          },
        },
      ]}
      sdkOptions={{
        gasSettings: { maxPriceInGwei: 500, speed: "fast" },
        readonlySettings: {
          chainId: ChainId.Mainnet,
          rpcUrl: "https://mainnet.infura.io/v3",
        },
        gasless: {
          openzeppelin: {
            relayerUrl: "your-relayer-url",
          },
        },
      }}
    >
      <YourApp />
    </ThirdwebProvider>
  );
};

export default App;
