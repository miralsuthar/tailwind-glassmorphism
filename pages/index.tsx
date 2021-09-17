import React, { useState } from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import { Glass } from '../components/Glass';
import { Controller } from '../components/Controller';
import { Code } from '../components/Code';
import { Color } from '../components/Color';

const Home: NextPage = () => {
  const [opacity, setOpacity] = useState(0);
  const [backdrop, setBackdrop] = useState<string>('none');
  const [saturation, setSaturation] = useState<number>(0);
  const [color, setColor] = useState<string>('white');

  const backdropOptions = [
    { value: 'none', label: 'None' },
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'Extra Large' },
    { value: '2xl', label: 'Extra large 2' },
    { value: '3xl', label: 'Extra large 3' },
  ];

  const colorOptions = [
    { value: 'red', label: 'Red' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'pink', label: 'Pink' },
    { value: 'white', label: 'White' },
    { value: 'gray', label: 'Gray' },
    { value: 'brown', label: 'Brown' },
    { value: 'indigo', label: 'Indigo' },
    { value: 'purple', label: 'Purple' },
  ];

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-5">
      <div className="flex gap-4">
        <Controller
          value={opacity}
          maxValue={100}
          minValue={0}
          step={10}
          // @ts-ignore
          onChange={({ x }) => setOpacity(x)}
          options={backdropOptions}
          // @ts-ignore
          selectChange={({ value }) => setBackdrop(value)}
        />
        <Color
          value={saturation}
          maxValue={900}
          minValue={100}
          step={100}
          // @ts-ignore
          onChange={({ x }) => setSaturation(x)}
          options={colorOptions}
          // @ts-ignore
          selectChange={({ value }) => setColor(value)}
        />
      </div>

      <Glass
        blur={backdrop}
        color={color}
        saturation={saturation.toString()}
        opacity={opacity.toString()}
      />
      <Code
        blur={backdrop}
        opacity={opacity.toString()}
        color={color}
        saturation={saturation.toString()}
      />
    </div>
  );
};

export default Home;
