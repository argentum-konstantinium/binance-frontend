import * as React from "react";
import {hydrateRoot} from "react-dom/client";
import router from "@/client/router";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import store from "@/store";
import {Provider} from "react-redux";


// @ts-ignore
const root = hydrateRoot(document.querySelector("#root"), <Provider store={store}><RouterProvider
    router={createBrowserRouter(router)}/></Provider>);
// @ts-ignore
delete window.__INITIAL_STATE__;