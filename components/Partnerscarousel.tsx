// components/PartnersCarousel.js
import React from 'react';
import Image from 'next/image';

const PartnersCarousel = () => {
  const partners = [
    { name: 'Libyana', logo: '/partners/Libyana.png' },
    { name: 'LPTIC', logo: '/partners/LPTIC.png' },
    { name: 'AL-Madar', logo: '/partners/Madar.png' },
    { name: 'Hatif Libya', logo: '/partners/Hatif-Libya.png' },
    // Add more partners as needed
  ];

  return (
    <section className="bg-white w-full overflow-hidden relative py-4">
      {/* Glowing blue borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-blue-500 shadow-[0_0_6px_1px_rgba(59,130,246,0.6)] z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500 shadow-[0_0_6px_1px_rgba(59,130,246,0.6)] z-10" />

      <div className="relative w-full h-[65px]">
        <div className="absolute flex animate-scroll gap-8 whitespace-nowrap">
          {partners.concat(partners).map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-[65px]"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={65}
                className="object-contain max-h-[65px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
