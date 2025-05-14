import Image, { type StaticImageData } from "next/image";

interface ScreenGrabsProps {
  images: string[] | StaticImageData[];
}

export default function ScreenGrabs({ images }: ScreenGrabsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, key) => {
        return (
          <div
            className="w-full relative flex rounded-lg"
            key={`ScreenGrab: ${key}`}
          >
            <Image
              src={image}
              className="w-full rounded-lg"
              alt={`Screen Grab: ${key}`}
              width={768}
              height={432}
            />
          </div>
        );
      })}
    </div>
  );
}
