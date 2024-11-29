import Container from "@/app/_components/Container";
import WeddingVideoSection from "@/app/_components/WeddingVideoSection";
import { useTranslations } from "next-intl";

export default function WeddingVideos() {
  const t = useTranslations("wedding");

  return (
    <main>
      <Container className="text-center relative py-4 md:py-8 lg:py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-2 md:mb-4 lg:mb-8">
          {t("title1")}
        </h1>
        <p className="text-md md:text-lg lg:text-xl text-gray-600 mb-8">
          {t("description1")}
        </p>
        <p className="text-md md:text-lg lg:text-xl text-gray-600 mb-4">
          {t("description2")}
        </p>
      </Container>

      <Container className="bg-white text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 lg:mb-8">
          {t("title2")}
        </h2>
        <p className="text-md md:text-lg lg:text-xl text-gray-600 mb-8">
          {t("description3")}
        </p>
        <p className="text-md md:text-lg lg:text-xl text-gray-600">
          {t("description4")}
        </p>
      </Container>

      <WeddingVideoSection />
    </main>
  );
}
