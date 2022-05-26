// con export defaul ho la possibilità di fare inport seza le graffe

export default class Pizza {

  /**
   * 
   * @param {string} name 
   * @param {string} ingredients // pomodoro|mozzarella|basilico
   */
  constructor(name, ingredients){ // il costruttore è obbligatiorio
    this.name = name;
    this.ingredients = ingredients.split('|');
  }

  /*** SETTER     */

  /**
   * 
   * @param {string} ingredient 
   */
  addIngredient(ingredient){
    this.ingredients.push(ingredient);
  }

  /**
   * 
   * @param {number} price 
   */
  setPrice(price){
    this.price = price;
  }



  /*** GETTER     */
  get isVegan(){
    const noVeganIngr = ['mozzarella','salsiccia','acciughe','salame','wurstel'];
    let vegan = true;
    this.ingredients.forEach(ingr => {
      if(noVeganIngr.includes(ingr)) vegan = false;
    })
    return vegan;
  }

  // i getter devono avere un return
  // questo getter è scritto così per best pratics perché tutte le volte che ho un metido che mi restituisce qualcosa  viene definito con getMiaRischiesta()
  getPriceDiscont(discount){
    return this.price -=  (this.price *= discount/100);
  }

  // i getter devono avere un return
  // questo getter è un vero e proprio getter
  get shortDescription(){
    const veganString = this.isVegan ? 'Pizza Vegana.' : '';
    const priceString = this.price !== undefined ? `Prezzo € ${this.price.toFixed(2)}` : '';
    return `Pizza ${this.name}. ${veganString} ${priceString}`;
  }

}