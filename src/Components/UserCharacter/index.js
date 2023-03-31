import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, transformCharacterData } from '../../constants';
import CharacterCreation from '../../utils/CharacterCreation.json';

export const UserCharacter = ({ contract }) => {

  const [gameContract, setGameContract] = useState(null);
  const [fstName, setFstName] = useState('');
  const [lstName, setLstName] = useState('');

  const handleFstNameChange = (event) => {
    setFstName(event.target.value);
  };

  const handleLstNameChange = (event) => {
    setLstName(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
        if (gameContract) {
            event.preventDefault();
            const mintTxn = await gameContract.createRandomCharacter(fstName, lstName);
            await mintTxn.wait();
            console.log('mintTxn:', mintTxn);
    }

  } catch (error) {
    console.warn('MintCharacterAction Error:', error);
  }}
  useEffect(() => {
    const { ethereum } = window;
  
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const gameContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CharacterCreation.abi,
        signer
      );
  
      /*
       * This is the big difference. Set our gameContract in state.
       */
      setGameContract(gameContract);
    } else {
      console.log('Ethereum object not found');
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={fstName} onChange={handleFstNameChange} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lstName} onChange={handleLstNameChange} />
      </label>
      <button type="submit">Create Character</button>
    </form>
  );
};