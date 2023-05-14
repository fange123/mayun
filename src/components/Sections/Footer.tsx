import {ChevronUpIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';
import foot from '../../images/foot.png';

import {SectionId} from '../../data/data';
import Image from 'next/image';

const Footer: FC = memo(() => (
  <div className="relative bg-[#393946] px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <a
        className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
        href={`/#${SectionId.Hero}`}>
        <ChevronUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
      </a>
    </div>
    <div className="flex flex-col justify-center lg:flex-row">
      <div className="lg:mr-32 lg:w-60">
        <Image alt="" src={foot} />
      </div>
      <div className="mt-5 leading-8 text-white lg:mt-20">
        <p>一个好的东西往往是说不清楚的，</p>
        <p>说得清楚的往往不是好东西</p>
      </div>
    </div>
    <div className="mt-20 flex flex-col items-center gap-y-6">
      <span className="text-sm text-white">© Copyright 2023 Jack Ma</span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
