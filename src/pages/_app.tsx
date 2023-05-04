import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import { Navbar } from "@/components/nav";
import { ThemeProvider } from "@/components/teme-provider";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
