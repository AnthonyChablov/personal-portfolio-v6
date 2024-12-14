import Container from "@/components/Utils/Container";
import HeaderText from "@/components/Text/HeaderText";
import Separator from "@/components/Utils/Separator";
import ParagraphText from "@/components/Text/ParagraphText";
import DitheredBox from "@/components/AnimatedItems/DitheredBox";

export default function Home() {
  return (
    <main className="h-screen bg-zinc-900 py-24 ">
      <Container>
        <section className=" flex items-end space-x-14">
          <DitheredBox
            className=""
            width="190px"
            height="190px"
            animationDuration="5s"
          />
          <div className="">
            <HeaderText
              className="font-semibold "
              header="Hello, "
              headerLevel="h1"
            />
            <Separator py="py-2" />
            <HeaderText
              className="font-semibold "
              header="I'm Anthony."
              headerLevel="h1"
            />
            <Separator py="py-2" />
            <HeaderText
              className="font-light text-zinc-400"
              header="Full-Stack Developer "
              headerLevel="h2"
            />
          </div>
        </section>
        <Separator py=" py-11" />
        <section className="w-10/12">
          <ParagraphText
            size="xl"
            text="Hello! My name is Anthony Chablov."
            className=""
          />
          <Separator py=" py-2" />
          <ParagraphText
            size="xl"
            text="I'm a Full-Stack Developer with experience in building modern web applications. I specialize in using TypeScript, React, and Next.js for the frontend, ensuring dynamic and responsive user interfaces. "
            className=""
          />
          <Separator py=" py-2" />
          <ParagraphText
            size="xl"
            text="On the backend, I leverage Express.js and Node.js to build scalable and efficient APIs, while also working with MongoDB for flexible data storage solutions. My expertise extends to blockchain development, where I work with Solidity to write smart contracts and use tools like Hardhat and Foundry for Ethereum development. I'm always excited to explore new technologies and continuously improve my skills to build high-quality, secure, and decentralized applications."
            className=""
          />
        </section>
      </Container>
    </main>
  );
}
