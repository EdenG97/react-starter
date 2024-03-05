import ContentActivity from "./components/ContentActivity";
import ContentCard from "./components/ContentCard";
import ContentNews from "./components/ContentNews";
import ContentOnlineList from "./components/ContentOnlineList";

function Content() {
  return (
    <main className="max-w-primary px-primary m-auto mb-24">
      <ContentCard />
      <div className="h-spacing"></div>
      <ContentActivity />
      <div className="h-spacing"></div>
      <ContentNews />
      <div className="h-spacing"></div>
      <ContentOnlineList />
      <div className="h-spacing"></div>
    </main>
  );
}

export default Content;
