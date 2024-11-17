"use client";

import React from "react";
import Container from "./Container";
import { useTranslations } from "next-intl";
import Vimeo from "@u-wave/react-vimeo";

const WeddingVideoSection = () => {
  const t = useTranslations("wedding");
  const videos = [
    {
      id: 1,
      category: t("category"),
      name: "Markéta & Míra",
      src: "https://player.vimeo.com/video/1027602886?h=326f2b4427",
    },
    {
      id: 2,
      category: t("category"),
      name: "Václav & Terezie",
      src: "https://player.vimeo.com/video/1027602736?h=34355bb6ea",
    },
    {
      id: 3,
      category: t("category"),
      name: "Martin & Veronika",
      src: "https://player.vimeo.com/video/1027602549",
    },
    {
      id: 4,
      category: t("category"),
      name: "Kamila & Filip",
      src: "https://player.vimeo.com/video/1027602244?h=73da272c82",
    },
    {
      id: 5,
      category: t("category"),
      name: "Daniel & Lucie",
      src: "https://player.vimeo.com/video/1027602104?h=d782f7be34",
    },
    {
      id: 6,
      category: t("category"),
      name: "Aneta & Viktor",
      src: "https://player.vimeo.com/video/1027601969?h=a840050a3a",
    },
  ];

  return (
    <section className="px-0 md:px-4 lg:px-8 py-10">
      <Container className="mx-auto">
        <div className="flex flex-col gap-4 md:gap-8 lg:gap-16">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`flex items-start gap-2 md:gap-4 ${
                index % 2 === 0
                  ? "flex-col lg:flex-row"
                  : "lg:flex-row-reverse text-right flex-col"
              }`}
            >
              <div className="w-full lg:w-1/4">
                <span className="text-sm uppercase font-normal text-gray-500 block">
                  {video.category}
                </span>
                <h3 className="text-4xl font-normal">{video.name}</h3>
              </div>
              <Vimeo
                video={video.src}
                playsInline={true}
                responsive={true}
                className="w-full lg:w-3/4 h-full rounded-md md:rounded-xl lg:rounded-3xl overflow-hidden"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WeddingVideoSection;
