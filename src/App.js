import Joke from "./components/Joke"
function App() {
  const callApi = () => {
    console.log("Button clicked!"); // For now, test with console log
  };
  return (
    <div className="App">
      <h1>Generate a Random Joke</h1>
      <Joke/>
      <img
  src="https://media.giphy.com/media/3o6ZsXZ2N1rPpWtdgk/giphy.gif"
  alt="funny gif"
  width="250"
/>


    </div>
  );
}
console.log("App component rendered");

export default App;
