import { LightningElement, api} from 'lwc';

export default class Child extends LightningElement {
    @api playerList
    selectedplayer(event){
        this.dispatchEvent(new CustomEvent('player',{detail:event.target.name}))
    }
}