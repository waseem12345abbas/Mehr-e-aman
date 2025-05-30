import { FaPhoneAlt, FaUserShield, FaHospitalAlt, FaHandsHelping, FaFemale } from "react-icons/fa";

const helplines = [
  {
    title: "Emergency (1122)",
    number: "1122",
    icon: <FaPhoneAlt className="text-white text-2xl" />,
    color: "bg-red-500",
  },
  {
    title: "Women Helpline (1043)",
    number: "1043",
    icon: <FaFemale className="text-white text-2xl" />,
    color: "bg-pink-500",
  },
  {
    title: "Police (15)",
    number: "15",
    icon: <FaUserShield className="text-white text-2xl" />,
    color: "bg-blue-600",
  },
  {
    title: "Ambulance (15)",
    number: "15",
    icon: <FaHospitalAlt className="text-white text-2xl" />,
    color: "bg-green-600",
  },
  {
    title: "Women Helpdesk (1098)",
    number: "+1234567890",
    icon: <FaHandsHelping className="text-white text-2xl" />,
    color: "bg-purple-600",
  },
];

export default function HelplineShortcuts() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#2C2C2C]">
        Emergency Helpline Shortcuts
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {helplines.map((helpline, index) => (
          <a
            key={index}
            href={`tel:${helpline.number}`}
            onClick={()=> alert(`Call is made to ${helpline.title}`)}
            className={`rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex flex-col items-center justify-center p-6 text-white ${helpline.color}`}
          >
            <div className="mb-4 bg-white p-3 rounded-full">
              {helpline.icon}
            </div>
            <p className="text-lg font-semibold text-center">{helpline.title}</p>
            <p className="text-sm mt-1 opacity-90">Tap to Call</p>
          </a>
        ))}
      </div>
    </div>
  );
}
