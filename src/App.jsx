import { Nav } from "./Components/Nav/Nav";
import { ForArtist } from "./Components/ForArtist/ForArtist";
import { TwoFormats } from "./Components/TwoFormats/TwoFormats";
import { Rest } from "./Components/rest/Rest";
import { YouQrates } from "./Components/you-qrates/YouQrates";

function App() {
  return (
    <>
      <Nav />
      <ForArtist />
      <TwoFormats />
      <Rest />
      <YouQrates />
    </>
  );
}

export default App;
