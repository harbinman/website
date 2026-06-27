"use client";

import Logo from "./logo";
import LanguageToggle from "./language-toggle";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-30 w-full py-2 md:py-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between rounded-2xl bg-gray-900/95 px-6 backdrop-blur-md border border-gray-800 shadow-lg">
          {/* Site branding */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Navigation links */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a
                  href="/"
                  className="text-base font-medium text-gray-100 hover:text-indigo-400 transition-colors"
                >
                  {t("Home", "首页")}
                </a>
              </li>
              <li>
                <a
                  href="/#products"
                  className="text-base font-medium text-gray-100 hover:text-indigo-400 transition-colors"
                >
                  {t("Products", "产品/服务")}
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-base font-medium text-gray-100 hover:text-indigo-400 transition-colors"
                >
                  {t("About", "关于我们")}
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-base font-medium text-gray-100 hover:text-indigo-400 transition-colors"
                >
                  {t("Contact", "联系我们")}
                </a>
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
        </div>
      </div>
    </header>
  );
}
