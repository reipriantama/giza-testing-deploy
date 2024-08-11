// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import GpuContextProvider from "./components/context/gpuContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <GpuContextProvider>
    <App />
  </GpuContextProvider>,
  // {/* </React.StrictMode>, */}
);
