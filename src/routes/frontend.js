import withRouter from "../component/Hoc/withRouter";
import About from "../component/Step/About";
import Blog from "../pages/Blog";
import Home from "../pages/Home";

const AboutWithRouter = withRouter(About);
const BlogRouter = withRouter(Blog);
const HomeRouter = withRouter(Home);

const routes = [
  { id: 1, path: "about", element: AboutWithRouter },
  { id: 2, path: "blog", element: BlogRouter },

  { id: 3, path: "/", element: HomeRouter},
];

export { routes };
