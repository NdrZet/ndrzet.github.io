import React from 'react';
import './Interests.css';

interface InterestCardProps {
  title: string;
  items: string[];
  links?: { text: string; href: string }[];
  delay: number;
}

const InterestCard: React.FC<InterestCardProps> = ({ title, items, links, delay }) => (
  <div className="interest-card" style={{ animationDelay: `${delay}s` }}>
    <h3>{title}</h3>
    {items.map((item, index) => (
      <p key={index}>{item}</p>
    ))}
    {links && links.map((link, index) => (
      <p key={index}>
        <a href={link.href} target="_blank" rel="noopener noreferrer">
          {link.text}
        </a>
      </p>
    ))}
  </div>
);

const Interests: React.FC = () => {
  const interestCards = [
    {
      title: 'Interests',
      items: ['Cinema', 'Anime', 'Photography', 'Science'],
      delay: 0.2
    },
    {
      title: 'Favorite Movies & Anime',
      items: [
        'Interstellar (2014)',
        'The Intouchables (2011)',
        'The Wolf of Wall Street (2007)',
        'Attack on Titan (2013-2023)',
        'Parasyte: The Maxim (2014-2015)'
      ],
      delay: 0.4
    },
    {
      title: 'Favorite Fonts',
      items: [],
      links: [
        { text: 'TT Commons Pro', href: '#' },
        { text: 'Manrope', href: '#' },
        { text: 'Satoshi', href: '#' },
        { text: 'Inter', href: '#' },
        { text: 'Gilroy', href: '#' }
      ],
      delay: 0.6
    },
    {
      title: 'UX Principles & Design Systems',
      items: [],
      links: [
        { text: 'lawsofux.com', href: 'https://lawsofux.com' },
        { text: 'Spotify', href: '#' },
        { text: 'Material Design', href: '#' },
        { text: 'Atlassian Design', href: '#' }
      ],
      delay: 0.8
    }
  ];

  return (
    <section id="favorites_interests">
      <h2>Favorites & Interests</h2>
      <div className="interests-grid">
        {interestCards.map((card, index) => (
          <InterestCard
            key={index}
            title={card.title}
            items={card.items}
            links={card.links}
            delay={card.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default Interests;