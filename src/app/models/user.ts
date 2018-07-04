import { Bet } from './bet';
export class User {

    private bets = new Array<Bet>();

    constructor(
        public name: string,
        public highlight: boolean = false
    ) {

    }

    isHighlight(): boolean {
        return this.highlight;
    }

    public addBet(bet: Bet) {
    }

    public getBets(): Array<Bet> {
        return this.bets;
    }
}
