import { Route, Routes } from 'react-router-dom';
import Home from "./pages";
import {useState} from "react";
import NavigationContext, {NavigationContract} from "./contexts/navigation-context";
import {HomeIcon} from "@heroicons/react/24/outline";

export function App() {
  const [navigation, setNavigation] = useState<NavigationContract[]>([
    { label: 'Home', href: '/', icon: HomeIcon as never },
  ])

  const routes = [
    { uid: "home", href: "/", component: <Home />}
  ]
  return (
    <div>
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
    </div>
  );
}

export default App;
