import Card from './Card.js'

function App() {
  const log = () => { alert("hello") }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={log}>Click me!</button>
      <div className="Main">
        <Card />
      </div>
    </div>
  );
}

export default App;
