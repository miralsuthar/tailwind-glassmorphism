import React from 'react';
import Slider from 'react-input-slider';

type Props = {
  value: number;
  maxValue: number;
  minValue: number;
  step: number;
  onChange: any;
};
export const Controller = ({
  value,
  maxValue,
  minValue,
  step,
  onChange,
}: Props) => {
  return (
    <div className="h-20 w-3/6 bg-white rounded-md bg-secondary p-2">
      <div>
        <p className="text-white">Background Opacity</p>
        <Slider
          axis="x"
          x={value}
          xmax={maxValue}
          xmin={minValue}
          xstep={step}
          onChange={onChange}
        />
      </div>

      <div>
        <p></p>
      </div>
    </div>
  );
};
