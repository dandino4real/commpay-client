import React from 'react';

import Hero from './components/hero';
import WhyWeExist from './components/why-we-exist';
import Partners from './components/partners';
import HowWeHelp from './components/how-we-help';
import StackScrollCards from './components/stack-scroll-cards';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <WhyWeExist />
            <Partners />
            <HowWeHelp />
            <StackScrollCards />
        </>
    );
};

export default Home;
