import Container from "@/components/Utils/Container";
import HeaderText from "@/components/Text/HeaderText";
import Separator from "@/components/Utils/Separator";
import ParagraphText from "@/components/Text/ParagraphText";
import DitheredBox from "@/components/AnimatedBanners/DitheredBanner";

const skills = [
  "JavaScript, TypeScript",
  "Express.js, Node.js",
  "React.js, Next.js, Remix.js, React Meta-Frameworks",
  "Solidity, Hardhat, Foundry",
  "Leaflet.js, D3.js",
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
const contactLinks = [
  {
    href: "https://www.linkedin.com/in/your-profile",
    text: "LinkedIn: linkedin.com/in/your-profile",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4h16M4 4v16m16-16v16"
        />
      </svg>
    ),
  },
  {
    href: "https://github.com/your-username",
    text: "GitHub: github.com/your-username",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-12h-2v4H9l3 3 3-3h-2z"
        />
      </svg>
    ),
  },
  {
    href: "https://leetcode.com/your-username",
    text: "LeetCode: leetcode.com/your-username",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="h-full  bg-zinc-900 ">
      <DitheredBox width="100%" />
      <Container>
        <section>
          <Separator size="large" />
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
        <section>
          <Separator size="medium" />
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
        <section>
          <Separator size="medium" />
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
        {/* Hobbies */}
        <section>
          <Separator size="medium" />
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
        {/* Contact Info */}
        <section>
          <Separator size="medium" />
          <HeaderText
            className="font-semibold text-zinc-300"
            header="Contact Me"
            headerLevel="h2"
          />
          <Separator />
          <ul className="space-y-4 mt-4">
            {contactLinks.map((link, index) => (
              <li key={index} className="flex items-center space-x-2">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <span className="text-xl">{link.icon}</span>
                  <ParagraphText text={link.text} className="" />
                </a>
              </li>
            ))}
          </ul>
        </section>
        <Separator size="large" />
      </Container>
    </main>
  );
}
