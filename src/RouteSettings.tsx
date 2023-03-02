import Home from "pages/Home";
import Search from "pages/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const RouteSettings = () => {
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<Search/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RouteSettings;