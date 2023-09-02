import React from "react";
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import "swiper/css/pagination";
import "swiper/css";

const testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officia doloribus, blanditiis facere voluptate accusantium totam. Ipsam et quia accusantium voluptate hic reiciendis earum vero, officiis molestiae, nobis voluptas eius.",
    },

    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officia doloribus, blanditiis facere voluptate accusantium totam. Ipsam et quia accusantium voluptate hic reiciendis earum vero, officiis molestiae, nobis voluptas eius.",
    },

    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officia doloribus, blanditiis facere voluptate accusantium totam. Ipsam et quia accusantium voluptate hic reiciendis earum vero, officiis molestiae, nobis voluptas eius.",
    },

    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officia doloribus, blanditiis facere voluptate accusantium totam. Ipsam et quia accusantium voluptate hic reiciendis earum vero, officiis molestiae, nobis voluptas eius.",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials" >
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional work </span>
        <span>from me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}>
          {" "}
        </div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}>
          {" "}
        </div>
      </div>

      {/* slider */}
      <Swiper 
  
      slidesPerView={1} 
      pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
                
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default testimonials;
