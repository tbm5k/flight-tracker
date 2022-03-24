import InfoBar from "./components/InfoBar";
import Map from "./components/Map";

function App() {

  const componentStyle = {
    height : '100vh',
    // backgroundColor : 'blue'
  }

  return (
    <div className="App" style={componentStyle}>
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
