import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Blog from "./pages/Blog/Blog";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Stats from "./pages/Stats/Stats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
      },
      {
        path: "home",
        element: <Home />,
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "stats",
        element: <Stats />,
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
      },
      {
        path: "quiz/:id",
        element: <Quiz />,
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.id}`
          );
        },
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
