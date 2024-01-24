import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
    // apiKey = process.env.NEWS_API_KEY;
    const apiKey = '';
    const [bgColor, setBgColor] = useState('light');
    const [textColor, setTextColor] = useState('dark');
    const [themeText, setThemeText] = useState('Dark Mode');
    const [progress, setProgress] = useState(0);

    const toggleTheme = () => {
        if (bgColor === 'light') {
            setBgColor('dark');
            setTextColor('light');
            setThemeText('Light Mode');
            document.body.style.backgroundColor = 'black';
            console.log('Invoked dark mode');
        } else {
            setBgColor('light');
            setTextColor('dark');
            setThemeText('Dark Mode');
            document.body.style.backgroundColor = 'white';
            console.log('Invoked light mode');
        }
    }
    const progressBar = (progres) => {
        setProgress(progres);
    }

    return (
        <Router>
            <NavBar bgColor={bgColor} textColor={textColor} toggleTheme={toggleTheme} themeText={themeText} />
            <LoadingBar
                color='#f11946'
                height={3}
                progress={progress}
                onLoaderFinished={() => progressBar(0)}
            />
            <Routes>
                <Route exact path="/Contact" element={<Contact textColor={textColor} />} />
                <Route exact path="/About" element={<About textColor={textColor} bgColor={bgColor} />} />
                <Route exact path="/" element={<News apiKey={apiKey} setProgress={progressBar} key='general' pageSize={5} category='general' country='in' textColor={textColor} bgColor={bgColor} />} />
                <Route exact path="/health" element={<News setProgress={progressBar} apiKey={apiKey} key="health" pageSize={5} category='health' country='in' textColor={textColor} bgColor={bgColor} />} />
                <Route exact path="/business" element={<News setProgress={progressBar} apiKey={apiKey} key="business" pageSize={5} category='business' country='in' textColor={textColor} bgColor={bgColor} />} />
                <Route exact path="/entertainment" element={<News setProgress={progressBar} apiKey={apiKey} key="entertainment" pageSize={5} category='entertainment' country='in' textColor={textColor} bgColor={bgColor} />} />
                <Route exact path="/science" element={<News setProgress={progressBar} apiKey={apiKey} key="science" pageSize={5} category='science' country='in' textColor={textColor} bgColor={bgColor} />} />
                <Route exact path="/sports" element={<News setProgress={progressBar} apiKey={apiKey} key="sports" pageSize={5} category='sports' country='in' textColor={textColor} bgColor={bgColor} />} />
                <Route exact path="/technology" element={<News setProgress={progressBar} apiKey={apiKey} key="technology" pageSize={5} category='technology' country='in' textColor={textColor} bgColor={bgColor} />} />
            </Routes>
        </Router>
    );
}

export default App;