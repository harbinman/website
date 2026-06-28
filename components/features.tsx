"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Features() {
  const { t } = useLanguage();

  // Container for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Individual card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  // Icon animation with rotation
  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section id="about" className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                {t("About Us", "关于我们")}
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              {t("Our Vision & Mission", "我们的愿景与使命")}
            </h2>
            <p className="text-lg text-indigo-200/65">
              {t(
                "DragonSpine CloudArray Technology is dedicated to driving enterprise digital transformation through innovative technology. Our team combines deep technical expertise with industry insights to provide customized solutions for our clients.",
                "DragonSpine CloudArray Technology致力于通过创新技术推动企业数字化转型。我们的团队结合深厚的技术专长与行业洞察，为客户提供定制化的解决方案。"
              )}
            </p>
          </div>
          {/* Items */}
          <motion.div
            className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.article variants={cardVariants}>
              <motion.svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                variants={iconVariants}
              >
                <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                <path
                  fillOpacity=".48"
                  d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
                />
              </motion.svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                {t("Innovation-Driven", "创新驱动")}
              </h3>
              <p className="text-indigo-200/65">
                {t(
                  "Continuously exploring cutting-edge technologies, applying the latest cloud computing, AI, and mobile technologies to real business scenarios",
                  "持续探索前沿技术，将最新的云计算、AI和移动技术应用于实际业务场景"
                )}
              </p>
            </motion.article>
            <motion.article variants={cardVariants}>
              <motion.svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                variants={iconVariants}
              >
                <path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
                <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
              </motion.svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                {t("Customer-First", "客户为先")}
              </h3>
              <p className="text-indigo-200/65">
                {t(
                  "Deeply understand customer needs, provide tailored solutions, and ensure technology investments generate maximum value",
                  "深入理解客户需求，提供量身定制的解决方案，确保技术投资产生最大价值"
                )}
              </p>
            </motion.article>
            <motion.article variants={cardVariants}>
              <motion.svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                variants={iconVariants}
              >
                <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                <path
                  fillOpacity=".48"
                  d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
                />
              </motion.svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                {t("Technical Excellence", "技术卓越")}
              </h3>
              <p className="text-indigo-200/65">
                {t(
                  "Supported by a team of senior engineers, ensuring delivery of high-quality, scalable, and secure technical solutions",
                  "由资深工程师团队支持，确保交付高质量、可扩展且安全的技术解决方案"
                )}
              </p>
            </motion.article>
            <motion.article variants={cardVariants}>
              <motion.svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                variants={iconVariants}
              >
                <path
                  fillOpacity=".48"
                  d="m3.031 9.05-.593-.805 1.609-1.187.594.804a6.966 6.966 0 0 1 0 8.276l-.594.805-1.61-1.188.594-.805a4.966 4.966 0 0 0 0-5.9Z"
                />
                <path d="m7.456 6.676-.535-.845 1.69-1.07.534.844a11.944 11.944 0 0 1 0 12.789l-.535.845-1.69-1.071.536-.845a9.944 9.944 0 0 0 0-10.647Z" />
                <path
                  d="m11.888 4.35-.514-.858 1.717-1.027.513.858a16.9 16.9 0 0 1 2.4 8.677 16.9 16.9 0 0 1-2.4 8.676l-.513.859-1.717-1.028.514-.858A14.9 14.9 0 0 0 14.003 12a14.9 14.9 0 0 0-2.115-7.65Z"
                  opacity=".48"
                />
                <path d="m16.321 2-.5-.866 1.733-1 .5.866A22 22 0 0 1 21 12c0 3.852-1.017 7.636-2.948 10.97l-.502.865-1.73-1.003.501-.865A19.878 19.878 0 0 0 19 12a20 20 0 0 0-2.679-10Z" />
              </motion.svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                {t("Agile Delivery", "敏捷交付")}
              </h3>
              <p className="text-indigo-200/65">
                {t(
                  "Adopting agile development methodology, rapid iteration, timely response to changes, ensuring on-time project delivery",
                  "采用敏捷开发方法，快速迭代，及时响应变化，确保项目按时交付"
                )}
              </p>
            </motion.article>
            <motion.article variants={cardVariants}>
              <motion.svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                variants={iconVariants}
              >
                <path
                  fillOpacity=".48"
                  d="M12 8.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                />
                <path d="m7.454 2.891.891-.454L7.437.655l-.891.454a12 12 0 0 0 0 21.382l.89.454.91-1.781-.892-.455a10 10 0 0 1 0-17.818ZM17.456 1.11l-.891-.454-.909 1.782.891.454a10 10 0 0 1 0 17.819l-.89.454.908 1.781.89-.454a12 12 0 0 0 0-21.382Z" />
              </motion.svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                {t("Long-term Partnership", "长期合作")}
              </h3>
              <p className="text-indigo-200/65">
                {t(
                  "Not just a technology provider, but your long-term strategic partner, continuously supporting your business growth",
                  "不仅是技术供应商，更是您的长期战略合作伙伴，持续支持您的业务增长"
                )}
              </p>
            </motion.article>
            <motion.article variants={cardVariants}>
              <motion.svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                variants={iconVariants}
              >
                <path
                  fillOpacity=".48"
                  d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z"
                />
                <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
              </motion.svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                {t("Local Advantage", "本地优势")}
              </h3>
              <p className="text-indigo-200/65">
                {t(
                  "Rooted in Nanjing, serving nationwide, deeply understanding Chinese market and enterprise needs, providing localized support",
                  "扎根南京，服务全国，深刻理解中国市场和企业需求，提供本地化支持"
                )}
              </p>
            </motion.article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
