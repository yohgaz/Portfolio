import React from 'react';
import './NavigationDots.scss'

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
        {['accueil','mieux me connaître','compétences'].map((item, index) =>(
            <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: 'crimson' } : {}}
          />
        ))}
      </div>
    );
    
    export default NavigationDots;
    