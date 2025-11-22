// components/Canvas.tsx
"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import Elements from "./Elements";
import { addElement } from "../store/builder/builderSlice";
import { v4 as uuidv4 } from "uuid";

const Canvas = () => {
  const dispatch = useDispatch();
  const canvas = useSelector((state: RootState) => state.builder.canvas);
  const elements = useSelector((state: RootState) => state.builder.elements);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const type = e.dataTransfer.getData("element-type");
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();

    const x = e.clientX - rect.x;
    const y = e.clientY - rect.y;

    dispatch(
      addElement({
        id: uuidv4(),
        type,
        content:
          type === "header" || type === "footer"
            ? { text: type.toUpperCase() }
            : { text: "Yeni Element" },
        x: type === "header" ? "0" : type === "footer" ? "0" : x,
        y: type === "header" ? 0 : type === "footer" ? canvas.height - 60 : y,
        width: type === "header" || type === "footer" ? "100%" : 200,
        height: type === "header" ? 80 : type === "footer" ? 60 : 120,
        zIndex: elements.length + 1,
      })
    );
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      id="canvas"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        width: canvas.width,
        height: canvas.height,
        background: "#f8f8f8",
        border: "2px dashed #ccc",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {elements.map((el) => (
        <Elements
          id={el.id}
          key={el.id}
          type={el.type}
          content={(el.content as { text: string }) ?? { text: "textt" }}
          x={el.position.x}
          y={el.position.y}
          width={el.position.width}
          height={el.position.height}
          zIndex={el.position.zIndex}
        />
      ))}
    </div>
  );
};

export default Canvas;
