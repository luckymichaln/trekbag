import { BackgroundHeading } from "./components/BackgroundHeading/BackgroundHeading";
import { Header } from "./components/Header/Header";
import { ItemsList } from "./components/ItemsList/ItemsList";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { ItemsContextProvider } from "./contexts/ItemsContextProvider";

function App() {
  return (
    <>
      <BackgroundHeading />

      <ItemsContextProvider>
        <Header />
        <ItemsList />
        <Sidebar />
      </ItemsContextProvider>
    </>
  );
}

export default App;
