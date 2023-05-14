import {ChevronDownIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {FC, memo} from 'react';
import homePng from '../../images/home.png';
import home1 from '../../images/home1.png';
import home2 from '../../images/home2.png';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Hero: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Hero} className="bg-[#393946]">
      <div className="relative flex h-screen w-full items-center justify-center">
        <div className="z-10 flex w-full max-w-screen-lg flex-col items-center justify-center px-4 lg:px-0">
          <div className="lg:mt-20">
            <Image alt="" src={homePng} className="w-20 lg:w-64" />
          </div>
          <h3 className="mt-5 text-2xl font-bold leading-10 text-white">马叔</h3>
          <p className="mb-10 text-white opacity-50 lg:mt-5 lg:text-xl">邀请你语音通话...</p>
          <div className="mt-32 flex lg:mt-20">
            <div className="mr-10 flex-1 lg:mr-32">
              <Image alt="" src={home1} className="h-16 w-16" />
              <p className="mb-10 mt-5 text-center text-xl text-white">接听</p>
            </div>
            <div className="ml-10 flex-1 lg:ml-32">
              <Image alt="" src={home2} className="h-16 w-16" />
              <p className="mb-10 mt-5 text-center text-xl text-white">接听</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
