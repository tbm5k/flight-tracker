import InfoBar from "./components/InfoBar";

function App() {

  const componentStyle = {
    height : '100vh',
    // backgroundColor : 'blue'
  }

  return (
    <div className="App" style={componentStyle}>
      <InfoBar />
    </div>
  );
}

export default App;
