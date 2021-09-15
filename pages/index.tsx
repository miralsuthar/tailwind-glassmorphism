import React, { useState } from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import { Glass } from '../components/Glass';
import { Controller } from '../components/Controller';

const Home: NextPage = () => {
  const [opacity, setOpacity] = useState(0);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-5">
      <Controller
        value={opacity}
        maxValue={100}
        minValue={0}
        step={10}
        // @ts-ignore
        onChange={({ x }) => setOpacity(x)}
      />
      <Glass blur="xl" opacity={opacity.toString()} />
    </div>
  );
};

export default Home;
