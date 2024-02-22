const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirectMachine) {
    switch (isDirectMachine){
      case undefined:
      case true:
        this.isDirectMachine = true;
        break;
      default:
        this.isDirectMachine = false;
        break;
    }
  }

  encrypt(message, key) {
    return this.encryptDecrypt(message, key, true);
  }

  decrypt(message, key) {
    return this.encryptDecrypt(message, key, false);
  }

  encryptDecrypt(message, key, isDirection) {
    if (arguments.length < 2 ||
        typeof message !== 'string' ||
        typeof key !== 'string') throw new Error('Incorrect arguments!');

        let firstLetter = 'A'
        let numFirstLetter = firstLetter.charCodeAt()
        let lastLetter = 'Z'
        let numLastLetter = lastLetter.charCodeAt()
        let numberOfLetters = 26;
      
        let fullArray = Array(numberOfLetters).fill(2).map((e,i)=> String.fromCharCode(numFirstLetter + i))

        message = message.toUpperCase();
        key = key.toUpperCase();

        if (message.length > key.length) {
          key = key.padEnd(message.length, key)
        } else {
          key = key.slice(0, message.length)
        }

        let result = [];
        let keyIndex = -1;
        let numOfElInFullAlphabet = 0;

        if (isDirection) {
          for (let i = 0; i < message.length; i++) {
            if (message.charCodeAt(i) >= numFirstLetter && message.charCodeAt(i) <= numLastLetter) {
              keyIndex++;
              numOfElInFullAlphabet = (message.charCodeAt(i) + key.charCodeAt(keyIndex)) % numberOfLetters;
              result.push(fullArray[numOfElInFullAlphabet])
            } else {
              result.push(message[i])
            }
          }
        } else {
          for (let i = 0; i < message.length; i++) {
            if (message.charCodeAt(i) >= numFirstLetter && message.charCodeAt(i) <= numLastLetter) {
              keyIndex++;
              numOfElInFullAlphabet = (message.charCodeAt(i) + numberOfLetters - key.charCodeAt(keyIndex)) % numberOfLetters;
              result.push(fullArray[numOfElInFullAlphabet])
            } else {
              result.push(message[i])
            }
          }
        }

        return this.isDirectMachine ? result.join('') : result.reverse().join('')
    }
}

module.exports = {
  VigenereCipheringMachine
};
