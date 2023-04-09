import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./reset.css";

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

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById("root")
);
