import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

function injectAnalytics() {
  const endpoint = (import.meta.env.VITE_ANALYTICS_ENDPOINT as string | undefined) ?? undefined;
  const websiteId = (import.meta.env.VITE_ANALYTICS_WEBSITE_ID as string | undefined) ?? undefined;

  if (!endpoint || !websiteId) return;

  const src = `${endpoint.replace(/\/$/, "")}/umami`;
  const script = document.createElement("script");
  script.defer = true;
  script.src = src;
  script.setAttribute("data-website-id", websiteId);
  document.body.appendChild(script);
}

injectAnalytics();

createRoot(document.getElementById("root")!).render(<App />);
