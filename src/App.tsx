import { BackgroundHeading } from "./components/BackgroundHeading/BackgroundHeading";
import { Header } from "./components/Header/Header";
import { ItemsList } from "./components/ItemsList/ItemsList";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemsList />
        <Sidebar />
      </main>
    </>
  );
}

export default App;
