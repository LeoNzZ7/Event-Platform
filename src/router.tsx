import { useRoutes } from "react-router-dom";
import { Event } from "./Pages/event";
import { Subscribe } from "./Pages/subscribe";

export const Router = () => {
  return useRoutes([
    {path: '/', element: <Subscribe/>},
    {path: '/event', element: <Event/>},
    {path: '/event/lesson/:slug', element: <Event/>}
  ]);
};