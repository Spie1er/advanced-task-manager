import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import ReactQueryProvider from "./query-client/index.tsx";

createRoot(document.getElementById("root")!).render(
  <ReactQueryProvider>
    <App />
  </ReactQueryProvider>
);
