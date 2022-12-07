import React from 'react';
import {Helmet} from "react-helmet";
import ReactDOM from 'react-dom';
import Nav from "./Nav"
import Main from "./Main"
ReactDOM.render(<>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Omar Kanaan's Portfolio</title>
                <link rel="canonical" href="https://omarkanaan.live" />
            </Helmet>
<Nav />
<Main />
</>,document.getElementById("root"))