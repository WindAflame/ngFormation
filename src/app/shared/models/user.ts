import { Bet } from "./bet";

export class User {

    private $name: string;
    public highlight: string;
    private $bets: Array<Bet> = new Array<Bet>();

    constructor(name:string) {
        this.$name = name;
    }

    public addBet(bet: Bet) {
        this.$bets.push(bet);
    }

    public getBets(): Array<Bet> {
        return this.$bets;
    }

}
