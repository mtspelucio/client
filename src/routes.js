import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { isAutenticated } from './auth'
import Home from './pages/Home';
import Login from './pages/Login';
import Restaurant from './pages/Restaurant';

const PrivateRoute = ({ children }) => {
    const user = isAutenticated();
    return user ? children : <Login />
}

export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' element={<Login />} />
            <Route async path='/home' 
                element={ 
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute> 
                }
            />
            <Route async path='/restaurant/:id/:name/:foodDescription' 
                element={ 
                    <PrivateRoute>
                        <Restaurant />
                    </PrivateRoute> 
                }
            />
        </Switch>
    </BrowserRouter>
  );
}