/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';

import { Code, Controller, Glass, Color } from '../components';
import Head from 'next/head';
import thumb from '../public/thumb.png';

const Home: NextPage = () => {
  const [opacity, setOpacity] = useState(10);
  const [backdrop, setBackdrop] = useState<string>('sm');
  const [saturation, setSaturation] = useState<number>(400);
  const [color, setColor] = useState<string>('gray');
  const [imageUrl, setImageUrl] = useState<string>('/sunset.jpg');

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

  const preview = (files: any) => {
    const imageSrc = URL.createObjectURL(files[0]);
    setImageUrl(imageSrc);
  };

  return (
    <div className=" sm:h-screen sm:w-screen flex flex-col justify-center items-center gap-5 overflow-y-scroll">
      <Head>
        <title>Tailwindcss Glassmorphism Generator</title>
        <meta
          property="og:title"
          content="Tailwindcss Glassmorphism Generator"
        />
        <meta
          property="og:image"
          content={`https://tailwindcss-glassmorphism.vercel.app${thumb}`}
        />
      </Head>
      <h1 className="text-4xl text-center text-white font-bold mt-10  mb-10">
        Tailwindcss Glassmorphism Generator
      </h1>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:flex-wrap justify-center">
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
          backdropDefault={backdropOptions[2].value}
        />
        <Color
          value={saturation}
          maxValue={900}
          minValue={0}
          step={100}
          // @ts-ignore
          onChange={({ x }) => setSaturation(x)}
          options={colorOptions}
          // @ts-ignore
          selectChange={({ value }) => setColor(value)}
        />
        <div className="overflow-hidden bg-secondary relative w-64 mt-4 mb-5 rounded-md">
          <button className="z-0 cursor-pointer bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 w-full inline-flex items-center">
            <svg
              fill="#FFF"
              height="18"
              viewBox="0 0 24 24"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
            </svg>
            <span className="ml-2">Change Background</span>
          </button>
          <input
            className="cursor-pointer absolute block z-10 top-0 left-0 w-full opacity-0 pin-r pin-t"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              preview(event.target.files)
            }
          />
        </div>
      </div>

      <Glass
        blur={backdrop}
        color={color}
        saturation={saturation.toString()}
        opacity={opacity.toString()}
        imageUrl={imageUrl}
      />
      <Code
        blur={backdrop}
        opacity={opacity.toString()}
        color={color}
        saturation={saturation.toString()}
      />
      <div className="mt-10 flex justify-center items-center flex-col gap-3">
        <div>
          <a
            href={`https://www.producthunt.com/posts/tailwindcss-glassmorphism-generator?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tailwindcss-glassmorphism-generator`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=314087&theme=dark"
              alt="Tailwindcss Glassmorphism Generator - Generate your own glassmorphism for tailwindcss.  | Product Hunt"
              style={{ width: ' 250px', height: '54px' }}
              width="250"
              height="54"
            />
          </a>
        </div>
        <h2 className="text-white text-lg font-bold">
          Made with ❤ by{' '}
          <a className="text-green-400" href="https://github.com/miralsuthar">
            Miral
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Home;
