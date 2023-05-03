import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  return (
    <>
      <Head>
        <title>Tezzy</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-slate-50 to-slate-300">
        <div>
          <Card className={cn("w-[380px]")}>
            <CardHeader>
              <CardTitle>
                <h1 className="text-6xl font-bold text-primary">Tezzy</h1>
              </CardTitle>
              <CardDescription>
                Get started by editing <code>pages/index.tsx</code>
              </CardDescription>
            </CardHeader>
            <CardContent>
              Tezzy is a social media platform designed to provide users with a
              fast, personalized, and engaging experience for sharing short
              messages, called "buzzes"
            </CardContent>
            <CardFooter>
              <Button> Get Started</Button>
              <Button variant={"outline"} asChild>
                <Link
                  href={"https://github.com/uwussimo/tezzy"}
                  target="_blank"
                >
                  Learn more
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Home;
