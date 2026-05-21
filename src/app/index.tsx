import { FC } from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationProvider } from './providers';
import { Router } from './navigation';

const App: FC = () => {
  return (
    <NavigationProvider>
      <BottomSheetModalProvider>
        <Router />
      </BottomSheetModalProvider>
    </NavigationProvider>
  );
};

export default App;
