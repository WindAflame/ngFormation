export abstract class GenericCrud<T> {

    protected data: Array<T> = new Array<T>();

    constructor(){}

    abstract add(item: T);
    abstract del(item: T);
    abstract getAll(): Array<T>;
}
