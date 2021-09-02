import Image from 'next/image';
import type { NextPage } from 'next';
import { Glass } from '../components/Glass';
import { Controller } from '../components/Controller';

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-5">
      <Controller />
      <Glass blur="xl" opacity="20" />
    </div>
  );
};

export default Home;
