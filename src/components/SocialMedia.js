import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const SocialMedia = () => {
  return (
    <div className="mb-1">
      <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
        <FaFacebook className="inline h-5 w-5 text-white hover:text-primary transition duration-300" />
      </a>
      <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
        <FaTwitter className="inline h-5 w-5 text-white hover:text-primary transition duration-300" />
      </a>
      <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
        <FaInstagram className="inline h-5 w-5 text-white hover:text-primary transition duration-300" />
      </a>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
        <FaLinkedin className="inline h-5 w-5 text-white hover:text-primary transition duration-300" />
      </a>
    </div>
  );
};
