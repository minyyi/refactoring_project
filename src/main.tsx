import * as ReactDOM from 'react-dom/client';
import MuiProvider from './provider/mui/MuiProvider';
import ColorModeContextProvider from '@/provider/darkmode/DarkmodeProvider';
import Router from './router';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <ColorModeContextProvider>
        <MuiProvider>
          <HelmetProvider>
            <Router />
          </HelmetProvider>
        </MuiProvider>
      </ColorModeContextProvider>
    </QueryClientProvider>
  </RecoilRoot>
);
