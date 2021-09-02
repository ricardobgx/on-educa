import IRoute from "./interfaces/routes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Register from "./pages/Register";

const routes: IRoute[] = [
  {
    path: '/overview',
    name: 'Overview',
    component: Overview,
    exact: true
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    exact: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    exact: true
  }
]

export default routes;