import React from 'react';
import './App.css';
import Pertambahan from './component/pertambahan'
import SubmitData from './component/formTampil'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='container mb-3'>
      <Pertambahan/>
      <SubmitData/>
    </div>
  );
}

export default App;
