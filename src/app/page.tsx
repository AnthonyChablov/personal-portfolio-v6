import Container from "@/components/Utils/Container";
import HeaderText from "@/components/Text/HeaderText";
import Separator from "@/components/Utils/Separator";
import ParagraphText from "@/components/Text/ParagraphText";

export default function Home() {
  return (
    <main className="h-screen bg-zinc-900 py-24 font-light ">
      <Container>
        <HeaderText
          className=""
          header="Hi, My Name Is Anthony"
          headerLevel="h1"
        />
        <Separator py="py-3" />
        <HeaderText
          className=""
          header="Full-Stack Developer "
          headerLevel="h2"
        />
        <ParagraphText />
      </Container>
    </main>
  );
}
