import "./CompanyPartners.css";
import accentureImg from "../assets/images/accenture.png";
import amazonImg from "../assets/images/box-image-36.png";
import capegamiImg from "../assets/images/capegami.png";
import kpmgImg from "../assets/images/kpmg.png";

import arrowSvg from "../assets/images/arrow.svg";

const CompanyPartners = () => {
  return (
    <div className="company-partners">
      <div className="company-text">
        <h3>Trusted by MNC's globally</h3>
        <div className="gap-4">
          <h5>Learn More</h5>
          <img src={arrowSvg} />

        </div>
      </div>
      <div className="company-logo">
        <img src={accentureImg} />
        <img src={amazonImg} />
        <img src={capegamiImg} />
        <img src={kpmgImg} />
      </div>
    </div>
  );
};

export default CompanyPartners;
