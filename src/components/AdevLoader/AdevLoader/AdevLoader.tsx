import { motion } from "framer-motion";
import "./AdevLoader.css";
function AdevLoader() {
  return (
    <div className="loader-a">
      <div className="container-view">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 5 }}
        >
          <div className="text-center">
            <p>welcome viewer</p>
          </div>
          <div className="secondry-text">
            <p>please Wait...</p>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="loading-page"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 3.5 }}
      >
        <svg
          id="svg-a"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path d="M318.4 16l-161 480h77.5l25.4-81.4h119.5L405 496h77.5L318.4 16zm-40.3 341.9l41.2-130.4h1.5l40.9 130.4h-83.6zM640 405l-10-31.4L462.1 358l19.4 56.5L640 405zm-462.1-47L10 373.7 0 405l158.5 9.4 19.4-56.4z" />
        </svg>
        
        <div className="name-container">
          <motion.div
            className="logo-name"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            {"</>"}Ahmed Dev
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default AdevLoader;
