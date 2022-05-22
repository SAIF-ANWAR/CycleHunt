import React from 'react';
import Banner from './Banner'
import HomePageSection from './HomePageSection';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <HomePageSection></HomePageSection>
        </div>
    );
};

export default Home;