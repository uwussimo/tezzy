import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import { Navbar } from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <NextNProgress
          color={"#5F6368"}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <ClerkProvider {...pageProps}>
          <Navbar />
          <Component {...pageProps} />
        </ClerkProvider>
      </ThemeProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
