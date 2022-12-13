import React from 'react';
import { Container } from 'react-bootstrap';

import Footer from '../../components/Layout/Components/Footer';
import CalendarPage from './Section/CalendarPage';
import ChampionPage from './Section/ChampionPage';
import NewsPage from './Section/NewsPage';
import PlayerPage from './Section/PlayersPage';
import SpecialsPage from './Section/SpecialsPage';
import TrophiesPage from './Section/TrophiesPage';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="mt-5">
        <ChampionPage />
      </section>
      <section className="my-5">
        <NewsPage />
      </section>
      <section className="container-calendar">
        <CalendarPage />
      </section>
      <Container>
        <PlayerPage />
      </Container>
      <section className="container-specials mt-5">
        <SpecialsPage />
      </section>
      <section className="container-trophies">
        <TrophiesPage />
      </section>
      <section className="my-5">
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
