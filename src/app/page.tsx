import Container from "@/components/Utils/Container";
import HeaderText from "@/components/Text/HeaderText";
import Separator from "@/components/Utils/Separator";
import ParagraphText from "@/components/Text/ParagraphText";
import Divider from "@/components/Utils/Divider";

export default function Home() {
  return (
    <main className="h-screen bg-zinc-900 py-24 ">
      <Container>
        <HeaderText
          className="font-semibold "
          header="Hi, My Name Is Anthony"
          headerLevel="h1"
        />
        <Separator py="py-1" />
        <HeaderText
          className="font-light "
          header="Full-Stack Developer "
          headerLevel="h2"
        />

        <Divider />

        <ParagraphText text="Hello" />
      </Container>
    </main>
  );
}
