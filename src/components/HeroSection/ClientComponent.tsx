'use client';

import { FC } from 'react';

import CountUpNumber from '../CountUpNumber/CountUpNumber';

type Props = {
  heading1: React.ReactNode;
  section2: React.ReactNode;
};

const ClientComponent: FC<Props> = props => {
  const { heading1, section2 } = props;

  return (
    <section className="flex flex-col md:flex-row px-4 items-center gap-6 md:gap-12 container mx-auto justify-between">
      {/* Left Section */}
      <div className="md:py-10 w-full md:w-1/2 text-center md:text-left">
        {heading1}

        <div className="flex flex-wrap justify-center md:justify-between mt-10 gap-6">
          <div className="flex flex-col items-center">
            <p className="text-sm md:text-xl text-center">Basic Room</p>
            <CountUpNumber duration={5000} endValue={50} />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm md:text-xl text-center">Luxury Room</p>
            <CountUpNumber duration={5000} endValue={120} />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm md:text-xl text-center">Suite</p>
            <CountUpNumber duration={5000} endValue={60} />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        {section2}
      </div>
    </section>
  );
};

export default ClientComponent;
