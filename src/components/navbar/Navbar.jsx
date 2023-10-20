import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Gedi T
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/gedii.t" target="_blank">
            <img src="/facebook.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/gedi__t/" target="_blank">
            <img src="/instagram.png" alt="instagram" />
          </a>
          <a href="https://www.youtube.com/@gedi_t" target="_blank">
            <img src="/youtube.png" alt="youtube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
