import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import ReactQueryProvider from "./query-client/index.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <ReactQueryProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReactQueryProvider>
);
