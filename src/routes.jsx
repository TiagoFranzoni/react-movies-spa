import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { MovieDetail } from "./Pages/MovieDetail";
import { Root } from "./layout/Root";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/movie-detail",
                element: <MovieDetail />
            }
        ]
    }
])