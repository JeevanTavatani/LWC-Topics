import { LightningElement } from "lwc";

export default class App extends LightningElement {
  greeting = `World`;
  eventhandler(event){
    this.greeting = event.target.value;
  }
}
