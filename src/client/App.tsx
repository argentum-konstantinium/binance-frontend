import router from "@/client/router";
import {RouterProvider} from "react-router-dom";
import * as React from "react";
export const App = () => {
    return (
        <RouterProvider router={router}/>
    )
}