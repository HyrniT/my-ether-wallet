import RouterProvider from './providers/router';
import ReduxProvider from './providers/redux';

function App() {
  return (
    <ReduxProvider>
      <RouterProvider />
    </ReduxProvider>
  );
}

export default App;
