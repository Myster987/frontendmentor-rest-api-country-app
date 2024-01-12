import { Route, Outlet, RootRoute } from "@tanstack/react-router";
import { countryByNameQueryOptions } from "./lib/query-options.js";
import { switchDarkMode } from "./lib/switch-dark-mode.js";
import IndexPage from "./pages/index/IndexPage.jsx";
import CountryDetailsPage from "./pages/details/CountryDetailsPage.jsx";

const rootRoute = new RootRoute({
  component: () => (
    <>
      <header
        className="flex justify-between bg-white dark:bg-dark-mode-elements
        text-light-mode-text dark:text-dark-mode-text p-3 py-8 shadow-md"
      >
        <h3 className="font-semibold dark:">Where in the world?</h3>

        <button className="flex items-center gap-3" onClick={switchDarkMode}>
          <img src="dark_mode_icon.svg" alt="Dark mode icon" />
          Dark Mode
        </button>
      </header>

      <Outlet />
    </>
  ),
});

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexPage,
});

export const countryDetailsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/details/$countryName",
  loader: ({ context: { queryClient }, params: { countryName } }) =>
    queryClient.ensureQueryData(countryByNameQueryOptions(countryName)),
  component: CountryDetailsPage,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  countryDetailsRoute,
]);
