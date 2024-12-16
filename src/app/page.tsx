import Container from "@/components/Utils/Container";
import HeaderText from "@/components/Text/HeaderText";
import Separator from "@/components/Utils/Separator";
import ParagraphText from "@/components/Text/ParagraphText";
import DitheredBanner from "@/components/Banners/DitheredBanner";
import DropDownIconButton from "@/components/Features/SelectIcon/DropDownIconButton";
import { skills, interests, hobbies, contactLinks } from "./profileData";

export default function Home() {
  return (
    <main className="h-full  bg-black ">
      <DitheredBanner width="100%" />
      <Container className="">
        <section>
          <Separator size="extraLarge" />
          <DropDownIconButton />
          <Separator size="medium" />
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
              <li key={index} className="flex items-center space-x-2 group">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 
                    flex items-center space-x-4 
                    hover:text-zinc-50 
                    hover:underline
                    ease-in-out transition-transform duration-300 transform hover:scale-110"
                >
                  <span className="text-xl ">{link.icon}</span>
                  <ParagraphText text={link.text} />
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
