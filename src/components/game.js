import React from 'react';
import {makeGuess, generateAuralUpdate, restartGame} from './components/actions'
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import { hotColdReducer } from './reducers/reducer';

export default class Game extends React.Component {
  
  render() {
    return (
      <div>
        <Header/>
        <main role="main">
          <GuessSection />
          <StatusSection/>
          <InfoSection />
        </main>
      </div>
    );
  }
}

