// Layouts
import { GameLayout } from "../layouts/GameLayout";
import { MainLayout } from "../layouts/MainLayout";

// Pages
import { Game, Games, Home, Login } from "../pages";
import { renderRoutes } from "./generate-routes";

export const routes = [
    {
        layout: GameLayout,
        routes: [
            {
                name: "game",
                title: "Game Pages",
                component: Game,
                path: "/game",
            },
        ],
    },
    {
        layout: MainLayout,
        routes: [
            {
                name: "home",
                title: "Home page",
                component: Home,
                path: "/",
                isPublic: true,
            },
            {
                name: "Games",
                tite: "Game List page",
                component: Games,
                path: "/games",
            },
            {
                name: "Login",
                tite: "Login page",
                component: Login,
                path: "/login",
            },
        ],
    },
];

export const Routes = renderRoutes(routes);
