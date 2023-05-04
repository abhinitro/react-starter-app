import About from "../component/Step/About";
import Blog from "../pages/Blog";
import Home from "../pages/Home";

const routes = [
  { id: 1, path: "about", element: <About></About> },
  { id: 2, path: "blog", element: <Blog></Blog> },

  { id: 3, path: "/", element: <Home></Home> },
];

export { routes };
