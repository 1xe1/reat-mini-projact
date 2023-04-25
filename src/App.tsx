import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Header from "./componects/Header"
import Footer from "./componects/Footer"
import NotFound from "./componects/NotFound"

function App() {

  return (
    <>
    <BrowserRouter>
    <div className="header">
      <Header/>
    </div>
    <div className="contianer">
      <Routes>
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
