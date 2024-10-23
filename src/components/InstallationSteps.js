import React from 'react';
import IconClean from '../assets/clean.png';
import IconConnect from '../assets/connect.png';
import IconSetting from '../assets/setting.png';
import IconWork from '../assets/work.png';
import IconFinish from '../assets/finish.png';

export const InstallationSteps = () => {
  const steps = [
    {
      number: 1,
      title: 'Essential Installation Requirement',
      description: 'To proceed with the installation, please ensure you have the Johnson 1500 Hardware Kit.',
      icon: IconClean,
      link: 'https://www.amazon.com/Johnson-Hardware-1500-Replacement-Kit/dp/B000BD8KGC/ref=sr_1_1?crid=32O92T4I0ZFOY&dib=eyJ2IjoiMSJ9.F5MBkbblGF6jQkNwUzB4lJOr0SynGbQ25Fi4BrXxn9SAq14RCVa46jbhGoCZ_RdzxKXkDAduzzL7Yx_M_t-SgnwQR47GxrSXHOR4zlJLebF93W2Djc4v3PGxn813gusldvSIg16YIrWjEa3ZHKUNC6EbisTUgxpJ4cn_nFUWd2n2R4nTzU7Lo8ibihW7Qmacau1sXjdbnfl9Ew6Jyb2olwCbL8GljiGOjzbwkZ1LZvgCiKPfI0vPwfuRGZQB4hNCylAP23p5FB9jrUuQP7pVrSJNkJ7w6Dse62iB_AYwnzc.4Bud9BSoJlw8UI1Q8fnbMvcf7c8AwqPjemzvhJ8Ll10&dib_tag=se&keywords=1500+series+plated+steel+pocket+door+replacement+hardware+set&qid=1721502596&s=hi&sprefix=1500+Series+Plated+S%2Ctools%2C160&sr=1-1',
    },
    {
      number: 2,
      title: 'Unbox and Pivot Open',
      description: 'Simply take the frame out of the box and pivot open the metal frame.',
      icon: IconSetting,
    },
    {
      number: 3,
      title: 'Prepare the Site',
      description:
        'Prepare the installation site by ensuring the area is clear and ready for installation and attach the Johnson hardware to the top post.',
      icon: IconWork,
    },
    {
      number: 4,
      title: 'Place Vertical Posts',
      description: 'Place the vertical posts to complete the sturdy frame structure.',
      icon: IconConnect,
    },
    {
      number: 5,
      title: 'Final Inspection',
      description: 'Perform a final inspection to ensure all components are securely fastened and aligned.',
      icon: IconFinish,
    },
  ];

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 lg:py-10 border rounded-lg mt-16 gap-10 bg-gray-50">
      <div className="text-center ">
        <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">Simple 5-Step Installation</h4>
      </div>
      <ul className="mx-auto mt-10 mb-4 grid grid-cols-1 gap-10 sm:mt-14 lg:mt-16 lg:grid-cols-5">
        {steps.map((step, index) => (
          <li key={step.number} className="flex-start group relative flex lg:flex-col">
            {index < steps.length - 1 && (
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-primary-lighter lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"></span>
            )}
            <div className="inline-flex h-10 w-10 font-bold shrink-0 items-center justify-center rounded-xl border border-primary-light bg-white transition-all duration-200 group-hover:border-primary group-hover:bg-primary-lighter">
              <img className="h-5 w-5 text-gray-600 " alt="Steps To Install" src={step.icon} />
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-6 text-gray-900 group-hover:text-stone-800">
              <h3 className=" text-xl font-bold before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                <span className="text-stone-600"> {step.number}. </span>
                {step.title}
              </h3>
              <h4 className="mt-2 text-base text-gray-600">
                {step.description}
                {step.link && (
                  <div>
                    <a href={step.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      (https://amazon....)
                    </a>
                  </div>
                )}
              </h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
