// components/CertificateSection.js
import React from 'react';
import Image from 'next/image'; // Import the Image component from next/image

const certificates = [
  { src: '/ostad.jpg', alt: 'Certificate 1', width: 400, height: 300 },
  { src: '/cit.jpg', alt: 'Certificate 2', width: 400, height: 300 },
//   { src: 'https://via.placeholder.com/400x300?text=Certificate+3', alt: 'Certificate 3', width: 400, height: 300 },
//   { src: 'https://via.placeholder.com/400x300?text=Certificate+4', alt: 'Certificate 4', width: 400, height: 300 },
];

const CertificateSection = () => {
  return (
    <div className="bg-black text-white py-10 px-4">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        CERTIFICATES
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {certificates.map((certificate, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <Image 
              src={certificate.src} 
              alt={certificate.alt} 
              width={certificate.width} 
              height={certificate.height} 
              className="w-full h-auto rounded-lg shadow-lg"
              layout="responsive"  // Ensures the image is responsive
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateSection;
