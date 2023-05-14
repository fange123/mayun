import Image from 'next/image';
import {FC, memo} from 'react';
import img from '../../images/5.png';
import buy from '../../images/buy.png';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Token: FC = memo(() => {
  return (
    <Section className="bg-white" sectionId={SectionId.Token}>
      <div className="lg:flex">
        <div className="flex flex-col lg:flex-3 lg:pr-7">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#393946] lg:text-left">代币资料</h2>
          <p className="leading-8 text-[#393946]">代币机制：没有什么扯淡的机制，只有无机制才是最吊的</p>
          <p className="leading-8 text-[#393946]">
            怎么样分配的？98%空投给ARB地址不做任何预留，无私募，100%全流通，剩余的2%将用来添加流动性
          </p>
          <div className="mt-5">
            <p className="leading-8 text-[#393946]">
              合约地址:<span className="break-all text-[#f4510a]">0xDfcD9117eBcdE0D658eEdf0898419638F56B6980</span>
            </p>
            <p className="leading-8 text-[#393946]"> 代币总量:1000000000000</p>
          </div>
        </div>
        <div className="mt-5 lg:w-64 lg:flex-2">
          <Image alt="" src={img} />
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center lg:mt-10 lg:flex-row">
        <div className="mb-10">
          <Image alt="" src={buy} />
        </div>
        <button className="lg:w-50 inline-block w-full rounded-full bg-gradient-to-r from-green-500 to-blue-500 px-4 py-2 text-center text-white lg:ml-20">
          buy now
        </button>
      </div>
    </Section>
  );
});

Token.displayName = 'Token';
export default Token;
