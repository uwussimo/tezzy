import { type NextPage } from "next";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const PageNotFound: NextPage = () => {
  const { theme, systemTheme } = useTheme();
  const isDark =
    theme == "dark" ? true : theme == "system" ? systemTheme == "dark" : false;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-200 dark:bg-zinc-950">
      <Image
        src={isDark ? "/dark_404.svg" : "/light_404.svg"}
        width={512}
        height={512}
        alt="Page Not Found"
      />
    </div>
  );
};

export default PageNotFound;
