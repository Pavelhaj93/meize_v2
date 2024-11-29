interface CarouselDotsProps {
  items: any[];
  onClick: (key: number) => void;
  active: number;
  className?: string;
}

export default function CarouselDots({
  items,
  onClick,
  active,
  className = "",
  ...rest
}: CarouselDotsProps) {
  return (
    <nav
      className={`flex items-center justify-center gap-6 ${className}`}
      {...rest}
    >
      {items.map((item, key) => {
        return (
          <button
            onClick={() => onClick(key)}
            key={`TestimonialNav: ${key}`}
            className={`text-0 inline-flex w-4 h-4 rounded-full items-center justify-center leading-none border border-white ${
              active === key ? "bg-white" : "bg-transparent hover:bg-white/50"
            } transition-colors duration-300`}
          >
            {key + 1}
          </button>
        );
      })}
    </nav>
  );
}
