import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { scan } from 'react-scan';

import { Toaster } from '@/components/ui/sonner';

import { Navbar } from './components/Navbar';

const queryClient = new QueryClient();

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  scan({
    enabled: true,
  });
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          <Navbar />
          <Toaster />
          <main>
            <Routes>
              <Route path="/" element={
                <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
                  </div>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}

export default App;
