import "./App.scss"
import Ad from "./Components/Ad/Ad";
import BestPrice from "./Components/BestPrice/BestPrice";
import Footer from "./Components/Footer/Footer";
import FootFix from "./Components/FootFix/FootFix";
import Header from "./Components/Header/Header";
import Table from "./Components/Table/Table";
import Timer from "./Components/Timer/Timer";
function App() {
  return (
    <div className="App">
      <Header />
      <BestPrice />
      <Table />
      <Ad />
      <Footer />
      <FootFix />
    </div>
  );
}

export default App;
