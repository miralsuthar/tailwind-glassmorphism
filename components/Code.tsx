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
      <div className="bg-secondary text-white p-2 rounded-md w-5/6">
        <pre>
          <div>
            <span>{`<`}</span>
            <span>div </span>
            <span>classname </span>
            <span>= </span>
            <span>{`"`}</span>
            <span>{`"`}</span>
            <span>{`>`}</span>
          </div>
        </pre>
      </div>
    </>
  );
};
