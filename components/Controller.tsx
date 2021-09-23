import React from 'react';
import Slider from 'react-input-slider';
import Select from 'react-select';

interface Options {
  value: string;
  label: string;
}

type Props = {
  value: number;
  maxValue: number;
  minValue: number;
  step: number;
  onChange: any;
  options: Options[];
  selectChange: any;
  backdropDefault?: any;
};
export const Controller = ({
  value,
  maxValue,
  minValue,
  step,
  onChange,
  options,
  selectChange,
  backdropDefault,
}: Props) => {
  return (
    <div className="h-20  px-4 rounded-md bg-secondary py-2 gap-10 flex justify-center items-center">
      <div>
        <p className="text-white">Glass Opacity</p>
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
        <p className="text-white">Backdrop Blur</p>
        <Select
          isSearchable={false}
          className="w-52"
          options={options}
          onChange={selectChange}
          defaultValue={{ label: 'Small', value: 'sm' }}
        />
      </div>
    </div>
  );
};
