import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaUserShield,
  FaBell,
  FaTaxi,
  FaBook,
} from "react-icons/fa";
// import components
import LiveLocation from "./quickActions/LiveLocation";
import FakeCall from "./quickActions/FakeCall";
import AddContact from "./quickActions/AddContact";
// import SafetyAlertButton from "./quickActions/SafetyAlertButton";
import SafeRideBooking from "./quickActions/SafeRideBooking";
import SelfDefenseGuide from "./quickActions/SelfDefenseGuide";
import { useState } from "react";

const actions = [
  {
    id:'fk',
    label: "Fake Call",
    icon: <FaPhone className="text-3xl text-[#FF3B3F]" />,
    page: <FakeCall />,
  },
  {
    id:'sll',
    label: "Share Live Location",
    icon: <FaMapMarkerAlt className="text-3xl text-[#FF3B3F]" />,
    page: <LiveLocation />,
  },
  {
    id:'emc',
    label: "Emergency Contacts",
    icon: <FaUserShield className="text-3xl text-[#FF3B3F]" />,
    page: <AddContact/>,
  },
  {
    id:'sfal',
    label: "Safety Alerts",
    icon: <FaBell className="text-3xl text-[#FF3B3F]" />,
    page: <SafeRideBooking />,
  },
  {
    id:'srbook',
    label: "Safe Ride Booking",
    icon: <FaTaxi className="text-3xl text-[#FF3B3F]" />,
    page: <SafeRideBooking />,
  },
  {
    id:'sdg',
    label: "Self-Defense Guide",
    icon: <FaBook className="text-3xl text-[#FF3B3F]" />,
    page: <SelfDefenseGuide />,
  },
];

export default function QuickActionsCarousel() {
// chech which action/component is currently active
const [activeComponent, setActiveComponent]=useState(null)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#2C2C2C]">
        Quick Actions
      </h2>
      {
        activeComponent?(
          <div
          className="bg-white p-6 rounded-xl shadow-lg">
          {
          actions.find(action => action.id === activeComponent)?.page
          }
          <button 
          onClick={()=>setActiveComponent(null)}
          className="mt-4 bg-[#FF3B3F] text-white px-4 py-2 rounded-lg"
          >
          Back to Actions
          </button>
          </div>
        ):(
           <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        className="pb-10"
      >
        {actions.map((action) => (
          <SwiperSlide key={action.id}>
               <div
              onClick={()=>setActiveComponent(action.id)}
              className="bg-white border border-[#FF3B3F] rounded-xl p-6 shadow-lg hover:shadow-xl cursor-pointer transition-transform transform hover:-translate-y-1 flex flex-col items-center text-center"
            >
              {action.icon}
              <p className="mt-4 font-medium text-[#2C2C2C] text-base">
                {action.label}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        )
      }
    </div>
  );
}
