import TimerDisplay from "./src/components/timer/TimerDisplay";
import TimerControls from "./src/components/timer/TimerControls";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <TimerDisplay />
        <TimerControls />
      </div>
    </div>
  );
}

export default App;
