import pogo from 'https://deno.land/x/pogo/main.js';
// @deno-types="https://servestjs.org/@/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://servestjs.org/@/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";

const server = pogo.server({ port : 8080 });

const bodyStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#46483d'
}

const handlerReact = () => {
    return ReactDOMServer.renderToString(
        <html>
            <head>
                <meta charSet="utf-8" />
                <title>LNUG</title>
            </head>
        <body style={bodyStyle}>
            <div style={{display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <img src="https://i.imgur.com/n2VloWm.png" />
            </div>
        </body>
    </html>
)}

server.route(
    {
        method: 'GET',
        path: '/webpage',
        handler: handlerReact
    })

server.start();