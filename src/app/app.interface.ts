export namespace IApp {
    export interface Point {
        X: number;
        Y: number;
    }
    export interface Node {
        name: string;
        type: string;
        metaLabels: string;
        trades: string;
        revenue: string;
        displayOrder: string
        nodeId: string
        parentNodeId: string;
        nodeParentChildCount: any;
        nodeParentChildIndex: any;
    }
}