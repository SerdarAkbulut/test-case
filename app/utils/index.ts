export function calculatePosition(
  e: React.DragEvent,
  canvas: DOMRect,
  grid = 10
) {
  // Absolute Position
  let x = e.clientX - canvas.left;
  let y = e.clientY - canvas.top;

  // Grid Snap
  x = Math.round(x / grid) * grid;
  y = Math.round(y / grid) * grid;

  // Relative (%)
  const relX = (x / canvas.width) * 100;
  const relY = (y / canvas.height) * 100;

  return {
    absolute: { x, y },
    relative: { x: relX, y: relY },
  };
}

export const defaultElementConfig = {
  header: {
    width: "100%",
    height: 80,
    position: "relative",
  },
  footer: {
    width: "100%",
    height: 60,
    position: "relative",
  },
  card: {
    width: 300,
    height: 200,
    position: "relative",
  },
  "text-content": {
    width: "auto",
    height: "auto",
    position: "relative",
  },
  slider: {
    width: "100%",
    height: 400,
    position: "relative",
  },
};
export const getDefaultWidth = (type: string) => {
  switch (type) {
    case "header":
    case "footer":
    case "slider":
      return "100%";
    case "card":
      return 300;
    case "text-content":
      return "auto";
    default:
      return 200;
  }
};

export const getDefaultHeight = (type: string) => {
  switch (type) {
    case "header":
      return 80;
    case "footer":
      return 60;
    case "slider":
      return 400;
    case "card":
      return 200;
    default:
      return "auto";
  }
};
