import { useEffect, useState } from 'react';
import './App.css';
import { Button } from '@progress/kendo-react-buttons';
import { ComboBox } from '@progress/kendo-react-dropdowns';
import '@progress/kendo-theme-default/dist/all.css';

function App() {
    function Samplefun(e) {
        e.preventDefault();
            console.log('Button clicked!');
        fetch('https://uat.depot.mymedlog.com/identityserver/api/Registration/getGeneralCode?reference=REGISTRATIONTYPE', { // - Working one
        //fetch('https://api.identity.msc.com/cwp/AppointmentRead/api/v1/master/getGeneralCode?reference=REGISTRATIONTYPE', {
                method: "GET",
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': 'https://localhost:3000/',
                    'Access-Control-Allow-Credentials': 'true',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }).then(response => response.json())
                .then(json => console.log(json))
                .catch(e => console.log(e));
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

const MyComponent = () => {
    const [comboBoxData, setComboBoxData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://uat.depot.mymedlog.com/identityserver/api/Registration/getGeneralCode?reference=REGISTRATIONTYPE');
                //const response = await fetch('https://localhost:44397/api/v1/master/getGeneralCode?reference=USERSTATUS&mode=P');
                //const response = await fetch('http://localhost:38897/api/v1/assets/2385');
                //const response = await fetch('https://restcountries.com/v3.1/all');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setComboBoxData(data); // Update state with fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        //fetchData(); // Call the async function
    }, []); // Empty dependency array means this effect runs only once, on component mount

    return (
        <ComboBox
            data={comboBoxData}
            textField="name" // Replace 'name' with the field name from your API response
            valueField="id" // Replace 'id' with the field name from your API response
        />
    );
};

export default { App, MyComponent };
