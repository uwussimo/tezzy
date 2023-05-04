import { type AppType } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import { Navbar } from "@/components/nav";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress
        color="#000"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
