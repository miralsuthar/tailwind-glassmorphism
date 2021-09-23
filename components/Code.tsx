import React from 'react';

type Props = {
  blur: string;
  opacity: string;
  color: string;
  saturation: string;
};
export const Code = ({ blur, opacity, color, saturation }: Props) => {
  const copyCode = () => {
    const text = document.getElementById('code');
  };
  return (
    <div className="bg-secondary w-full sm:w-3/4 flex text-white px-4 py-2 rounded-md">
      <p
        onCopy={() => {}}
        className="font-bold text-sm sm:text-sm md:text-lg flex flex-wrap"
      >
        <span className="mr-2 ">{`<`}</span>
        <span className="mr-2 text-blue-500">div </span>

        <span className="mr-2 text-yellow-300">className</span>
        <span className="mr-2">=</span>
        <span className=" text-green-500">{`"`}</span>
        <span className="text-green-500">
          h-full w-full bg-{color}-{saturation} rounded-md bg-clip-padding
          backdrop-filter backdrop-blur-{blur} bg-opacity-{opacity} border
          border-gray-100
        </span>
        <span className="mr-2 text-green-500">{`"`}</span>
        <span>{`>`}</span>
        <br />

        <span className="mr-2 ">{`<`}</span>
        <span className="mr-2 text-blue-500">/div</span>
        <span>{`>`}</span>
      </p>
    </div>
  );
};
