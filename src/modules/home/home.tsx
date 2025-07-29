import React from 'react';

import Hero from './components/hero';
import WhyWeExist from './components/why-we-exist';
import Partners from './components/partners';
import HowWeHelp from './components/how-we-help';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <WhyWeExist />
            <Partners />
            <HowWeHelp />
        </>
    );
};

export default Home;
