"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroHome() {
  const { t } = useLanguage();

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="home">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <motion.div
            className="pb-12 text-center md:pb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              variants={itemVariants}
            >
              {t(
                "Empowering the Future with Cloud-Native Intelligence",
                "用云原生智能赋能未来"
              )}
            </motion.h1>
            <div className="mx-auto max-w-3xl">
              <motion.p
                className="mb-8 text-lg text-indigo-200/65"
                variants={itemVariants}
              >
                {t(
                  "We deliver cutting-edge solutions in cloud architecture, AI-powered automation, and intelligent mobile applications. Transform your business with next-generation technology built for the modern enterprise.",
                  "我们提供云架构、AI智能自动化和移动应用的尖端解决方案。通过为现代企业量身打造的新一代技术，实现您的业务转型。"
                )}
              </motion.p>
              <motion.div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center sm:gap-4"
                variants={itemVariants}
              >
                <motion.a
                  className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/0.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="#products"
                  initial={{ opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative inline-flex items-center">
                    {t("Explore Our Services", "探索我们的服务")}
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </motion.a>
                <motion.a
                  className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 border border-gray-700 hover:bg-[length:100%_150%] sm:w-auto"
                  href="#contact"
                  initial={{ opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("Contact Us", "联系我们")}
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
