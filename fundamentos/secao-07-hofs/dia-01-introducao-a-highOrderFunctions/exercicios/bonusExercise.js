const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  //Crie uma função que retorne o dano do dragão.
  //O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
  const dragonHit = () => {
    return Math.floor((Math.random() * 35) + 15);
  }

// Crie uma função que retorne o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorHit = () => {
    return Math.floor((Math.random() * warrior.strength * warrior.weaponDmg) + warrior.strength); 
}
//console.log(warriorHit())

// Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0.]

const mageFunction = () => {
    const objeto = {
        dano: Math.floor((Math.random() * mage.intelligence * 2) + mage.intelligence),
        mana: 15,
    };

    if (mage.mana < 15) {
        objeto.dano = 'Não possui mana suficiente'
        objeto.mana = 0
    }
    return objeto;
};

const gameActions = {
    turnoWarrior: (warriorHit) => {
        const dano = warriorHit;
        warrior.damage = dano;

        let dragonHealth = dragon.healthPoints;
        dragonHealth - dano;
    },
    turnoMage: (mageFunction) => {
        const dano = mageFunction;
        mage.damage = dano;
        mage.mana - 15;

        let dragonHealth = dragon.healthPoints;
        dragonHealth - dano;
    },
    turnoDragon: (dragonHit) => {
        const dano = dragonHit;
        dragon.damage = dano;

        let mageHealth = mage.healthPoints;
        let warriorHealth = warrior.healthPoints;
        mageHealth && warriorHealth - dano;
    },
    turnResults: () => battleMembers,
};
gameActions.turnoWarrior(warriorHit);
gameActions.turnoMage(mageFunction);
gameActions.turnoDragon(dragonHit);
console.log(gameActions.turnResults());