import React from 'react';
import CombineProvider from './src/context/CombineProvider';
import CombindStack from './src/stacks/CombindStack';


const App = () => {
  return (
    <CombineProvider>
      <CombindStack />
    </CombineProvider>
  );
};

export default App;
