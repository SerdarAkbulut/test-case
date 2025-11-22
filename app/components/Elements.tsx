"use client";

import { useDispatch } from "react-redux";
import {
  deleteElement,
  updateElementText,
} from "../store/builder/builderSlice";
import { useState } from "react";

function Elements({
  id,
  type,
  content,
  x,
  y,
  width,
  height,
  zIndex,
}: {
  id: string;
  type: string;
  content: { text: string };
  x: string | number;
  y: string | number;
  width: number | string;
  height: number | string;
  zIndex: number;
}) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [tempText, setTempText] = useState(content?.text);

  const handleDelete = () => {
    dispatch(deleteElement(id));
  };

  const handleSave = () => {
    dispatch(updateElementText({ id, content: { text: tempText } }));
    setIsEditing(false);
  };

  const renderItem = () => {
    switch (type) {
      case "header":
        return (
          <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold w-full h-[80px] top-0"></header>
        );

      case "footer":
        return (
          <footer className="bg-gray-800 text-white p-4 text-center w-full h-[60px] bottom-0"></footer>
        );

      case "slider":
        return (
          <div className="bg-gray-300 w-full h-full">Slider Placeholder</div>
        );

      case "card":
        return (
          <div className="border rounded shadow p-4 relative bg-white">
            {/* edit + delete */}
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white px-2 py-1 text-xs rounded"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-2 py-1 text-xs rounded"
              >
                X
              </button>
            </div>

            <p>{content?.text}</p>
          </div>
        );

      case "text-content":
        return (
          <div className="relative bg-white p-1">
            <div className="absolute -top-3 right-0 flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white px-2 py-1 text-xs rounded"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-2 py-1 text-xs rounded"
              >
                X
              </button>
            </div>

            <p>{content?.text}</p>
          </div>
        );

      default:
        return <div>{content?.text}</div>;
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

      {/* EDIT MODAL */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-4 rounded w-80">
            <textarea
              value={tempText}
              onChange={(e) => setTempText(e.target.value)}
              className="border p-2 w-full"
            />

            <button
              onClick={handleSave}
              className="w-full bg-green-600 text-white p-2 mt-3 rounded"
            >
              Kaydet
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="w-full bg-gray-400 text-white p-2 mt-2 rounded"
            >
              Vazgeç
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Elements;
