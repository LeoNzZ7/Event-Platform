import { useRoutes } from "react-router-dom";
import { Event } from "./Pages/event";

export const Router = () => {
  return useRoutes([
    {path: '/', element: <h1>Home</h1>},
    {path: '/event', element: <Event/>},
    {path: '/event/lesson/:slug', element: <Event/>}
  ]);
};