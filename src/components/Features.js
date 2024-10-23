import React from 'react';
import IconAssemble from '../assets/assemble.png';
import IconMoney from '../assets/piggy-bank.png';
import IconPerson from '../assets/person.png';
import IconShield from '../assets/shield.png';

const FeatureCard = ({ icon, title, description, isLast = false }) => (
  <div className={`relative group bg-white transition hover:z-[1] hover:shadow-2xl ${isLast ? 'lg:hidden xl:block' : ''}`}>
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
      icon: IconMoney,
      title: "Don't Break The Bank",
      description: "Frames built with our high-quailty metal shouldn't be this cheap, but it is. Save yourself time and money now.",
    },
    {
      icon: IconAssemble,
      title: 'No Assembly Required',
      description: 'Experience the fastest assembly time for pocket door framing, saving you valuable time on every project.',
    },
    {
      icon: IconPerson,
      title: 'One-Person Team',
      description: 'Designed for easy assembly by a single person, increasing efficiency and reducing labor costs by up to 40%.',
    },
    {
      icon: IconShield,
      title: 'Durable Metal Frame',
      description: 'Built with high-grade metal, our frames offer 2x the strength and longevity compared to wooden alternatives.',
    },
  ];

  return (
    <div className="container m-auto py-10 px-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y rounded-xl overflow-hidden">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            isLast={index === features.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
