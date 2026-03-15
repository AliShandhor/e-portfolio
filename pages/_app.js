import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Force scroll to top on initial load and route changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [router.pathname]);

  // Also force scroll to top immediately on first paint
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  return <Component {...pageProps} />;
}