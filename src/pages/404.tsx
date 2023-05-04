import { type NextPage } from "next";
import Image from "next/image";
import React from "react";

const PageNotFound: NextPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-200 dark:bg-zinc-950">
      <Image src="/404.svg" width={512} height={512} alt="Page Not Found" />
    </div>
  );
};

export default PageNotFound;
