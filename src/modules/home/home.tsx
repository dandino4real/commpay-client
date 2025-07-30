import React from 'react';

import Hero from './components/hero';
import WhyWeExist from './components/why-we-exist';
import Partners from './components/partners';
import HowWeHelp from './components/how-we-help';
import StackScrollCards from './components/stack-scroll-cards';
import UserSatisfactionSection from './components/user-satisfaction-section';
import IndustriesSection from './components/industries-section';
import WhoWeServe from './components/who-we-serve';
import HowItWorks from './components/how-it-works';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <WhyWeExist />
            <Partners />
            <HowWeHelp />
            <StackScrollCards />
            <WhoWeServe />
            <HowItWorks />
            <IndustriesSection />
            <UserSatisfactionSection />
        </>
    );
};

export default Home;
