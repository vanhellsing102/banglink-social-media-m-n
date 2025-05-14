"use client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const QueryContextProvider = ({children}) => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default QueryContextProvider;