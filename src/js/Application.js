import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  
  class EmojiManager {
    constructor() {
        this.emojis = [];
        this.banana = "🍌";
        this.wrapperDiv = document.getElementById('emojis');
    }

    setEmojis(emojis) {
        this.emojis = emojis;
        this.clearEmojis();
        this.displayEmojis();
    }

    addBananas() {
        return this.emojis.map(emoji => emoji + this.banana);
    }

    clearEmojis() {
        this.wrapperDiv.innerHTML = '';
    }

    displayEmojis() {
        const monkeyBananas = this.addBananas();
        monkeyBananas.forEach(monkeyBanana => {
            const p = document.createElement('p');
            p.textContent = monkeyBanana;
            this.wrapperDiv.appendChild(p);
        });
    }
}
const em = new EmojiManager();
const monkeys = ['🐒', '🐵', '🦧'];
document.addEventListener('DOMContentLoaded', () => em.setEmojis(monkeys));
