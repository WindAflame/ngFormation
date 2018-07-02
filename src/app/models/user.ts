export class User {

    constructor(
        public name: string,
        public active: boolean = false
    ) { }

    public getActive(): boolean { return this.active; }
}
