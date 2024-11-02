import React from 'react';
import { InstallationSteps } from './InstallationSteps';
import { SectionHeader } from './SectionHeader';
import wood6 from '../assets/wood6.8-front.png';
import wood7 from '../assets/wood7-front.png';
import wood8 from '../assets/wood8-front.png';
import woodP6 from '../assets/wood6.8-perspective.png';
import woodP7 from '../assets/wood7-perspective.png';
import woodP8 from '../assets/wood8-perspective.png';
import metal6 from '../assets/metal6.8-front.png';
import metal7 from '../assets/metal7-front.png';
import metal8 from '../assets/metal8-front.png';
import metalP6 from '../assets/metal6.8-perspective.png';
import metalP7 from '../assets/metal7-perspective.png';
import metalP8 from '../assets/metal8-perspective.png';

const DimensionBlock = ({ sectionTitle, compatibilityText, title, dimensions, imageSrc, additionalImageSrc }) => (
  <div
    className="flex flex-col xl:flex-row items-center mb-12 xl:mb-16 justify-center xl:justify-between w-full max-w-full"
    // Changed from `md:flex-row` to `xl:flex-row` to ensure layout stacks vertically below 1535px
  >
    <div
      className="text-left flex flex-col justify-between"
      style={{ width: '100%', maxWidth: '600px' }}
      // Removed `xl:text-left` to center-align text for all screen sizes below 1535px
    >
      <h3 className="text-2xl font-bold text-primary-dark mb-2">{sectionTitle}</h3>
      <h4 className="text-lg text-gray-700 mb-4">{compatibilityText}</h4>
      <h6 className="font-bold text-primary-dark mb-4 text-lg">{title}</h6>
      <div className="flex-grow flex flex-col justify-center">
        {dimensions.map((dimension, index) => (
          <p key={index} className="mb-2 text-gray-700">
            {dimension}
          </p>
        ))}
      </div>
    </div>
    <div
      className="flex flex-col xl:flex-row justify-center xl:justify-end space-y-4 xl:space-y-0 xl:space-x-4 mt-4 xl:mt-0"
      // Changed to `xl:flex-row` to apply row layout only on screens wider than 1535px
    >
      <img src={imageSrc} alt="Pocket Door Diagram" className="w-full max-w-md h-auto" style={{ borderRadius: '10px' }} />
      <img
        src={additionalImageSrc}
        alt="Additional Pocket Door Diagram"
        className="w-full max-w-md h-auto"
        style={{ borderRadius: '10px' }}
      />
    </div>
  </div>
);

export const Installation = () => {
  const singleDoorData = [
    {
      sectionTitle: `WOOD ROUGH OPENING (6'8")`,
      compatibilityText: 'COMPATIBLE WITH JOHNSON POCKET DOOR HARDWARE',
      title: '(6\'-8" Tall Single Door)',
      dimensions: [
        'Finish Door Size: Single 2\'-0", 4\'-1" X 6\'-11"',
        'Single 2\'-4", 4\'-9" X 6\'-11"',
        'Single 2\'-6", 5\'-1" X 6\'-11"',
      ],
      imageSrc: wood6,
      additionalImageSrc: woodP6,
    },
    {
      sectionTitle: `WOOD ROUGH OPENING (7'0")`,
      compatibilityText: 'COMPATIBLE WITH JOHNSON POCKET DOOR HARDWARE',
      title: '(7\'-0" Tall Single Door)',
      dimensions: ['Finish Door Size: Single 2\'-0", 4\'-1" X 7\'-3"', 'Single 2\'-4", 4\'-9" X 7\'-3"', 'Single 2\'-6", 5\'-1" X 7\'-3"'],
      imageSrc: wood7,
      additionalImageSrc: woodP7,
    },
    {
      sectionTitle: `WOOD ROUGH OPENING (8'0")`,
      compatibilityText: 'COMPATIBLE WITH JOHNSON POCKET DOOR HARDWARE',
      title: '(8\'-0" Tall Single Door)',
      dimensions: ['Finish Door Size: Single 2\'-0", 4\'-1" X 8\'-3"', 'Single 2\'-4", 4\'-9" X 8\'-3"', 'Single 2\'-6", 5\'-1" X 8\'-3"'],
      imageSrc: wood8,
      additionalImageSrc: woodP8,
    },
  ];

  const doubleDoorData = [
    {
      sectionTitle: `METAL ROUGH OPENING (6'8")`,
      compatibilityText: 'COMPATIBLE WITH JOHNSON POCKET DOOR HARDWARE',
      title: '(6\'-8" Tall Single Door)',
      dimensions: [
        'Finish Door Size: Single 2\'-0", 4\'-1" X 6\'-11"',
        'Single 2\'-4", 4\'-9" X 6\'-11"',
        'Single 2\'-6", 5\'-1" X 6\'-11"',
      ],
      imageSrc: metal6,
      additionalImageSrc: metalP6,
    },
    {
      sectionTitle: `METAL ROUGH OPENING (7'0")`,
      compatibilityText: 'COMPATIBLE WITH JOHNSON POCKET DOOR HARDWARE',
      title: '(7\'-0" Tall Single Door)',
      dimensions: ['Finish Door Size: Single 2\'-0", 4\'-1" X 7\'-3"', 'Single 2\'-4", 4\'-9" X 7\'-3"', 'Single 2\'-6", 5\'-1" X 7\'-3"'],
      imageSrc: metal7,
      additionalImageSrc: metalP7,
    },
    {
      sectionTitle: `METAL ROUGH OPENING (8'0")`,
      compatibilityText: 'COMPATIBLE WITH JOHNSON POCKET DOOR HARDWARE',
      title: '(8\'-0" Tall Single Door)',
      dimensions: ['Finish Door Size: Single 2\'-0", 4\'-1" X 8\'-3"', 'Single 2\'-4", 4\'-9" X 8\'-3"', 'Single 2\'-6", 5\'-1" X 8\'-3"'],
      imageSrc: metal8,
      additionalImageSrc: metalP8,
    },
  ];

  return (
    <div className="container mx-auto px-4 pb-16">
      <SectionHeader
        subheading="See It in Action"
        heading="Pivot Pocket Door Frame"
        description="Smart Design, Easy Installation: Your Perfect Pocket Door Frame Awaits"
      />
      <InstallationSteps />

      {/* Single Door Section */}
      <div className="max-w-full px-8 mb-20 pt-10 mt-20">
        <div className="flex flex-col items-center w-full mx-auto">
          {singleDoorData.map((data, index) => (
            <DimensionBlock
              key={index}
              sectionTitle={data.sectionTitle}
              compatibilityText={data.compatibilityText}
              title={data.title}
              dimensions={data.dimensions}
              imageSrc={data.imageSrc}
              additionalImageSrc={data.additionalImageSrc}
            />
          ))}
        </div>
      </div>

      {/* Double Door Section */}
      <div className="max-w-full px-8">
        <div className="flex flex-col items-center w-full mx-auto">
          {doubleDoorData.map((data, index) => (
            <DimensionBlock
              key={index}
              sectionTitle={data.sectionTitle}
              compatibilityText={data.compatibilityText}
              title={data.title}
              dimensions={data.dimensions}
              imageSrc={data.imageSrc}
              additionalImageSrc={data.additionalImageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
