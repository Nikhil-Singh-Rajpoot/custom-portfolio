
import profileData from "@/data/profile";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center text-sm text-gray-500">
      <div className="container mx-auto px-4">
        <p>
          &copy; {currentYear} {profileData.basics.name} • All Rights Reserved
        </p>
        <p className="mt-2">
          Built with React • Tailwind CSS • Framer Motion • Three.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
