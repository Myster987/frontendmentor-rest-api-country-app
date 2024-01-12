import { Router, RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./router.jsx";

const queryClient = new QueryClient();

const router = new Router({
  routeTree,
  context: {
    queryClient,
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
