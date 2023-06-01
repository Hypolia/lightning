import { Route, Routes } from 'react-router-dom';
import Home from "./pages";
import {useState} from "react";
import NavigationContext, {NavigationContract} from "./contexts/navigation-context";
import {HomeIcon} from "@heroicons/react/24/outline";
import LoginPage from "./pages/login";
import {AuthenticationContext} from "@lightning/shared/auth";

export function App() {
  const [navigation, setNavigation] = useState<NavigationContract[]>([
    { label: 'Home', href: '/', icon: HomeIcon as never },
  ])
  const authentication = useState()

  const routes = [
    { uid: "home", href: "/", component: <Home />},
    { uid: "login", href: "/login", component: <LoginPage /> }
  ]
  return (
    <div>
      <AuthenticationContext.Provider value={authentication as never}>
        <NavigationContext.Provider value={[navigation, setNavigation]}>
          <Routes>
            <Route path={"/"}>
              { routes.map((route) => (
                <Route
                  key={route.uid}
                  path={route.href}
                  element={route.component}
                />
              ))}
            </Route>
          </Routes>
        </NavigationContext.Provider>
      </AuthenticationContext.Provider>

    </div>
  );
}

export default App;
