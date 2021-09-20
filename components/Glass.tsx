import React from 'react';

type Props = {
  blur: string;
  opacity: string;
  color: string;
  saturation: string;
  imageUrl: string;
};
export const Glass = ({
  blur,
  opacity,
  color,
  saturation,
  imageUrl,
}: Props) => {
  return (
    <div className="h-2/4 w-3/4 p-3 bg-secondary rounded-md flex justify-center items-center">
      <div
        className="h-full w-full p-8 rounded-md  flex justify-center items-center"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className={`h-full w-full bg-${color}-${saturation} rounded-md bg-clip-padding backdrop-filter backdrop-blur-${blur} bg-opacity-${opacity} border border-gray`}
        ></div>
      </div>
    </div>
  );
};
