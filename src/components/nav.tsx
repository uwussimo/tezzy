import Link from "next/link";
import { Button } from "./ui/button";
import { GitHubLogoIcon, RocketIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const links = [
  { href: "/", label: "Home", disabled: false },
  { href: "/about", label: "About", disabled: true },
  { href: "/contact", label: "Contact", disabled: true },
];

export const Navbar = () => {
  return (
    <div className="fixed top-0 flex w-full flex-row items-center justify-between bg-white p-2 px-32">
      <div className="flex items-center justify-between gap-2">
        <div className="text-2xl font-medium">
          <Link href={"/"}>Tezzy</Link>
        </div>
        {links.map(({ href, label, disabled }) => {
          return (
            <TooltipProvider key={label}>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant={"link"} disabled={disabled}>
                    <Link href={href} key={`${href}${label}`}>
                      {label}
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="p-2">
                    {disabled ? "Coming soon!" : "Click to navigate"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        <Button variant={"ghost"} asChild>
          <Link href={"https://github.com/uwussimo/tezzy"} target="_blank">
            <GitHubLogoIcon className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant={"outline"}>Sign in</Button>
        <Button>
          <RocketIcon className="mr-2 h-4 w-4" />
          Get started
        </Button>
      </div>
    </div>
  );
};
