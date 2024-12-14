import Container from "@/components/Utils/Container";
import HeaderText from "@/components/Text/HeaderText";
import Separator from "@/components/Utils/Separator";
import ParagraphText from "@/components/Text/ParagraphText";
import DitheredBox from "@/components/AnimatedItems/DitheredBox";

export default function Home() {
  return (
    <main className="h-screen  bg-zinc-900 py-36 ">
      <Container>
        <section className=" flex  items-end ">
          <div className="w-1/2">
            <HeaderText
              className="font-bold"
              header="Anthony Chablov "
              headerLevel="h1"
            />
            <Separator py="py-3" />
            <HeaderText
              className="font-semibold text-zinc-400"
              header="Full-Stack Developer "
              headerLevel="h2"
            />
          </div>
        </section>

        <Separator py=" py-6 " />
        <section className="space-y-6 text-justify">
          <ParagraphText
            size="xl"
            text="I'm a Full-Stack Developer with experience in building modern web applications. I specialize in using TypeScript, React, and Next.js for the frontend, ensuring dynamic and responsive user interfaces. "
            className=""
          />
          <ParagraphText
            size="xl"
            text="On the backend, I leverage Express.js and Node.js to build scalable and efficient APIs, while also working with MongoDB for flexible data storage solutions. "
            className=""
          />
        </section>
        <Separator py=" py-6 " />
        <section></section>
      </Container>
    </main>
  );
}
