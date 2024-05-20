// import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// import { useNavigate } from "react-router-dom";

// const Swiper = ({ items }) => {
//   console.log(items);

//   return (
//     <div className="text-white">
//       <SwiperComponent
//         slidesPerView={3}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//           el: "#custompagination",
//         }}
//         modules={[Autoplay, Pagination]}
//         className="hamkor container"
//         breakpoints={{
//           250: {
//             slidesPerView: 1,
//             spaceBetween: 40,
//             loop: true,
//           },
//           450: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//             loop: true,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 40,
//             loop: true,
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 25,
//             loop: true,
//           },
//         }}
//       >
//         <SwiperSlide key={items.uri.id}>
//           <img src={items.img} alt="images" />
//         </SwiperSlide>
//       </SwiperComponent>
//     </div>
//   );
// };

// export default Swiper;
