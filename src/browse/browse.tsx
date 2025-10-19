import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import redImage from '../images/red.png';
import yellowImage from '../images/yellow.png';
import './browse.css';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      name: "recruiter",
      image: blueImage,
      backgroundGif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzNrZnRsNnlrNmlxd2d0ejc3NzN0djMzNzBzcTB5bjV5Y3pnaW40ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/z1wBFKTXrQlpK/giphy.gif" // not sure
    },
    {
      name: "developer",
      image: greyImage,
      backgroundGif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2NteGx2bGVjYjlhOHg0dDNpd3RhdGRlaHRqejkzMHRsMDQ5cDcycCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WoD6JZnwap6s8/giphy.gif" // Stock Market
    },
    {
      name: "stalker",
      image: redImage,
      backgroundGif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2JldnZkZzZ4MzBpbW5idTMya3MxcHMwYzFrZDVjcHN4bHoyZzh0aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q5vOrjC34tp0rl1Ini/giphy.gif" // You Stalker
    },
    {
      name: "adventurer",
      image: yellowImage,
      backgroundGif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDltY3F2YnhndGh5dnBjMmRpczMweGFmMTJ0c3l3NzlkZTFyNnRkOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cEYFeE4wJ6jdDVBiiIM/giphy.gif" // Astronaught, Space
    },
  ];

  const handleProfileClick = (profile: { name: string; image: string; backgroundGif: string }) => {
    navigate(`/profile/${profile.name}`, { state: { profileImage: profile.image, backgroundGif: profile.backgroundGif } });
  };

  return (
    <div className="browse-container">
      <p className='who-is-watching'>Who's Watching?</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
