import "./App.css";
import Countries from "./Components/Countries/Countries";

function App() {
  return (
    <>
      <h1 className="w-44 text-center text-blue-500 text-4xl font-semibold border-b-2 border-blue-700 p-2 mx-auto">
        Countries
      </h1>
      <section>
        <Countries></Countries>
      </section>
    </>
  );
}

export default App;
