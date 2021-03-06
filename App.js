import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)

  const newGameHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds)
  }

  let content

  if(userNumber && guessRounds <= 0) {
    content = <GameScreen
      userChoice={ userNumber }
      onGameOver={ gameOverHandler }
    />
  } else if(guessRounds > 0) {
    content = <GameOverScreen
      rounds={ guessRounds }
      userNumber={ userNumber }
      onRestart={ newGameHandler }
    />
  } else {
    content = <StartGameScreen onStartGame={ startGameHandler } />
  }

  return (
    <View style={ styles.screen } >
      <Header title="Guess a number!" />
      { content }
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
