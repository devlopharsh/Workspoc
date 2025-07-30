'use client';
import React from "react";

// imported component
import Navbar from "@/components/Navbar_horizontal";
import Navbar_vertical from "@/components/Navbar_vertical";

export default function Home() {
  return (
    <>
      <Navbar />
      <Navbar_vertical />
    </>
  );
}
