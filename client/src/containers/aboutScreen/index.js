// // import React, { useEffect, useRef } from "react";
// // import "aos/dist/aos.css";
// // import AOS from "aos";
// // import imageSrc1 from "../../assets/images/FPO.webp";
// // import imageSrc2 from "../../assets/images/WIN.webp";
// // import imageSrc3 from "../../assets/images/CONS.webp";

// // const AboutUsScreen = (t) => {
// //   useEffect(() => {
// //     AOS.init({ duration: 1200 });
// //   }, []);

// //   const secondSectionRef = useRef(null);
// //   const thirdSectionRef = useRef(null);

// //   const scrollToSecondSection = () => {
// //     if (secondSectionRef.current) {
// //       window.scrollTo({
// //         top: secondSectionRef.current.offsetTop,
// //         behavior: "smooth"
// //       });
// //     }
// //   };

// //   const scrollToThirdSection = () => {
// //     if (thirdSectionRef.current) {
// //       window.scrollTo({
// //         top: thirdSectionRef.current.offsetTop,
// //         behavior: "smooth"
// //       });
// //     }
// //   };

// //   return (
// //     <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
// //       <h3>
// //         Abouts Us
// //       </h3>
// //       <div>We at Wingrow Agritech facilitate direct interaction between consumers and farmers.
// //         Consumers get access to produce direct from farms which is much fresher and lasts longer, at reasonable prices.
// //       </div>
// //       <img
// //         src={imageSrc1}
// //         alt="About Us 1"
// //         data-aos="zoom-in"
// //         data-aos-offset="200"
// //         data-aos-duration="1200"
// //         style={{ width: "300px", height: "auto" }}
// //       />

// //       <div data-aos="fade-down" className='second_section_component_arrow'>
// //         <img src='https://cdn-icons-png.flaticon.com/512/545/545678.png' alt='img'
// //           className='second_section_img  p-4 mb-2' style={{ width: "100px", height: "auto" }} />
// //       </div>
// //       <div ref={secondSectionRef}>
// //         <img
// //           src={imageSrc2}
// //           alt="About Us 2"
// //           data-aos="zoom-in"
// //           data-aos-offset="400"
// //           data-aos-duration="1500"
// //           style={{ width: "300px", height: "auto" }}
// //         />
// //       </div>
// //       <div data-aos="fade-down" className='second_section_component_arrow'>
// //         <img src='https://cdn-icons-png.flaticon.com/512/2989/2989972.png' alt='img'
// //           className='second_section_img  p-4 mb-2' style={{ width: "100px", height: "auto" }} />
// //       </div>
// //       <div ref={thirdSectionRef}>
// //         <img
// //           src={imageSrc3}
// //           alt="About Us 3"
// //           data-aos="zoom-in"
// //           data-aos-offset="400"
// //           data-aos-duration="2000"
// //           style={{ width: "300px", height: "auto" }}
// //         />
// //       </div>



// //       <div data-aos="fade-right" className="transimg">
// //         <img src="./images/cherryleft.png" alt="Skytsunami" />
// //       </div>

// //       <div className='keyfeature_section'>
// //         <h2>{t('key_features')}</h2>
// //         <div className='keys'>
// //           <div className='keyfeature_container'>
// //             <ol className="listed">
// //               <li class="" data-aos="fade-left" className="h a">{t('key_feature1')}</li>
// //               <li class="" data-aos="fade-left" className="h a">{t("key_feature2")}</li>
// //               <li class="" data-aos="fade-left" className="h a">{t("key_feature3")}</li>
// //               <li class="" data-aos="fade-left" className="h a">{t("key_feature4")}</li>
// //             </ol>
// //           </div>
// //           <img src='./images/centerimagenew.png' alt='img' />
// //           <div className='keyfeature_container'>
// //             <ol class="listed">
// //               <li class="" data-aos="fade-right" className="h a">{t("key_feature5")}</li>
// //               <li class="" data-aos="fade-right" className="h a">{t("key_feature6")}</li>
// //               <li class="" data-aos="fade-right" className="h a">{t("key_feature7")}</li>
// //               <li class="" data-aos="fade-right" className="h a">{t("key_feature8")}</li>
// //             </ol>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AboutUsScreen;



// import React, { useEffect, useRef } from "react";
// import "aos/dist/aos.css";
// import AOS from "aos";
// import imageSrc1 from "../../assets/images/FPO.webp";
// import imageSrc2 from "../../assets/images/WIN.webp";
// import imageSrc3 from "../../assets/images/CONS.webp";

// import { Image } from 'primereact/image';
// import { useTranslation } from "react-i18next";


// const AboutUsScreen = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1200 });
//   }, []);

//   const secondSectionRef = useRef(null);
//   const thirdSectionRef = useRef(null);

//   const scrollToSecondSection = () => {
//     if (secondSectionRef.current) {
//       window.scrollTo({
//         top: secondSectionRef.current.offsetTop,
//         behavior: "smooth",
//       });
//     }
//   };

//   const scrollToThirdSection = () => {
//     if (thirdSectionRef.current) {
//       window.scrollTo({
//         top: thirdSectionRef.current.offsetTop,
//         behavior: "smooth",
//       });
//     }
//   };
//   const { t } = useTranslation();

//   return (
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//       <h3>About Us</h3>
//       <div>
//         We at Wingrow Agritech facilitate direct interaction between consumers and farmers.
//         Consumers get access to produce direct from farms which is much fresher and lasts longer, at reasonable prices.
//       </div>
//       <img
//         src={imageSrc1}
//         alt="About Us 1"
//         data-aos="zoom-in"
//         data-aos-offset="200"
//         data-aos-duration="1200"
//         style={{ width: "300px", height: "auto" }}
//       />

//       <div data-aos="fade-down" className="second_section_component_arrow">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/545/545678.png"
//           alt="arrow"
//           className="second_section_img p-4 mb-2"
//           style={{ width: "100px", height: "auto" }}
//         />
//       </div>
//       <div ref={secondSectionRef}>
//         <img
//           src={imageSrc2}
//           alt="About Us 2"
//           data-aos="zoom-in"
//           data-aos-offset="400"
//           data-aos-duration="1500"
//           style={{ width: "300px", height: "auto" }}
//         />
//       </div>
//       <div data-aos="fade-down" className="second_section_component_arrow">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/2989/2989972.png"
//           alt="arrow"
//           className="second_section_img p-4 mb-2"
//           style={{ width: "100px", height: "auto" }}
//         />
//       </div>
//       <div ref={thirdSectionRef}>
//         <img
//           src={imageSrc3}
//           alt="About Us 3"
//           data-aos="zoom-in"
//           data-aos-offset="400"
//           data-aos-duration="2000"
//           style={{ width: "300px", height: "auto" }}
//         />
//       </div>

//       {/* <div data-aos="fade-right" className="transimg">
//         <img src={imageSrc4} alt="Skytsunami"  style={{ width: "300px", height: "auto" }}/>
//       </div> */}

//       <div className="keyfeature_section">
//         <h2>{t ? t('key_features') : 'Key Features'}</h2>
//         <div className="keys">
//           <div className="keyfeature_container">
//             <div className="flex w-full" data-aos="fade-left">
//               <p  className="h a aos-init aos-animate bg-green-400 h-10 w-10">{t ? t('key_feature1') : 'Key Feature 1'}</p>
//               <p className="bg-red-400 text-center h-2 w-2 ml-5" >1</p>
//             </div>
//             <div className="flex w-full" data-aos="fade-left">
//               <p  className="h a aos-init aos-animate bg-green-400 h-10 w-10">{t ? t('key_feature2') : 'Key Feature 2'}</p>
//               <p className="bg-red-400 text-center h-2 w-2 ml-5" >2</p>
//             </div>
//             <div className="flex w-full" data-aos="fade-left">
//               <p  className="h a aos-init aos-animate bg-green-400 h-10 w-10">{t ? t('key_feature3') : 'Key Feature 3'}</p>
//               <p className="bg-red-400 text-center h-2 w-2 ml-5" >3</p>
//             </div>
//             <div className="flex w-full" data-aos="fade-left">
//               <p  className="h a aos-init aos-animate bg-green-400 h-10 w-10">{t ? t('key_feature4') : 'Key Feature 4'}</p>
//               <p className="bg-red-400 text-center h-2 w-2 ml-5" >4</p>
//             </div>
           
//           </div>
//           <Image src="https://www.wingrowmarket.com/images/centerimagenew.png" alt="Center" width="300" />
//           <div className="keyfeature_container">
//           <div className="flex w-full" data-aos="fade-left">
//               <p  className="h a aos-init aos-animate bg-green-400 h-10 w-10">{t ? t('key_feature5') : 'Key Feature 5'}</p>
//               <p className="bg-red-400 text-center h-2 w-2 ml-5" >5</p>
//             </div>

//             <div className="flex w-full" data-aos="fade-left">
//               <p  className="h a aos-init aos-animate bg-green-400 h-10 w-10">{t ? t('key_feature6') : 'Key Feature 6'}</p>
//               <p className="bg-red-400 text-center h-2 w-2 ml-5" >6</p>
//             </div>

//             <div className="flex w-full" data-aos="fade-left">
//               <p  className="h a aos-init aos-animate bg-green-400 h-10 w-10">{t ? t('key_feature7') : 'Key Feature 7'}</p>
//               <p className="bg-red-400 text-center h-2 w-2 ml-5" >7</p>
//             </div>

//             <div className="flex w-full" data-aos="fade-left">
//               <p  className="h a aos-init aos-animate bg-green-400 h-10 w-10">{t ? t('key_feature8') : 'Key Feature 8'}</p>
//               <p className="bg-red-400 text-center h-2 w-2 ml-5" >8</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsScreen;


import React, { useEffect, useRef } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Image } from 'primereact/image';
import { useTranslation } from "react-i18next";

import imageSrc1 from "../../assets/images/FPO.webp";
import imageSrc2 from "../../assets/images/WIN.webp";
import imageSrc3 from "../../assets/images/CONS.webp";

const AboutUsScreen = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const { t } = useTranslation();

  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h3>About Us</h3>
      <div>
        We at Wingrow Agritech facilitate direct interaction between consumers and farmers.
        Consumers get access to produce direct from farms which is much fresher and lasts longer, at reasonable prices.
      </div>
      <img
        src={imageSrc1}
        alt="About Us 1"
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-duration="1200"
        style={{ width: "300px", height: "auto" }}
      />

      <div data-aos="fade-down" className="second_section_component_arrow" onClick={() => scrollToSection(secondSectionRef)}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/545/545678.png"
          alt="arrow"
          className="second_section_img p-4 mb-2"
          style={{ width: "100px", height: "auto" }}
        />
      </div>
      <div ref={secondSectionRef}>
        <img
          src={imageSrc2}
          alt="About Us 2"
          data-aos="zoom-in"
          data-aos-offset="400"
          data-aos-duration="1500"
          style={{ width: "300px", height: "auto" }}
        />
      </div>
      <div data-aos="fade-down" className="second_section_component_arrow" onClick={() => scrollToSection(thirdSectionRef)}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2989/2989972.png"
          alt="arrow"
          className="second_section_img p-4 mb-2"
          style={{ width: "100px", height: "auto" }}
        />
      </div>
      <div ref={thirdSectionRef}>
        <img
          src={imageSrc3}
          alt="About Us 3"
          data-aos="zoom-in"
          data-aos-offset="400"
          data-aos-duration="2000"
          style={{ width: "300px", height: "auto" }}
        />
      </div>

      <div className="keyfeature_section  p-4 mb-2">
        <h2>{t ? t('key_features') : 'Key Features'}</h2>
        <div className="keys">
          <div className="keyfeature_container">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex w-full" data-aos="fade-left">
                <p className="h a aos-init aos-animate bg-green-400 h-10 w-10">
                  {t ? t(`key_feature${index + 1}`) : `Key Feature ${index + 1}`}
                </p>
                <p className="bg-red-400 text-center h-2 w-2 ml-5">{index + 1}</p>
              </div>
            ))}
          </div>
          <Image src="https://www.wingrowmarket.com/images/centerimagenew.png" alt="Center" width="300" />
          <div className="keyfeature_container">
            {[...Array(4)].map((_, index) => (
              <div key={index + 4} className="flex w-full" data-aos="fade-left">
                <p className="h a aos-init aos-animate bg-green-400 h-10 w-10">
                  {t ? t(`key_feature${index + 5}`) : `Key Feature ${index + 5}`}
                </p>
                <p className="bg-red-400 text-center h-2 w-2 ml-5">{index + 5}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsScreen;
