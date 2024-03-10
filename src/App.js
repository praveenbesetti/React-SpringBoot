
import Form from './details';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Details  from './display';
function App() {
    return ( 
        <Routes>
            <Route path="/" element={<Form/>}></Route>
            <Route path="/details" element={<Details/>}></Route>
        </Routes>
       
    );
}

export default App;