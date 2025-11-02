import "./App.css";
import Log from "./Log/Log";
import Book from "./Book/Book";
import bg from "./assets/wallpapers/wallpaper3.jpg";
import Intro from "./Intro/Intro";
import Blocker from "./Blocker/Blocker";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Blocker/>

      <Intro />
      <Book />
      <Log />
    </div>
  );
}

export default App;
