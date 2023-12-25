import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../button";
const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={28}
          />
        </Link>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn >
            <UserButton afterSignOutUrl="/"/>
          </SignedIn>
            <SignedOut>
                <Button asChild className="rounded-full" size="lg">
                    <Link href="/sign-in">Sign In</Link>
                </Button>
            </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;