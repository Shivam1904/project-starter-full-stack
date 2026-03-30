import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { scan } from 'react-scan';

import { Toaster } from '@/components/ui/sonner';

import { Navbar } from './components/Navbar';
import { AuthProvider } from './features/auth/hooks';
import { AppRoutes } from './routes/AppRoutes';
import { ThemeProvider } from './theme/ThemeProvider';
import { MotionProvider } from './ui/motion/MotionProvider';
import { UiPaletteProvider } from './ui/palette/UiPaletteProvider';
import { UiIntensityProvider } from './ui/skins/intensity/UiIntensityProvider';
import { UiSkinProvider } from './ui/skins/UiSkinProvider';

import { DrawerProvider } from './ui/drawer/DrawerContext';
import { GlobalDrawer } from './ui/drawer/GlobalDrawer';
import { ChatProvider } from './features/chat/ChatContext';

const queryClient = new QueryClient();

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  scan({
    enabled: true,
  });
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <MotionProvider>
          <UiPaletteProvider>
            <UiSkinProvider>
              <UiIntensityProvider>
                <DrawerProvider>
                  <ChatProvider>
                    <AuthProvider>
                      <BrowserRouter>
                        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
                          <Navbar />
                          <Toaster />
                          <main className="flex-1 bg-background">
                            <AppRoutes />
                          </main>
                          <GlobalDrawer />
                        </div>
                      </BrowserRouter>
                      {process.env.NODE_ENV === 'development' && (
                        <ReactQueryDevtools initialIsOpen={false} />
                      )}
                    </AuthProvider>
                  </ChatProvider>
                </DrawerProvider>
              </UiIntensityProvider>
            </UiSkinProvider>
          </UiPaletteProvider>
        </MotionProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
