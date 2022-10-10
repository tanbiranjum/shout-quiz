import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Blog from "./pages/Blog/Blog";
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
