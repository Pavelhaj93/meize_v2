import Link from "next/link";

export default function ServiceTile({ id, title, subtitle, link }) {
  return (
    <aside className="flex items-start gap-2">
      <div className="text-lg leading-none pt-0.5 tabular-nums">{id}</div>
      <div className="flex flex-col gap-2">
        <header>
          <h3 className="uppercase text-2xl leading-none font-bold tracking-wide max-w-[14ch]">
            {title}
          </h3>
        </header>
        <p className="uppercase text-xs text-black/60 max-w-[25ch] leading-6">
          {subtitle}
        </p>
        {link && (
          <div>
            <Link
              href={link.href}
              target="_blank"
              rel="noreferrer nofollow"
              className="uppercase text-xs hover:underline"
            >
              {link.title}
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}
