import React from 'react';
import TimerDisplay from './components/timer/TimerDisplay';
import TimerControls from './components/timer/TimerControls';

/**
 * App component to render the main application
 * @returns {JSX.Element} The App component
 */
const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <TimerDisplay />
      <TimerControls />
    </div>
  );
};

export default App;