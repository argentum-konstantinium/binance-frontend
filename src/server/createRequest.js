import createFetchRequest from "@/server/request";
import {createStaticHandler, createStaticRouter, StaticRouterProvider} from "react-router-dom/server";
import router from "@/client/router";
import store from "@/store";
import {renderToString} from "react-dom/server";
import React from "react";
import {Provider} from "react-redux";

export const createRequest = async (req) => {
    const fetchRequest = createFetchRequest(req);
    const handler = createStaticHandler(router);

    const context = await handler.query(fetchRequest);
    const serverState = store.getState();
    const staticRouter = createStaticRouter(handler.dataRoutes, context)

    const renderedString = renderToString(
        <Provider store={store}>
            <StaticRouterProvider router={staticRouter} context={context}>

            </StaticRouterProvider>
        </Provider>

    );
    const html = `
            <!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link type="text/css" rel="stylesheet" href="./static/main.css">
    <title>binance frontend
    </title>
    <script>
    window.__INITIAL_STATE__ = ${JSON.stringify(serverState)}
</script>
</head>
<body>
<div id="root">${renderedString}</div>
<script src="./static/client.js"></script> 
</body>
</html>`
    return html
}