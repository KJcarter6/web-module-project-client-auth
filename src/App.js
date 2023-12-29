import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes, useNavigate} from 'react-router-dom';


function App() {
  const navigate = useNavigate();

  return (
    

    <div className="App">
      <header>
        <h2>Friends Database</h2>
        <Link className='link' to="/login">Login</Link>
        <Link className='link' to="/friends">Friends List</Link>
        <Link className='link' to="/friends/add">Add Friends</Link>
        <Link className='link' to="/logout">Logout</Link>
      </header>
      
      {



      }
      <Routes>
        <Route path= '/login' element={<Login push={navigate} />}/>
        <Route path= '/' element= {<Login push={navigate} />}/>
        {/* { PrivateRoute( { component: <Friends />, path: '/friends'} ) } */}
        <Route path='/friends' element={<PrivateRoute><Friends/></PrivateRoute> }/>
        <Route path= '/logout' element= {<Logout/>}/>
        <Route path= '/friends/add' element= {<AddFriend/>}/>
      </Routes>
    </div>
    
  );
}

export default App;