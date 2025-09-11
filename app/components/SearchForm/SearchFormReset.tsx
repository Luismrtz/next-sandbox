"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SearchFormReset = () => {
  const pathname = usePathname();

  return (
    <Link
      href={pathname}
      prefetch={false}
      aria-label="Clear search"
      className="search-btn text-white"
    >
      <X className="size-5" />
    </Link>
  );
};

export default SearchFormReset;
