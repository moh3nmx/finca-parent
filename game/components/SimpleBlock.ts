import BaseBlock from "./BaseBlock";

export default class SimpleBlock extends BaseBlock {

    public prepareDrag(): void {
        let copy = BaseBlock.createCopy(this.container);
        this.draggingBlock = new SimpleBlock(copy.id, this.name);
    }
}