"use client";

function Elements({
  type,
  text,
  x,
  y,
  width,
  height,
  zIndex,
}: {
  type: string;
  text: string;
  x: string | number;
  y: string | number;
  width: number | string;
  height: number | string;
  zIndex: number;
}) {
  const renderItem = () => {
    switch (type) {
      case "header":
        return (
          <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold w-full h-[80px]  top-0">
            Header
          </header>
        );
      case "footer":
        return (
          <footer className="bg-gray-800 text-white p-4 text-center w-full h-[60px] bottom-0">
            Footer
          </footer>
        );
      case "card":
        return (
          <div className="border rounded shadow p-4">
            <p>{text}</p>
          </div>
        );
      case "text-content":
        return <p>{text}</p>;
      case "slider":
        return (
          <div className="bg-gray-300 w-full h-full">Slider Placeholder</div>
        );
      default:
        return <div>Elements</div>;
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height,
        zIndex,
      }}
    >
      {renderItem()}
    </div>
  );
}

export default Elements;
