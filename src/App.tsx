import '@mantine/core/styles.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Layout from './Layout';
// Import your page components
import { MainPage } from './pages/Main.page';
import { theme } from './theme';
import { CapturePage } from './pages/Capture.page';
import { ProfilePage } from './pages/Profile.page';
import { ResultsPage } from './pages/Results.page';
import { SharePage } from './pages/Share.page';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter basename="/atfl/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
          </Route>
          <Route path="/capture" element={<Layout />}>
            <Route index element={<CapturePage />} />
          </Route>
          <Route path="/profile" element={<Layout />}>
            <Route index element={<ProfilePage />} />
          </Route>
          <Route path="/results" element={<Layout />}>
            <Route index element={<ResultsPage />} />
          </Route>
          <Route path="/share" element={<Layout />}>
            <Route index element={<SharePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
