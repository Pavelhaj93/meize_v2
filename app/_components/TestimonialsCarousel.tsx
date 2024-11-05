import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

interface Testimonial {
  body: string;
  name: string;
  company: string;
}

interface TestimonialsCarouselProps {
  className?: string;
  [key: string]: any;
}

export default function TestimonialsCarousel({
  className = "",
  ...rest
}: TestimonialsCarouselProps) {
  const t = useTranslations();

  const [active, setActive] = useState<number>(0);

  const handleChangeSlide = (num: number) => setActive(num);

  return (
    <section className={`flex flex-col gap-10 ${className}`}>
      <div className="flex flex-col gap-6">
        <p className="max-w-[65ch] mx-auto leading-[1.7]">
          {t("testimonials." + active + ".body")}
        </p>

        <div>
          <p className="uppercase font-extrabold text-lg tracking-tighter md:text-xl">
            {t("testimonials." + active + ".name")}
          </p>
          <p className="uppercase text-sm text-black/70">
            {t("testimonials." + active + ".company")}
          </p>
        </div>
      </div>
      <nav className="flex items-center justify-center gap-6">
        {JSON.parse(t("testimonials", { returnObjects: true })).map(
          (testimonial: Testimonial, key: number) => {
            return (
              <button
                onClick={() => handleChangeSlide(key)}
                key={`Testimonial: ${key}`}
                className={`inline-flex w-12 rounded-full aspect-square bg-transparent items-center justify-center leading-none border ${
                  active === key
                    ? "border-primary text-primary"
                    : "border-black/50 text-black/50 mouse-hover:border-primary mouse-hover:text-primary"
                } transition-colors duration-300`}
              >
                {key + 1}
              </button>
            );
          }
        )}
      </nav>
    </section>
  );
}
