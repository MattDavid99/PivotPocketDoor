import React from 'react';
import { InstallationSteps } from './InstallationSteps';
import { SectionHeader } from './SectionHeader';
import wood6 from '../assets/Wood6-8ft.png';
import wood7 from '../assets/Wood-7ft.png';
import wood8 from '../assets/Wood-8ft.png';
import metal6 from '../assets/Metal-6-8ft.png';
import metal7 from '../assets/Metal-7ft.png';
import metal8 from '../assets/Metal-8ft.png';

const DimensionBlock = ({ sectionTitle, compatibilityText, title, dimensions, imageSrc }) => (
  <div className="flex flex-col md:flex-row items-center mb-12 md:mb-16 justify-between w-full max-w-full">
    <div className="flex-1 text-center md:text-left md:pr-8 flex flex-col justify-between" style={{ height: '100%' }}>
      <h3 className="text-2xl font-bold text-primary-dark mb-2">{sectionTitle}</h3>
      <h4 className="text-lg text-gray-700 mb-4">{compatibilityText}</h4>
      <h6 className="font-bold text-primary-dark mb-4 text-lg">{title}</h6>
      <div className="flex-grow flex flex-col justify-center" style={{ height: '100%' }}>
        {dimensions.map((dimension, index) => (
          <p key={index} className="mb-2 text-gray-700">
            {dimension}
          </p>
        ))}
      </div>
    </div>
    <div className="flex-1 flex justify-center md:justify-end">
      <img src={imageSrc} alt="Pocket Door Diagram" className="w-full max-w-md h-auto" style={{ borderRadius: '10px' }} />
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
      imageSrc: wood6, // Replace with actual path for each image
    },
    {
      sectionTitle: `WOOD ROUGH OPENING (7'0")`,
      compatibilityText: 'COMPATIBLE WITH JOHNSON POCKET DOOR HARDWARE',
      title: '(7\'-0" Tall Single Door)',
      dimensions: ['Finish Door Size: Single 2\'-0", 4\'-1" X 7\'-3"', 'Single 2\'-4", 4\'-9" X 7\'-3"', 'Single 2\'-6", 5\'-1" X 7\'-3"'],
      imageSrc: wood7,
    },
    {
      sectionTitle: `WOOD ROUGH OPENING (8'0")`,
      compatibilityText: 'COMPATIBLE WITH JOHNSON POCKET DOOR HARDWARE',
      title: '(8\'-0" Tall Single Door)',
      dimensions: ['Finish Door Size: Single 2\'-0", 4\'-1" X 8\'-3"', 'Single 2\'-4", 4\'-9" X 8\'-3"', 'Single 2\'-6", 5\'-1" X 8\'-3"'],
      imageSrc: wood8,
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
    },
    {
      sectionTitle: `METAL ROUGH OPENING (7'0")`,
      compatibilityText: 'COMPATIBLE WITH JOHNSON POCKET DOOR HARDWARE',
      title: '(7\'-0" Tall Single Door)',
      dimensions: ['Finish Door Size: Single 2\'-0", 4\'-1" X 7\'-3"', 'Single 2\'-4", 4\'-9" X 7\'-3"', 'Single 2\'-6", 5\'-1" X 7\'-3"'],
      imageSrc: metal7,
    },
    {
      sectionTitle: `METAL ROUGH OPENING (8'0")`,
      compatibilityText: 'COMPATIBLE WITH JOHNSON POCKET DOOR HARDWARE',
      title: '(8\'-0" Tall Single Door)',
      dimensions: ['Finish Door Size: Single 2\'-0", 4\'-1" X 8\'-3"', 'Single 2\'-4", 4\'-9" X 8\'-3"', 'Single 2\'-6", 5\'-1" X 8\'-3"'],
      imageSrc: metal8,
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
        <div className="flex flex-col items-center w-3/4 mx-auto">
          {singleDoorData.map((data, index) => (
            <DimensionBlock
              key={index}
              sectionTitle={data.sectionTitle}
              compatibilityText={data.compatibilityText}
              title={data.title}
              dimensions={data.dimensions}
              imageSrc={data.imageSrc}
            />
          ))}
        </div>
      </div>

      {/* Double Door Section */}
      <div className="max-w-full px-8">
        <div className="flex flex-col items-center w-3/4 mx-auto">
          {doubleDoorData.map((data, index) => (
            <DimensionBlock
              key={index}
              sectionTitle={data.sectionTitle}
              compatibilityText={data.compatibilityText}
              title={data.title}
              dimensions={data.dimensions}
              imageSrc={data.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
