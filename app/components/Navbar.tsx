import React from "react";
import Image from "next/image";
import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";

// can do this because this is a server rendererd component.
// cant do this in client components (react only)
const Navbar = async () => {
  const session = await auth();

  return (
    <header className="animate-bounce px-5 py-3 bg-petal shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/sandbox.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="items-center gap-5 text-black">
          {session && session?.user ? (
            <form
              className="flex gap-5"
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>
              <button type="submit">Logout</button>

              <Link href={`/user/${session?.user.id}`}>
                <span>{session?.user?.name}</span>

                {/* <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar> */}
              </Link>
            </form>
          ) : (
            <form
              className="flex gap-5"
              action={async () => {
                "use server"; //ensjures this part gets called on server rather than as a client (cannot use with onclick since its interactive, so change to a built-in logic)

                //we use server action, NEW with React 19.

                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
              <span className="max-sm:hidden">Logout</span>
              <LogOut className="size-6 sm:hidden text-red-500" />
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
