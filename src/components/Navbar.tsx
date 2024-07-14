"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-20 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* Home */}
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        {/* Our Courses */}
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col gap-2">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/">Basic Music Theory</HoveredLink>
            <HoveredLink href="/">Advanced Composition</HoveredLink>
            <HoveredLink href="/">Song Writing</HoveredLink>
            <HoveredLink href="/">Music Production</HoveredLink>
          </div>
        </MenuItem>

        {/* Contact Us */}
        <Link href="/contact">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
