import "./App.css";
import Header from "./Header";
import Content from "./Content";

function App() {
  return (
    <div className="App">
      <Header
        name={"Sean Behan"}
        subtitle={"Developer and Student"}
        links={[
          { title: "Twitter", url: "https://twitter.com/seanwbehan" },
          { title: "GitHub", url: "https://github.com/codebam" },
        ]}
      />
      <Content />
    </div>
  );
}

export default App;
