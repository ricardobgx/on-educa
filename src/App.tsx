import { BrowserRouter, Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import routes from './routes';

function App() {

  const loggedUser = { name: '' };

  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                (route.path === '/' && loggedUser.name === '' ? <Redirect to="/overview" /> : <route.component {...props} {...route.props} />)
              )}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
