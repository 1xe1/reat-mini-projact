import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Header from "./componects/Header"
import Footer from "./componects/Footer"
import NotFound from "./componects/NotFound"
import Home from "./componects/Home"
import MovieDetail from "./componects/MovieDetail"

function App() {

  return (
    <>
    <BrowserRouter>
    <div className="header">
      <Header/>
    </div>
    <div className="container">
      <Routes>
        <Route path="*" element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieDetail/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
    <div className="footer">
      <Footer/>
    </div>
    </BrowserRouter>
  
    </>
  )
}

export default App
