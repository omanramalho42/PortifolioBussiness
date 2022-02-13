import React, { useState, useEffect } from "react";

import { 
    Article, 
    Brand,
    CTA,
    Feature,
    Navbar
} from "./components/index";

import { 
    Blog,
    Features,
    Footer,
    Possibility,
    WhatGPT3,
    Header,
} from "./containers";

import './App.css';

// import { ThemeProvider } from "styled-components";
// import { Light, Dark } from './styles/theme'
// import GlobalStyle from './styles/global/global.ts';

const App = () => {

    // const [theme, setTheme] = useState(Light);
    // const [mode, setMode] = useState('');

    // useEffect(() => {
    //     console.log(theme);
    //     if(theme.title === "Dark") {
    //         setMode('Light');
    //         setTheme(Light);
    //     } else {
    //         setMode('Dark');
    //         setTheme(Dark);
    //     }
    // },[]);

    return (
        <main className="gradient_bg">
            {/* <ThemeProvider theme={Light} > */}
                {/* <GlobalStyle /> */}
                <div>
                    <Navbar />
                    <Header />
                </div>
                <div>
                    <Brand />
                    <WhatGPT3 />
                    <Features />
                    <Possibility />
                    <CTA />
                    <Blog />
                    <Footer />
                </div>
            {/* </ThemeProvider> */}
        </main>
    )
}

export default App;