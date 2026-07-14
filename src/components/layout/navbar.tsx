"use client";

import Link from "next/link";

import Container from "./Container";
import Logo from "../shared/Logo";

import { navigation } from "@/config/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">

          <Logo />

          {/* Desktop Navigation */}

          {/* Mobile Navigation */}

        </div>
      </Container>
    </header>
  );
}