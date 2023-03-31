const CONTRACT_ADDRESS = '0x0a7F8E9a6E7060AedF18F9F1436c418fdF0c0cc5';
const transformCharacterData = (characterData) => {
    return {
      fstName: characterData.fstName,
      lstName: characterData.lstName,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };
  const transformBossData = (characterData) => {
    return {
        name: characterData.name,
        imageURI: characterData.imageURI,
        hp: characterData.hp.toNumber(),
        maxHp: characterData.maxHp.toNumber(),
        attackDamage: characterData.attackDamage.toNumber(),
    };
  };
export { CONTRACT_ADDRESS, transformCharacterData, transformBossData };
