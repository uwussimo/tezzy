import { type AppType } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import { Navbar } from "@/components/nav";
import { ThemeProvider } from "@/components/teme-provider";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <NextNProgress
          color="#000"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
