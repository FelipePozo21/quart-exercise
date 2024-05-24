import { Nav } from "./Components/Nav/Nav";
import { ForArtist } from "./Components/ForArtist/ForArtist";
import { TwoFormats } from "./Components/TwoFormats/TwoFormats";
import { Rest } from "./Components/rest/Rest";
import { YouQrates } from "./Components/you-qrates/YouQrates";
import { NewProyect } from "./Components/NewProyect/NewProyect";
import { ToolkitDiv } from "./Components/ToolkitDiv/ToolkitDiv";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Nav />
        <ForArtist />
        <TwoFormats />
        <Rest />
        <YouQrates />
        <NewProyect />
        <ToolkitDiv />
      </div>
    </>
  );
}

export default App;
