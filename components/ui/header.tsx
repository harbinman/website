"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "./logo";
import LanguageToggle from "./language-toggle";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Transform scroll position to opacity and blur values
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 16]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-30 w-full py-2 md:py-5"
      style={{
        opacity: headerOpacity,
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className="relative flex h-16 items-center justify-between rounded-2xl px-6 border shadow-lg transition-all duration-300"
          style={{
            backdropFilter: scrolled ? "blur(16px)" : "blur(8px)",
            backgroundColor: scrolled ? "rgba(17, 24, 39, 0.98)" : "rgba(17, 24, 39, 0.95)",
            borderColor: scrolled ? "rgba(75, 85, 99, 0.5)" : "rgba(75, 85, 99, 0.3)",
          }}
        >
          {/* Site branding */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring" as const, stiffness: 300 }}
          >
            <Logo />
          </motion.div>

          {/* Navigation links */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <motion.a
                  href="/"
                  className="text-base font-medium text-gray-100 hover:text-indigo-400 transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {t("Home", "首页")}
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/#products"
                  className="text-base font-medium text-gray-100 hover:text-indigo-400 transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {t("Products", "产品/服务")}
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/#about"
                  className="text-base font-medium text-gray-100 hover:text-indigo-400 transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {t("About", "关于我们")}
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/#contact"
                  className="text-base font-medium text-gray-100 hover:text-indigo-400 transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {t("Contact", "联系我们")}
                </motion.a>
              </li>
            </ul>
          </nav>

          {/* Mobile navigation and language toggle */}
          <div className="flex items-center gap-4">
            <div className="md:hidden flex items-center space-x-3">
              <a href="/#products" className="text-sm text-gray-100">{t("Products", "产品")}</a>
              <a href="/#about" className="text-sm text-gray-100">{t("About", "关于")}</a>
              <a href="/#contact" className="text-sm text-gray-100">{t("Contact", "联系")}</a>
            </div>
            <LanguageToggle />
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
