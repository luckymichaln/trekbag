import { BackgroundHeading } from "./components/BackgroundHeading/BackgroundHeading";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemList } from "./components/ItemList/ItemList";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}

export default App;
