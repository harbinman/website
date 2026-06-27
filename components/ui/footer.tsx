"use client";

import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">
              {t("Products & Services", "产品与服务")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#products"
                >
                  {t("Cloud Architecture & Grid Systems", "云架构与网格系统")}
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#products"
                >
                  {t("AI Agents & Intelligent Automation", "AI代理与智能自动化")}
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#products"
                >
                  {t("Mobile Application Development", "移动应用开发")}
                </a>
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">
              {t("Company", "公司信息")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#about"
                >
                  {t("About Us", "关于我们")}
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#contact"
                >
                  {t("Contact Us", "联系我们")}
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">
              {t("Legal", "法律条款")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/privacy-policy"
                >
                  {t("Privacy Policy", "隐私政策")}
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/terms-of-service"
                >
                  {t("Terms of Service", "服务条款")}
                </a>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">
              {t("Contact", "联系方式")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-indigo-200/65">
                <a
                  className="transition hover:text-indigo-500"
                  href="mailto:support@dragonspine-cloud.com"
                >
                  support@dragonspine-cloud.com
                </a>
              </li>
              <li className="text-indigo-200/65">
                dragonspine-cloud.com
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-2 text-indigo-200/65">
                © 2026 Naning DragonSpine CloudArray Technology Co., Ltd.
              </p>
              <p className="mb-3 text-indigo-200/65">
                南京龙脊云阵科技有限公司
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
