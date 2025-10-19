import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Music", imgSrc: "https://images.unsplash.com/photo-1560111713-61bd99fb9149?auto=format&fit=crop&w=250&h=200", link: "/music" },
    { title: "Reading", imgSrc: "https://images.unsplash.com/photo-1736245728771-32cf62813c1b?auto=format&fit=crop&w=250&h=200", link: "/reading" },
    { title: "Blogs", imgSrc: "https://images.unsplash.com/photo-1623003947802-7d2773184310?auto=format&fit=crop&w=250&h=200", link: "/blogs" },
    { title: "Contact Me", imgSrc: "https://images.unsplash.com/photo-1690500109779-f7d612f3095f?auto=format&fit=crop&w=250&h=200", link: "/contact-me" }
  ],
  developer: [
    { title: "Music", imgSrc: "https://images.unsplash.com/photo-1607723619307-260d7a1e1f12?auto=format&fit=crop&w=250&h=200", link: "/music" },
    { title: "Reading", imgSrc: "https://images.unsplash.com/photo-1641489711538-94231d0976da?auto=format&fit=crop&w=250&h=200", link: "/reading" },
    { title: "Blogs", imgSrc: "https://images.unsplash.com/photo-1614064642261-3ccbfafa481b?auto=format&fit=crop&w=250&h=200", link: "/blogs" },
    { title: "Certifications", imgSrc: "https://images.unsplash.com/photo-1582648872106-71a64a70af6d?auto=format&fit=crop&w=250&h=200", link: "/certifications" },
    { title: "Contact Me", imgSrc: "https://images.unsplash.com/photo-1555852224-2a3e675fc47e?auto=format&fit=crop&w=250&h=200", link: "/contact-me" }
  ],
  stalker: [
    { title: "Reading", imgSrc: "https://images.unsplash.com/photo-1647575211406-ae6c9d4d2553?auto=format&fit=crop&w=250&h=200", link: "/reading" }, 
    { title: "Blogs", imgSrc: "https://images.unsplash.com/photo-1555066663-745afd13cd03?auto=format&fit=crop&w=250&h=200", link: "/blogs" },
    { title: "Contact Me", imgSrc: "https://images.unsplash.com/photo-1602405384104-9fff000d9f93?auto=format&fit=crop&w=250&h=200", link: "/contact-me" }
  ],
  adventurer: [
    { title: "Music", imgSrc: "https://images.unsplash.com/photo-1614727187346-ec3a009092b0?auto=format&fit=crop&w=250&h=200", link: "/music" },
    { title: "Reading", imgSrc: "https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?auto=format&fit=crop&w=250&h=200", link: "/reading" },
    { title: "Certifications", imgSrc: "https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&w=250&h=200", link: "/certifications" },
    { title: "Contact Me", imgSrc: "https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?auto=format&fit=crop&w=250&h=200", link: "/contact-me" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
