import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import {UserContext} from './context/UserContext'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
// import Footer from './layout/Footer';
import Header from './layout/Header';
import FirebaseConfig from './config/FirebaseConfig';
//init firebase
firebase.initializeApp(FirebaseConfig)

function App() {

  const [user,setUser] = useState(null)

  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user,setUser}}>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/signin" element={<Signin/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="*" element={<NotFound/>}/>
        </Routes>
        {/* <Footer/> */}
      </UserContext.Provider>
    </Router>
  );
}

export default App;
