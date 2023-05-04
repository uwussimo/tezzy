import Link from "next/link";
import { Button } from "./ui/button";
import {
  RocketIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";
import { ModeToggle } from "./mode-toggle";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const links = [
  {
    href: "/",
    label: "Home",
    disabled: false,
    icon: <HomeIcon className="mr-2 h-5 w-5" />,
  },
  {
    href: "/explore",
    label: "Explore",
    disabled: true,
    icon: <MagnifyingGlassIcon className="mr-2 h-5 w-5" />,
  },
  {
    href: "/trending",
    label: "Trending",
    disabled: true,
    icon: <LightningBoltIcon className="mr-2 h-5 w-5" />,
  },
];

export const Navbar = () => {
  return (
    <header>
      <div className="fixed top-0 hidden w-full flex-row items-center justify-between bg-white p-4 px-32 dark:bg-zinc-950 md:flex">
        <div className="flex items-center justify-between gap-8">
          <div className="text-3xl font-medium">
            <Link href={"/"}>TEZZY</Link>
          </div>
          <div className="flex items-center justify-center">
            {links.map(({ href, label, disabled, icon }) => {
              return (
                <Button variant={"ghost"} key={label} asChild>
                  <Link href={href}>
                    {icon}
                    {label}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
        <div className="items-center gap-2 md:hidden lg:flex">
          <ModeToggle />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button variant={"outline"}>Sign in</Button>
            <Button>
              <RocketIcon className="mr-2 h-4 w-4" />
              Get started
            </Button>
          </SignedOut>
        </div>
      </div>
      <div className="fixed bottom-0 flex w-full items-center justify-between bg-white p-4 dark:bg-zinc-950 md:hidden">
        {links.map(({ href, label, icon }) => {
          return (
            <Button variant={"outline"} key={label} asChild>
              <Link href={href}>
                {icon}
                {label}
              </Link>
            </Button>
          );
        })}
      </div>
    </header>
  );
};
