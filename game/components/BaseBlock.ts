export default class BaseBlock {

    public static emptyContainer: HTMLElement;
    public static rightContainer: HTMLElement;

    container: HTMLElement;
    name: string;
    draggingBlock!: BaseBlock;
    isDragging: boolean;
    id: string;

    left: number = 0;
    top: number = 0;

    draggingCLickOffsetX: number = 40;
    draggingCLickOffsetY: number = 40;
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.container = <HTMLElement>document.getElementById(id);
        this.container.addEventListener('mousedown', (e: MouseEvent) => { this.onMouseDown(e); });
        this.container.addEventListener('mouseup', (e: MouseEvent) => { this.onMouseUp(e); });
        document.addEventListener('mousemove', (e: MouseEvent) => { this.onMouseMove(e); });
        document.addEventListener('mouseup', (e: MouseEvent) => { this.onGlobalMouseUp(e); })
        this.isDragging = false;
    }

    private onMouseDown(event: MouseEvent): void {
        this.prepareDrag();
        this.isDragging = true;
        this.setPosition(event.pageX, event.pageY);
    }

    private onMouseUp(event: MouseEvent): void {
        this.disposeDraggingBlock();
        this.onGlobalMouseUp(event);
    }

    private onGlobalMouseUp(event: MouseEvent): void {
        if (this.isDragging) {
            this.destroyDraggingBlock();
            let isInside = this.isDraggingBlockInRightContainer(event.pageX, event.pageY);
            this.isDragging = false;
            if (isInside) {
                BaseBlock.rightContainer.appendChild(this.draggingBlock.container);
            }
        }
    }

    private onMouseMove(event: MouseEvent): void {
        if (this.isDragging) {
            this.setPosition(event.pageX, event.pageY);
        }
    }

    protected prepareDrag(): void { }

    private setPosition(x: number, y: number): void {
        this.draggingBlock.container.style.left = x - this.draggingCLickOffsetX + "px";
        this.draggingBlock.container.style.top = y - this.draggingCLickOffsetY + "px";
    }

    protected static createCopy(container: HTMLElement): HTMLElement {
        let newNode = container.cloneNode(true) as HTMLElement;
        newNode.id = this.name + "-copy";
        newNode.style.position = "absolute";
        newNode.style.zIndex = "1";
        BaseBlock.emptyContainer.style.zIndex = "1";
        BaseBlock.emptyContainer.appendChild(newNode);
        return newNode;
    }

    private destroyDraggingBlock() {
        var child = BaseBlock.emptyContainer.lastElementChild;
        while (child) {
            BaseBlock.emptyContainer.removeChild(child);
            child = BaseBlock.emptyContainer.lastElementChild;
        }
        BaseBlock.emptyContainer.style.zIndex = "-1";

    }

    private isDraggingBlockInRightContainer(mouseX: number, mouseY: number): boolean {

        let draggingStartX = mouseX - this.draggingCLickOffsetX;
        let draggingEndX = draggingStartX + this.container.clientWidth;

        let draggingStartY = mouseY - this.draggingCLickOffsetY;

        let rightContainerRect = BaseBlock.rightContainer.getClientRects()[0];
        let rightContainerStartX = rightContainerRect.x;
        let rightContainerEndX = rightContainerStartX + rightContainerRect.width;
        let rightContainerStartY = rightContainerRect.y;


        console.log(draggingStartX, draggingEndX, draggingStartY, rightContainerStartX, rightContainerEndX, rightContainerStartY);

        if (draggingStartX > rightContainerStartX && draggingEndX < rightContainerEndX && draggingStartY > rightContainerStartY) {
            return true;
        }
        return false;
    }

    private disposeDraggingBlock(): void {
        if (this.draggingBlock != null) {
            this.draggingBlock.dispose();
        }
    }

    private dispose(): void {

    }

}