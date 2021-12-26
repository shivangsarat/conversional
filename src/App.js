import {useEffect, useState} from 'react';
import './App.css';
import $ from 'jquery';
import { RennderComponents } from './components/RenderComponent';

function App() {
  const [componentData, setComponentData] = useState({})
  useEffect(() => {
    $.ajax({
      url: '/data2.json',
      dataType:'json',
      cache: false,
      success: (data) => {
        setComponentData(data)
      },
      error: (xhr, status, err) => {
        console.error(err)
      }
    })
  },[])
  return (
    <div className="App">
      {componentData && Object.keys(componentData).length > 0 && Object.getPrototypeOf(componentData) === Object.prototype && RennderComponents(componentData)}
    </div>
  );
}

export default App;
