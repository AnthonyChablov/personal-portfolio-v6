import Container from "@/components/Utils/Container";
import HeaderText from "@/components/Text/HeaderText";
import Separator from "@/components/Utils/Separator";
import ParagraphText from "@/components/Text/ParagraphText";
import { Button } from "@/components/ui/button";
import DitheredBox from "@/components/AnimatedItems/DitheredBox";
import Divider from "@/components/Utils/Divider";

export default function Home() {
  return (
    <main className="h-screen bg-zinc-900 py-24 ">
      <Container>
        <section className=" flex items-center space-x-10">
          <DitheredBox
            className=""
            width="100px"
            height="100px"
            animationDuration="5s"
          />
          <div className="">
            <HeaderText
              className="font-semibold "
              header="Hi, My Name Is Anthony"
              headerLevel="h1"
            />
            <Separator py="py-1" />
            <HeaderText
              className="font-light text-zinc-400"
              header="Full-Stack Developer "
              headerLevel="h2"
            />
          </div>
        </section>
        <Separator py="py-10" />
        <ParagraphText size="xl" text="Hello" className="" />
      </Container>
    </main>
  );
}
