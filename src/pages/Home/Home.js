import React from 'react';
import Banner from './Banner'
import HomePageSection from './HomePageSection';
import Overview from './Overview';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Overview></Overview>
            <HomePageSection></HomePageSection>
        </div>
    );
};

export default Home;