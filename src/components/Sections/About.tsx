import Image from 'next/image';
import {FC, memo} from 'react';
import aboutPng from '../../images/about.png';
import icon1 from '../../images/tl.png';
import icon2 from '../../images/tt.png';
import icon3 from '../../images/ma.png';
import icon4 from '../../images/a.png';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Link from 'next/link';

const About: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="mt-10 flex-1">
          <h2 className="mb-10 text-2xl font-bold text-white lg:text-3xl">关于我们</h2>
          <p className="opacity-85 leading-10 text-white">“医生，我眼睛近视了！” </p>
          <p className="opacity-85 leading-10 text-white">“说说具体近视到什么程度？”</p>
          <p className="opacity-85 leading-10 text-white">“我打开钱包看不见钱了！”</p>
        </div>
        <Image src={aboutPng} alt="" className="w-30 flex-1 lg:w-24" />
      </div>
      <div>
        <div className="mt-10 flex">
          <Link href="">
            <Image src={icon1} alt="" className="mr-5 h-10 w-10 lg:mr-8 lg:h-20 lg:w-20" />
          </Link>
          <Link href="">
            <Image src={icon2} alt="" className="mr-5 h-10 w-10 lg:mr-8 lg:h-20 lg:w-20" />
          </Link>
          <Link href="">
            <Image src={icon3} alt="" className="mr-5 h-10 w-10 lg:mr-8 lg:h-20 lg:w-20" />
          </Link>
          <Link href="">
            <Image src={icon4} alt="" className="h-10 w-10 lg:h-20 lg:w-20" />
          </Link>
        </div>
        <p className="mt-5 break-all leading-6 text-white">Arb合约地址：0x6fd58f5a2f3468e35feb098b5f59f04157002407</p>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
