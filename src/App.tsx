import { BrowserRouter, Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom';
import routes from './routes';

function App() {
  const token = window.localStorage.getItem('token');

  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                (route.path !== '/' && !token ? <Redirect to='/' /> :
                  (route.path === '/' && token ? <Redirect to='/home' /> :
                    <route.component {...props} {...route.props} />))
              )}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
