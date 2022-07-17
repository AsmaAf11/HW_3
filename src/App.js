
import GitCrud from './component/GitCrud.js'
import Home from './component/Home.js'
import './App.css';
import Create from './component/Create.js'
import Update from './component/Update.js'
import Login from './component/Login.js'



import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
<Home></Home>
     <Router>
       <Routes>
    
         <Route path="/GitCrud" element={ <GitCrud/>}></Route>
         <Route path="Create" element={ <Create/>}></Route>
         <Route path="Update" element={ <Update/>}></Route>
         <Route path="/Home" element={ <Home/>}></Route>
         <Route path="/Login" element={ <Login/>}></Route>

       

       </Routes>
     </Router>

     <hr></hr>
    </div>
  );
}

export default App;
