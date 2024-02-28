import * as ReactDOM from 'react-dom/client';
import MuiProvider from './provider/mui/MuiProvider';
import ColorModeContextProvider from '@/provider/darkmode/DarkmodeProvider';
import Router from './router';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <ColorModeContextProvider>
      <MuiProvider>
        <Router />
      </MuiProvider>
    </ColorModeContextProvider>
  </RecoilRoot>
);
