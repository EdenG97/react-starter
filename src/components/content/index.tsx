import ContentActivity from "./components/ContentActivity";
import ContentCard from "./components/ContentCard";
import ContentNews from "./components/ContentNews";
import ContentOnlineList from "./components/ContentOnlineList";

function Content() {
  return (
    <main className="max-w-primary px-primary m-auto mb-24">
      <ContentCard />
      <div className="h-4"></div>
      <ContentActivity />
      <div className="h-4"></div>
      <ContentNews />
      <div className="h-4"></div>
      <ContentOnlineList />
      <div className="h-4"></div>
    </main>
  );
}

export default Content;
