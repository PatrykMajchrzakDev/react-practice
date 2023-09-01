import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

//Cant be loaded this way because its gonna load vigorously
// import BlogPage, { loader as postsLoader } from './pages/Blog';
// import PostPage, { loader as postLoader } from "./pages/Post";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";

//thats how lazy load component / page
const BlogPage = lazy(() => import("./pages/Blog"));
const PostPage = lazy(() => import("./pages/Post"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading blog post list...</p>}>
                <BlogPage />
              </Suspense>
            ),
            // This loader is loaded lazily this way
            loader: () =>
              import("./pages/Blog".then((module) => module.loader())),
          },
          {
            path: ":id",
            element: (
              <Suspense fallback={<p>Loading post informations...</p>}>
                <PostPage />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/Post").then((module) => module.loader(meta)),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
