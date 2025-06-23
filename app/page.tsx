import Hero from "@/Components/Sections/Hero/Hero";
import About from "@/Components/Sections/About/About";
import Services from "@/Components/Sections/Services/Services";
import Events from "@/Components/Sections/Events/Events";
import Form from "@/Components/Sections/Form/Form";

export default function Home() {
  return (
      <main className="flex flex-col gap-12">
        <Hero />
        <About />
        <Services />
        <Events />
        <Form />
      </main>
  );
}
