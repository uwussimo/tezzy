import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { api } from "@/utils/api";
import { Skeleton } from "./ui/skeleton";

const InfoCard = () => {
  const { data } = api.user.getAll.useQuery();

  return (
    <Card className={cn("m-4 w-[380px]")}>
      <CardHeader>
        <CardTitle>
          <span className="text-6xl font-bold text-primary">Tezzy</span>
        </CardTitle>
        {data ? (
          data?.map((user) => {
            return (
              <CardDescription key={user.id} className={cn("pt-4")}>
                from tRPC:
                <code> {user?.firstName + " " + user?.lastName}</code>
              </CardDescription>
            );
          })
        ) : (
          <div className="pt-4">
            <Skeleton className="h-[20px] w-full rounded-full" />
          </div>
        )}
      </CardHeader>
      <CardContent>
        Tezzy is a social media platform designed to provide users with a fast,
        personalized, and engaging experience for sharing short messages, called
        buzzes, with the world.
      </CardContent>
      <CardFooter>
        <div className="flex gap-2">
          <Button> Get Started</Button>
          <Button variant={"outline"} asChild>
            <Link href={"https://github.com/uwussimo/tezzy"} target="_blank">
              Learn more
              <ExternalLinkIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export { InfoCard };
