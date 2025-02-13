import TimerDisplay from "./src/components/timer/TimerDisplay";
import TimerControls from "./src/components/timer/TimerControls";
import React from "react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <TimerDisplay time={0} />
        <TimerControls onStart={function (): void {
          throw new Error("Function not implemented.");
        } } />
      </div>
    </div>
  );
}

export default App;
