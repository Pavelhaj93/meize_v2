import Nav from "@/app/_components/Navbar";
import NoScroll from "@/app/_components/NoScroll";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black dark">
      <Nav />
      <NoScroll />
      <main>{children}</main>
    </div>
  );
}
