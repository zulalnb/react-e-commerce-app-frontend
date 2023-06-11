import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./reset.css";
import "antd/dist/antd.css";

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

// contexts
import { AuthProvider } from "./contexts/AuthContext";

import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import { BasketProvider } from "./contexts/BasketContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <AuthProvider>
          <BasketProvider>
            <App />
          </BasketProvider>
        </AuthProvider>
      </ChakraProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
