export class User {

    constructor(
        public name: string,
        public hightlight: boolean = false
    ) { }

    public isHightlight(): boolean { return this.hightlight; }
}
