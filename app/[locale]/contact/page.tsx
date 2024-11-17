import Container from "@/app/_components/Container";
import FormContact from "@/app/_components/FormContact";
import Nav from "@/app/_components/Nav";
import PageTitle from "@/app/_components/PageTitle";
import { contacts } from "@/helpers/contacts";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <main className="bg-black dark min-h-screen">
      <Nav theme="dark" />
      <Container className="mt-20 xl:mt-40">
        <header>
          <PageTitle title={t("headline")} />
        </header>
      </Container>

      <Container className="md:pt-20 flex flex-col xl:gap-28 gap-5">
        <section className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-0 max-w-[1000px] mx-auto">
          <header className="flex-1">
            <h2 className="font-medium tracking-tighter text-3xl lg:text-4xl xl:text-5xl dark:text-white">
              {t("general")}
            </h2>
          </header>
          <div className="flex-1 flex flex-col items-center lg:items-start gap-2 lg:gap-4 lg:pt-6">
            {Object.keys(contacts).map((type, key) => {
              return (
                <div key={`Contacts: ${key}`}>
                  <div className="inline-flex text-2xl dark:text-white mr-2">
                    {t(`${type}`)}:
                  </div>
                  <a
                    href={contacts[type].href}
                    className="inline-flex text-2xl text-black dark:text-white hover:text-white/50 transition-colors border-b border-transparent"
                  >
                    {contacts[type].title}
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        <section className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-0 max-w-[1000px] mx-auto">
          <header className="flex-1">
            <h3 className="font-medium tracking-tighter text-3xl lg:text-4xl xl:text-5xl dark:text-white">
              {t("message")}
            </h3>
          </header>
          <div className="flex-1 w-full max-w-[500px] lg:max-w-none">
            <FormContact />
          </div>
        </section>
      </Container>
    </main>
  );
}
