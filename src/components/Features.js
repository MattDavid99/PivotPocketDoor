import React from 'react';
import IconAssemble from '../assets/assemble.png';
import IconPerson from '../assets/person.png';
import IconShield from '../assets/shield.png';

const FeatureCard = ({ icon, title, description }) => (
  <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
    <div className="relative p-6 space-y-6">
      <img src={icon} className="w-10" width="512" height="512" alt={`${title} icon`} />
      <div className="space-y-2">
        <h5 className="text-xl text-gray-900 font-bold transition group-hover:text-primary">{title}</h5>
        <p className="text-base text-gray-900">{description}</p>
      </div>
    </div>
  </div>
);

export const FeaturesSection = () => {
  const features = [
    {
      icon: IconShield,
      title: 'The Strongest',
      description:
        'Built tough to last. Our reinforced metal frame provides unmatched durability and strength for any project. Invest in the frame that holds up under pressure, ensuring a solid foundation every time.',
    },
    {
      icon: IconAssemble,
      title: 'The Fastest',
      description:
        'Get the job done quicker. Our frame is designed for rapid assembly, saving you valuable time. Simplify your workflow and reduce labor costs without sacrificing quality or precision.',
    },
    {
      icon: IconPerson,
      title: 'THE BEST',
      description:
        'Top quality at a competitive price. Experience premium design and performance without compromise. Elevate your projects with the frame crafted for reliability and aesthetic appeal.',
    },
  ];

  return (
    <div className="container m-auto py-10 px-3">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 divide-x divide-y rounded-xl overflow-hidden">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  );
};
