import Container from "@/components/Utils/Container";
import HeaderText from "@/components/Text/HeaderText";
import Separator from "@/components/Utils/Separator";
import ParagraphText from "@/components/Text/ParagraphText";
import DitheredBox from "@/components/AnimatedItems/DitheredBox";

export default function Home() {
  const skills = [
    "JavaScript, TypeScript",
    "Express.js, Node.js",
    "React.js, Next.js, Remix.js, React Meta-Frameworks",
    "Solidity, Hardhat, Foundry",
    "CSS/SCSS, Tailwind CSS, MUI",
  ];

  const interests = [
    "Full Stack Web Development",
    "Decentralized & Distributed Systems",
    "System Design",
    "Software Architecture",
    "User Experience",
    "User Interface Design",
  ];

  const hobbies = [
    {
      title: "Rock Climbing + Bouldering",
      content:
        "Passionate about bouldering and rock-climbing. I enjoy pushing the limits, improving my technique, and exploring outdoor climbing spots.",
    },
    {
      title: "Music Production",
      content:
        "Creating and mixing tracks using digital audio workstations like Ableton Live and Fl Studio.",
    },
    {
      title: "Geographic Information Systems",
      content:
        "Fascinated by mapping, spatial data analysis and using GIS tools like QGIS to interpret, visualize, and analyze geospatial data.",
    },
    {
      title: "Design",
      content:
        "Creating and experimenting with user-centric designs that are both visually appealing and functionally effective.",
    },
  ];
  return (
    <main className="h-full  bg-zinc-900  ">
      <DitheredBox width="100%" />
      <Container className="py-16">
        <section>
          <div className=" flex  items-end ">
            <div className="">
              <HeaderText
                className="font-bold "
                header="Anthony Chablov"
                headerLevel="h1"
              />
              <Separator />
              <ParagraphText size="xl" text="Full-stack developer" />
            </div>
          </div>
          <Separator />
          <div className="space-y-3 text-justify ">
            <ParagraphText
              text="I'm a Full-Stack Developer with experience in building modern web applications. I specialize in using TypeScript, React, and Next.js for the frontend, ensuring dynamic and responsive user interfaces. "
              className=""
            />
            <ParagraphText
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
                <ParagraphText text={skill} className="" />
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
                <ParagraphText text={interest} className="" />
              </li>
            ))}
          </ol>
        </section>
        {/* Interests */}
        <Separator size="medium" />
        <section>
          <HeaderText
            className="font-semibold text-zinc-300"
            header="Hobbies"
            headerLevel="h2"
          />
          <Separator />
          <div className="grid grid-cols-2 gap-6">
            {hobbies.map((box) => (
              <div
                key={box.title}
                className="bg-zinc-800 p-6 text-white rounded shadow space-y-3"
              >
                <HeaderText
                  className="font-bold "
                  header={box.title}
                  headerLevel="h4"
                />
                <ParagraphText text={box.content} className="" />
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
