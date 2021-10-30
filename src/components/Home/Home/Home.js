import React from 'react';
import Banner from '../Banner/Banner';
// import Instructors from '../Instructors/Instructors';
import OurTeams from '../OurTeams/OurTeams';
import Services from '../Services/Services';

const Home = () => {
      return (
            <div id="home">
                  <Banner></Banner>
                  <Services></Services>
                  <OurTeams></OurTeams>
            </div>
      );
};

export default Home;