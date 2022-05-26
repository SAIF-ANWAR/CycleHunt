import React from 'react';
import Banner from './Banner'
import HomePageSection from './HomePageSection';
import Overview from './Overview';
import Tools from './Tools/Tools';
import CustomerReview from './CustomerReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <CustomerReview></CustomerReview>
            <Overview></Overview>
            <HomePageSection></HomePageSection>
        </div>
    );
};

export default Home;