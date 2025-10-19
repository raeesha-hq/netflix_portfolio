import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaPassport, FaCode, FaBriefcase, FaCertificate, FaHandsHelping, FaProjectDiagram, FaEnvelope, FaMusic, FaBook } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Work Permit", imgSrc: "https://images.unsplash.com/photo-1579850996789-3537c09dc873?auto=format&fit=crop&w=250&h=200", icon: <FaPassport />, route: "/work-permit" },
    { title: "Skills", imgSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=250&h=200", icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: "https://images.unsplash.com/photo-1585484764802-387ea30e8432?auto=format&fit=crop&w=250&h=200", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Certifications", imgSrc: "https://images.unsplash.com/photo-1717251219562-5c2604fa1331?auto=format&fit=crop&w=250&h=200", icon: <FaCertificate />, route: "/certifications" },
    { title: "Recommendations", imgSrc: "https://images.unsplash.com/photo-1544033527-b192daee1f5b?auto=format&fit=crop&w=250&h=200", icon: <FaHandsHelping />, route: "/recommendations" },
    { title: "Projects", imgSrc: "https://images.unsplash.com/photo-1542222024-c39e2281f121?auto=format&fit=crop&w=250&h=200", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Contact Me", imgSrc: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?auto=format&fit=crop&w=250&h=200", icon: <FaEnvelope />, route: "/contact-me" }
  ],
  developer: [
    { title: "Skills", imgSrc: "https://images.unsplash.com/photo-1621323863489-0b9cf05548b6?auto=format&fit=crop&w=250&h=200", route: "/skills", icon: <FaCode /> },
    { title: "Certifications", imgSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=250&h=200", route: "/certifications", icon: <FaCertificate /> },
    { title: "Experience", imgSrc: "https://images.unsplash.com/photo-1618060931775-18ed14951776?auto=format&fit=crop&w=250&h=200", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Recommendations", imgSrc: "https://images.unsplash.com/photo-1549056077-d678d2129672?auto=format&fit=crop&w=250&h=200", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: "https://images.unsplash.com/photo-1565590915485-d1c21ebab1ac?auto=format&fit=crop&w=250&h=200", route: "/contact-me", icon: <FaEnvelope /> }
  ],
  stalker: [
    { title: "Recommendations", imgSrc: "https://images.unsplash.com/photo-1554936970-e49a373f6967?auto=format&fit=crop&w=250&h=200", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: "https://images.unsplash.com/photo-1453563391321-df71955e9289?auto=format&fit=crop&w=250&h=200", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Projects", imgSrc: "https://images.unsplash.com/photo-1414777397336-de92fc58f3de?auto=format&fit=crop&w=250&h=200", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Experience", imgSrc: "https://images.unsplash.com/photo-1516382799247-87df95d790b7?auto=format&fit=crop&w=250&h=200", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Certifications", imgSrc: "https://images.unsplash.com/photo-1456081101716-74e616ab23d8?auto=format&fit=crop&w=250&h=200", route: "/certifications", icon: <FaCertificate /> }
  ],
  adventurer: [
    { title: "Music", imgSrc: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=250&h=200", route: "/music", icon: <FaMusic /> },
    { title: "Projects", imgSrc: "https://images.unsplash.com/photo-1457365050282-c53d772ef8b2?auto=format&fit=crop&w=250&h=200", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Reading", imgSrc: "https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?auto=format&fit=crop&w=250&h=200", route: "/reading", icon: <FaBook /> },
    { title: "Contact Me", imgSrc: "https://images.unsplash.com/photo-1504192010706-dd7f569ee2be?auto=format&fit=crop&w=250&h=200", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Certifications", imgSrc: "https://images.unsplash.com/photo-1460186136353-977e9d6085a1?auto=format&fit=crop&w=250&h=200", route: "/certifications", icon: <FaCertificate /> }
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
      {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
