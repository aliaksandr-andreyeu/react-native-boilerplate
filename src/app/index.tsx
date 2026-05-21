import { FC } from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Router } from './navigation';

const App: FC = () => {
  return (
    <BottomSheetModalProvider>
      <Router />
    </BottomSheetModalProvider>
  );
};

export default App;
