import './index.css'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Pricing from './pages/Pricing.jsx'
import Tokens from './pages/Tokens.jsx'

function App() {
    return (
        <div className="flex align-center w-full h-auto justify-center items-center bg-gray-950">

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/contact-us" element={<ContactUs/>}/>
                <Route path="/pricing" element={<Pricing/>}/>
                <Route path="/tokens" element={<Tokens/>}/>
            </Routes>
        </div>
    )
};

export default App;