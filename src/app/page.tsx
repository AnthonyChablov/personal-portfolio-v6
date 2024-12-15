import Container from "@/components/Utils/Container";
import HeaderText from "@/components/Text/HeaderText";
import Separator from "@/components/Utils/Separator";
import ParagraphText from "@/components/Text/ParagraphText";

export default function Home() {
  const skills = [
    "TypeScript",
    "JavaScript",
    "React.js",
    "Express.js",
    "Node.js",
    "Next.js, Remix.js, React Meta-Frameworks",
    "Solidity, Hardhat, Foundry",
    "Tailwind",
    "CSS/SCSS",
    "HTML5",
  ];

  const interests = [
    "Full Stack Web Development",
    "Decentralized & Distributed Systems",
    "System Design",
    "Software Architecture",
    "User Experience",
    "User Interface Design",
  ];
  return (
    <main className="h-full  bg-zinc-900 py-36 ">
      <Container>
        <section>
          <div className=" flex  items-end ">
            <div className="w-1/2">
              <HeaderText
                className="font-bold"
                header="Anthony Chablov"
                headerLevel="h1"
              />
              <Separator />
              <ParagraphText
                size="3xl"
                text="Full-stack developer"
                className="font-light text-zinc-400"
              />
            </div>
          </div>
          <Separator />
          <div className="space-y-3 text-justify">
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
          </div>
        </section>
        {/* Skills */}
        <Separator size="medium" />
        <section>
          <HeaderText
            className="font-semibold text-zinc-300"
            header="My Skills"
            headerLevel="h2"
          />
          <Separator />
          <ol className="space-y-4 list-inside list-disc text-white">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 mt-1">&#8226;</span>
                <ParagraphText size="xl" text={skill} className="" />
              </li>
            ))}
          </ol>
        </section>
        {/* Interests */}
        <Separator size="medium" />
        <section>
          <HeaderText
            className="font-semibold text-zinc-300"
            header="My Interests"
            headerLevel="h2"
          />
          <Separator />
          <ol className="space-y-4 list-inside list-disc text-white">
            {interests.map((interest, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 mt-1">&#8226;</span>
                <ParagraphText size="xl" text={interest} className="" />
              </li>
            ))}
          </ol>
        </section>
      </Container>
    </main>
  );
}
