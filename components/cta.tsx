"use client";

import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Cta() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              {t(
                "Ready to Start Your Digital Transformation?",
                "准备开始您的数字化转型之旅？"
              )}
            </h2>
            <div className="mb-8 space-y-3 text-gray-200" data-aos="fade-up" data-aos-delay={300}>
              <p className="text-lg">
                <span className="text-indigo-200/65">{t("Email", "邮箱")}:</span>{" "}
                <a href="mailto:support@dragonspine-cloud.com" className="text-indigo-400 hover:text-indigo-300 transition">
                  support@dragonspine-cloud.com
                </a>
              </p>
              <p className="text-lg">
                <span className="text-indigo-200/65">{t("Website", "网站")}:</span>{" "}
                <span className="text-gray-300">dragonspine-cloud.com</span>
              </p>
            </div>
            <div className="mx-auto max-w-xs" data-aos="fade-up" data-aos-delay={400}>
              <a
                className="btn group w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                href="mailto:support@dragonspine-cloud.com"
              >
                <span className="relative inline-flex items-center">
                  {t("Contact Us", "联系我们")}
                  <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
