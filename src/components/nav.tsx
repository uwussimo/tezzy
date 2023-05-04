import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import {
  GitHubLogoIcon,
  RocketIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";
import { ModeToggle } from "./mode-toggle";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import NextNProgress from "nextjs-progressbar";
import { useTheme } from "next-themes";

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
  const { theme, systemTheme } = useTheme();

  return (
    <header>
      <NextNProgress
        color={
          theme == "dark"
            ? "#fff"
            : theme == "system"
            ? systemTheme == "dark"
              ? "#fff"
              : "#000"
            : "#000"
        }
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <div className="fixed top-0 hidden w-full flex-row items-center justify-between bg-white p-2 px-32 dark:bg-zinc-950 md:flex">
        <div className="flex items-center justify-between gap-2">
          <div className="text-2xl font-medium">
            <Link href={"/"}>Tezzy</Link>
          </div>
          {links.map(({ href, label, disabled }) => {
            return (
              <Button variant={"link"} disabled={disabled} key={label}>
                <Link href={href}>{label}</Link>
              </Button>
            );
          })}
        </div>
        <div className="items-center gap-2 md:hidden lg:flex">
          <ModeToggle />
          <Link
            href={"https://github.com/uwussimo/tezzy"}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  size: "sm",
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link
            href={"https://twitter.com/uwussimo"}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  size: "sm",
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.twitter className="h-5 w-5 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
          <Button variant={"outline"}>Sign in</Button>
          <Button>
            <RocketIcon className="mr-2 h-4 w-4" />
            Get started
          </Button>
        </div>
      </div>
      <div className="fixed bottom-0 flex w-full items-center justify-between bg-white p-4 dark:bg-zinc-950 md:hidden">
        {links.map(({ href, label, disabled, icon }) => {
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
