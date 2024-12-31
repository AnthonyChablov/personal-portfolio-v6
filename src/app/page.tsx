"use client";
import Container from "@/components/Layout/Container";
import HeaderText from "@/components/Text/HeaderText";
import Separator from "@/components/Layout/Separator";
import ParagraphText from "@/components/Text/ParagraphText";
import { skills, interests, hobbies, contactLinks } from "./_data/profileData";
import SelectCover from "@/components/Features/SelectCover/SelectCover";
import SelectIcon from "@/components/Features/SelectEmoji/SelectEmoji";
import Footer from "@/components/Layout/Footer";
import useAsciiArt from "@/hooks/useAsciiArt";
import useLenis from "@/hooks/useLenis";
import { asciiArt } from "./_data/asciiArt";

export default function Home() {
  useAsciiArt(asciiArt);
  useLenis()
  return (
    <main className="h-full bg-black">
      <SelectCover />
      <Container className="">
        <section>
          <Separator size="extraLarge" />
          <SelectIcon />
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
          <div className="space-y-3 text-left md:text-justify ">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hobbies.map((box) => (
              <div
                key={box.title}
                className="bg-zinc-900 p-6 text-white rounded-lg space-y-2 shadow-md"
              >
                <HeaderText
                  className="font-bold "
                  header={box.title}
                  headerLevel="h4"
                />
                <ParagraphText size="lg" text={box.content} className="" />
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
              <li
                key={index}
                className="flex items-center space-x-2 group 
                  "
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 
                    flex items-center space-x-4 
                    hover:text-zinc-50 
                    hover:underline
                   "
                >
                  <span className="text-xl ">{link.icon}</span>
                  <ParagraphText text={link.text} />
                </a>
              </li>
            ))}
          </ul>
        </section>
        <Separator size="large" />
        <Footer />
        <Separator size="small" />
      </Container>
    </main>
  );
}
