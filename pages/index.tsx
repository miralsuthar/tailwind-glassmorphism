import React, { useState } from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import { Glass } from '../components/Glass';
import { Controller } from '../components/Controller';
import { Code } from '../components/Code';

const Home: NextPage = () => {
  const [opacity, setOpacity] = useState(0);
  const [backdrop, setBackdrop] = useState<string>('none');
  const options = [
    { value: 'none', label: 'None' },
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'Extra Large' },
    { value: '2xl', label: 'Extra large 2' },
    { value: '3xl', label: 'Extra large 3' },
  ];

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-5">
      <Controller
        value={opacity}
        maxValue={100}
        minValue={0}
        step={10}
        // @ts-ignore
        onChange={({ x }) => setOpacity(x)}
        options={options}
        // @ts-ignore
        selectChange={({ value }) => setBackdrop(value)}
      />
      <Glass blur={backdrop} opacity={opacity.toString()} />
      <Code blur={backdrop} opacity={opacity.toString()} />
    </div>
  );
};

export default Home;
