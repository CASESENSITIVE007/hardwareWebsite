
import  {FaWhatsapp}  from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/917827505517" // Replace with your WhatsApp number (with country code, no + or spaces)
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
    >
      <FaWhatsapp size={70} />
    </a>
  );
};

export default WhatsappButton;
