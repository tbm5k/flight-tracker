import Map from "./components/Map";

function App() {

  const componentStyle = {
    height : '100vh',
    // backgroundColor : 'blue'
  }

  return (
    <div className="App" style={componentStyle}>
      <Map/>
    </div>
  );
}

export default App;
