import './App.css'
import Box from './component/Box';

function App() {
  //const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";
  const apiBaseUrl = "http://localhost:8080";

  return (
    <div className="flex justify-center items-start p-4 sm:p-8">
      <Box apiBaseUrl={apiBaseUrl} />
    </div>
  );
}

export default App
