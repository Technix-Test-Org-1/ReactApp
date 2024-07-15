import './App.css';
import { Button } from '@progress/kendo-react-buttons';
import { ComboBox } from '@progress/kendo-react-dropdowns';
import '@progress/kendo-theme-default/dist/all.css';

function App() {
    function Samplefun(e) {
        e.preventDefault();
        alert("Helloooo");
    }
  return (
    <div className="App">
          <h1> Hello World!</h1>
          <Button onClick={Samplefun}> Hello</Button>
          <ComboBox
              className="Appbtn"
              data={['ABC', 'DEF', 'GHI']}
              placeholder="Select an option"
          />
    </div>
  );
}

export default App;
