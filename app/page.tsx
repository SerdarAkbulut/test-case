import Canvas from "./components/Canvas";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex w-full justify-between h-full">
      <Canvas />
      <Sidebar />
    </div>
  );
}
