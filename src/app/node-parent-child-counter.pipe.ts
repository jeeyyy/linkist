import { Pipe, PipeTransform } from '@angular/core';
import { IApp } from "./app.interface";

@Pipe({
  name: 'nodeParentChildCounter'
})
export class NodeParentChildCounterPipe implements PipeTransform {

  transform(nodes: IApp.Node[], args?: any): any {
    const hasParentNode = nodes.filter((node: IApp.Node) => {
      return node.parentNodeId && node.parentNodeId.length > 0;
    }).length > 0;
    if (hasParentNode) {
      // mutate each node object with index and count data
      const uniqueParentNodeIds = nodes.reduce((acc: any[], node: IApp.Node) => {
        if (acc.indexOf(node.parentNodeId) === -1) {
          acc.push(node.parentNodeId);
        }
        return acc;
      }, []).sort((a: string, b: string) => {
        return parseInt(a) - parseInt(b)
      });

      if (uniqueParentNodeIds && uniqueParentNodeIds.length) {

        const nodeParentChildCount = uniqueParentNodeIds.reduce((acc: any, id: any) => {
          const idCount = nodes.filter((node: IApp.Node) => {
            return node.parentNodeId && node.parentNodeId === id;
          }).length;
          acc[id] = idCount;
          return acc;
        }, {});

        const splits = uniqueParentNodeIds.reduce((acc: any, id: any) => {
          const items = nodes.filter((node: IApp.Node) => {
            if (node.parentNodeId && node.parentNodeId === id) {
              return node;
            }
          });
          if (items && items.length) {
            acc[id] = items;
          }
          // if (acc[id]) {
          //   acc[id].push(items);
          // } else {
          //   acc[id] = [].push(items);
          // }
          return acc;
        }, {});

        const returnNodes = Object.keys(splits).reduce((acc, key) => {
          let arr = splits[key];
          arr.forEach((item, index, arr) => {
            // mutate
            item[`nodeParentChildCount`] = nodeParentChildCount;
            item[`nodeParentChildIndex`] = index;
          });
          return [...acc, ...arr];
        }, []);
        return returnNodes;
      }
    } else {
      return nodes;
    }

  }




}
