import React from 'react';

type Props = {
  blur: string;
  opacity: string;
};
export const Code = ({ blur, opacity }: Props) => {
  const copyCode = () => {
    const text = document.getElementById('code');
  };
  return (
    <>
      <div className="bg-secondary text-white px-4 py-2 rounded-md w-content">
        <pre onCopy={() => {}} className="font-bold text-lg">
          <span>{`<`}</span>
          <span className="text-blue-500">div </span>
          <span className="text-yellow-300">classname</span>
          <span>=</span>
          <span className="text-green-500">{`"`}</span>
          <span className="text-green-500">
            h-full w-full bg-white rounded-md bg-clip-padding backdrop-filter
            backdrop-blur-{blur} bg-opacity-{opacity} border border-gray-100
          </span>
          <span className="text-green-500">{`"`}</span>
          <span>{`>`}</span>
          <br />

          <span>{`<`}</span>
          <span className="text-blue-500">/div</span>
          <span>{`>`}</span>
        </pre>
      </div>
    </>
  );
};
