import Image from 'next/image';
import {FC, memo} from 'react';
import buy1 from '../../images/buy1.png';
import buy2 from '../../images/buy2.png';
import buy3 from '../../images/buy3.png';
import buy4 from '../../images/buy4.png';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Buy: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Buy}>
      <h2 className="mb-10 text-center text-3xl font-bold text-white">如何购买</h2>
      <div className="mb-6 flex w-full flex-col-reverse rounded-md border border-solid border-white p-2 lg:mb-10 lg:flex-row lg:justify-between">
        <div className="lg:ml-10 lg:mt-10">
          <h3 className="mb-5 mt-5 text-2xl font-bold text-white">创建钱包</h3>
          <p className="leading-6 text-white">随便市面上的主流钱包都行，记住去他们的官网下载，防止被骗</p>
        </div>
        <div className="lg:w-50">
          <Image alt="" src={buy1} className="w-full" />
        </div>
      </div>
      <div className="mb-6 flex w-full flex-col-reverse rounded-md border border-solid border-white p-2 lg:mb-10 lg:flex-row-reverse lg:justify-between">
        <div className="lg:mt-10">
          <h3 className="mb-5 mt-5 text-2xl font-bold text-white">存入一部分eth</h3>
          <p className="leading-6 text-white lg:w-2/3">
            记住我们是arb链，需要存入arb上的eth， 可以去交易所购买，也可以从其他钱包 转入
          </p>
        </div>
        <div className="lg:w-50">
          <Image alt="" src={buy2} className="w-full" />
        </div>
      </div>
      <div className="mb-6 flex w-full flex-col-reverse rounded-md border border-solid border-white p-2 lg:mb-10 lg:flex-row lg:justify-between">
        <div className="lg:ml-10 lg:mt-10">
          <h3 className="mb-5 mt-5 text-2xl font-bold text-white">使用uniswap</h3>
          <p className="leading-6 text-white">要进入官方的uniswap，将pogai的合约 地址输入，随后确认签名</p>
        </div>
        <div className="lg:w-50">
          <Image alt="" src={buy3} className="w-full" />
        </div>
      </div>
      <div className="flex w-full flex-col-reverse rounded-md border border-solid border-white p-2 lg:mb-10 lg:flex-row-reverse lg:justify-between">
        <div className="lg:mr-40 lg:mt-10">
          <h3 className="mb-5 mt-5 text-2xl font-bold text-white">买它</h3>
          <p className="leading-6 text-white ">没有滑点，除非市场剧烈波动， 你可以根据实际情况调整</p>
        </div>
        <div className="lg:w-50">
          <Image alt="" src={buy4} className="w-full" />
        </div>
      </div>
    </Section>
  );
});

Buy.displayName = 'Buy';
export default Buy;
