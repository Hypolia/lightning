import { Route, Routes } from 'react-router-dom';
import Home from "./pages";
import {useState} from "react";
import NavigationContext, {NavigationContract} from "./contexts/navigation-context";
import { HomeIcon, Square3Stack3DIcon} from "@heroicons/react/24/solid";
import LoginPage from "./pages/login";
import {AuthenticationContext} from "@lightning/shared/auth";
import { QueryClient, QueryClientProvider } from 'react-query';
import HomeMonitoring from './pages/monitoring';
import HomeEnvironments from './pages/environments';

const queryClient = new QueryClient()

export function App() {
  const [navigation, setNavigation] = useState<NavigationContract[]>([
    { label: 'Home', href: '/', icon: HomeIcon as never },
    { label: 'Environment', href: '/environments', icon: Square3Stack3DIcon as never }
  ])
  const authentication = useState()

  const routes = [
    { uid: "home", href: "/", component: <Home />},
    { uid: "environments", href: "/environments", component: <HomeEnvironments /> },
    { uid: "monitoring", href: "/monitoring", component: <HomeMonitoring /> },
    { uid: "login", href: "/login", component: <LoginPage /> }
  ]
  return (
    <QueryClientProvider client={queryClient}>
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

    </QueryClientProvider>
  );
}

export default App;
