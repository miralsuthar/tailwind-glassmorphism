import React from "react";
import { FiCopy } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  blur: string;
  opacity: string;
  color: string;
  saturation: string;
};

export const Code: React.FC<Props> = ({ blur, opacity, color, saturation }) => {
  const generatedCode = `bg-${color}-${saturation} rounded-md bg-clip-padding backdrop-filter backdrop-blur-${blur} bg-opacity-${opacity} border border-gray-100`;

  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    toast.success("Code copied to clipboard!");
  };

  return (
    <div className="bg-secondary w-full sm:w-3/4 flex items-center justify-between text-white px-4 py-3 rounded-md border border-gray-700">
      <Toaster />
      <pre className="bg-gray-800 text-green-400 p-3 rounded-md text-sm font-mono whitespace-pre-wrap flex-1">
        {generatedCode}
      </pre>
      <button
        onClick={copyCode}
        className="ml-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm transition active:scale-95"
      >
        <FiCopy />
      </button>
    </div>
  );
};
