import React from 'react';

const BenefitCard = ({ icon, title, description, scrollToHero }) => (
  <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-primary-darker/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg flex flex-col h-full">
    <span className="absolute top-10 z-0 h-20 w-20 rounded-full transition-all duration-300 group-hover:scale-[11]"></span>
    <div className="relative z-10 mx-auto max-w-md flex flex-col flex-grow">
      <span className="grid h-20 w-20 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:bg-primary">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {icon}
        </svg>
      </span>
      <div className="space-y-2 pt-5 text-base leading-7 text-gray-800 transition-all duration-300 group-hover:text-gray-800  flex-grow">
        <h1 className="text-2xl font-bold capitalize">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="pt-7 text-base font-semibold leading-7 mt-auto">
        <button onClick={scrollToHero} className="text-stone-800 transition-all duration-300 group-hover:text-gray-800 flex items-center">
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const benefits = [
  {
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
        />
      </>
    ),
    title: 'Versatility',
    description:
      'Adaptable for various construction projects, from residential to commercial applications. One system, endless possibilities.',
  },
  {
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </>
    ),
    title: 'Efficiency Boost',
    description:
      'Streamline your workflow and complete projects up to 70% faster with our easy-to-use system. Time is money, and we save you both.',
  },
  {
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </>
    ),
    title: 'Cost-Effective',
    description: 'Reduce labor costs by up to 60% and minimize material waste, significantly increasing your bottom line on every project.',
  },
];

export const BenefitsSection = ({ scrollToHero }) => (
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <p className="text-sm font-bold uppercase tracking-widest text-white/70">How we're different</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Why Choose Pivot Pocket Door Frames?</h2>
      <p className="mx-auto mt-4 text-base font-normal text-white/90 lg:text-lg lg:leading-8">
        Explore the key benefits that make Pivot Pocket Door Frames the smart choice for your construction projects.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-4 mt-4 xl:mt-6 xl:gap-6 md:grid-cols-2 xl:grid-cols-3">
      {benefits.map((benefit, index) => (
        <BenefitCard scrollToHero={scrollToHero} key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
      ))}
    </div>
  </div>
);
