"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: false,              // Allow animations to retrigger on scroll back
      mirror: true,             // Animate elements out when scrolling past them
      duration: 800,            // Longer duration for smoother animations
      easing: "ease-out-cubic", // Better easing function for visual appeal
      anchorPlacement: "top-bottom", // Start animation when element enters viewport
      offset: 50,               // Trigger animations 50px before element enters viewport
    });
  });

  return (
    <>
      <main className="relative flex grow flex-col">{children}</main>

      <Footer />
    </>
  );
}
