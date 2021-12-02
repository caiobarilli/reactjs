import React, { useState } from "react";

import Modal from "./Components/UI/Modal";
import Header from "./Components/Layout/Header";
import Game from "./Components/Game/Game";
import LuckyNumbers from "./Components/LuckyNumbers/LuckyNumbers";
import GameProvider from "./Store/GameProvider";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const closeModalHandler = () => {
    return setModalIsVisible(false);
  };

  return (
    <GameProvider>
      {modalIsVisible && (
        <Modal
          title="Bingo"
          text="Escolha 6 números e aperte o botão JOGAR para iniciar"
          txtButton="Ok"
          onClick={closeModalHandler}
        />
      )}

      <Header />
      <LuckyNumbers />
      <Game />
    </GameProvider>
  );
}

export default App;
