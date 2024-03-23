class Card {
  constructor(frontHTML, backHTML) {
    this.frontHTML = frontHTML;
    this.backHTML = backHTML;
    this.id = Math.floor(Math.random() * 26637384983);
  }
}
export default Card;
