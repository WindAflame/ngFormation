export class Bet {

    // Montant du parie
    private $amount: number;
    // On parie sur la A
    private $teama: string;
    // On joue contre B
    private $teamb: string;

    constructor(amount: number, teama: string, teamb: string) {
        this.$amount = amount;
        this.$teama = teama;
        this.$teamb = teamb;
    };

}
