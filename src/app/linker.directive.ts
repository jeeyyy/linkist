import { Directive, Renderer, ElementRef, Input, OnInit, HostListener } from '@angular/core';
import * as Bezier from 'bezier-js';
import { IApp } from "./app.interface";

@Directive({
  selector: '[appLinker]'
})
export class LinkerDirective implements OnInit {

  @Input() appLinker: IApp.Node;

  // @HostListener('window:resize', ['$event'])

  // onResize(event) {
  //   while (this._svgContainer.lastChild) {
  //     this._svgContainer.removeChild(this._svgContainer.lastChild);
  //   }

  //   if (this._currentElem && this._parentElem && this._svgContainer) {
  //     this._connect(this._currentElem, this._parentElem, this._svgContainer);
  //   }
  // }

  private _graphContainer: HTMLElement;
  private _svgContainer: SVGElement;
  private _currentElem: HTMLElement;
  private _parentElem: HTMLElement;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this._graphContainer = document.getElementById('GRAPH_CONTAINER');
    this._svgContainer = this._graphContainer.querySelector('svg.svg-container') as SVGElement;
    this._currentElem = this.el.nativeElement.querySelector(`article.node-base`);
    if (this.appLinker.parentNodeId) {
      this._parentElem = document.getElementById(`NODE_ID_` + this.appLinker.parentNodeId);
    }
    if (this._currentElem && this._parentElem && this._svgContainer) {
      this._connect(this._currentElem, this._parentElem, this._svgContainer);
    }
  }


  private _connect(currentElem, parentElem, svgContainer) {

    const currentElemPos = this._getPos(currentElem, svgContainer);
    const parentElemPos = this._getPos(parentElem, svgContainer,
      this.appLinker.nodeParentChildCount[this.appLinker.parentNodeId],
      this.appLinker.nodeParentChildIndex
    );

    const svgNS = "http://www.w3.org/2000/svg";
    let newpath = document.createElementNS(svgNS, "path");
    // newpath.setAttributeNS(null, "id", "pathIdD");  - need to set ID dynamically for easy css targetting of active states.
    newpath.setAttributeNS(null,
      "d",
      this._computeBezierAndGetSvg(
        {
          X: currentElemPos.left,
          Y: currentElemPos.top
        },
        {
          X: parentElemPos.right,
          Y: parentElemPos.top
        }
      )
      + ' ' +
      "L" + parentElemPos.right + " " + parentElemPos.bottom
      + " " +
      this._computeBezierAndGetSvg(
        {
          X: parentElemPos.right,
          Y: parentElemPos.bottom
        },
        {
          X: currentElemPos.left,
          Y: currentElemPos.bottom
        },
        true)
      + " " +
      "Z"
    );
    // if (svgContainer.children.length > 5) {
    newpath.setAttributeNS(null, "fill", "url(#linear)");
    // } else {
    // newpath.setAttributeNS(null, "fill", "transparent");
    // }
    svgContainer.appendChild(newpath);
  }

  private _computeBexierControlPoints = (p1: IApp.Point, p2: IApp.Point): IApp.Point[] => {
    const _tolerance = 10;
    const _firstPointOffset = 0.45;
    const _secondPointOffset = 0.55;

    const xDistance = Math.abs(p1.X - p2.X);
    const cp1x = p1.X > p2.X ? p2.X + (xDistance * _firstPointOffset) : p1.X + (xDistance * _firstPointOffset);
    const cp1y = p1.Y;
    const cp2x = p1.X > p2.X ? p2.X + (xDistance * _secondPointOffset) : p1.X + (xDistance * _secondPointOffset);
    const cp2y = p2.Y;
    return [
      {
        X: cp1x,
        Y: cp1y
      },
      {
        X: cp2x,
        Y: cp2y
      }
    ];
  }

  private _computeBezierAndGetSvg(p1: IApp.Point, p2: IApp.Point, stripMinPath: boolean = false): string {
    const cps = this._computeBexierControlPoints(p1, p2);
    const bCurve = new Bezier(
      p1.X, p1.Y,
      cps[0].X, cps[0].Y,
      cps[1].X, cps[1].Y,
      p2.X, p2.Y
    );
    const bCurveAsSvg = bCurve.toSVG();
    return !stripMinPath
      ? bCurveAsSvg
      : bCurveAsSvg.substr(bCurveAsSvg.indexOf('C'));
  }


  private _getPos(el: Element, canvasElement: Element, count?, index?) {
    const canvasRect: ClientRect = canvasElement.getBoundingClientRect();
    const elRect: ClientRect = el.getBoundingClientRect();

    const left = elRect.left - canvasRect.left; // x1
    const top = elRect.top - canvasRect.top; // y1

    const right = elRect.right - canvasRect.left; // x2
    const bottom = elRect.bottom - canvasRect.top; // y2 

    const nodeHeight = bottom - top;

    return {
      left: elRect.left - canvasRect.left, // x1
      top: index && count
        ? top + ((nodeHeight / count) * index)
        : top, // y1

      right: elRect.right - canvasRect.left, // x2
      bottom: index && count
        ? top + ((nodeHeight / count) * (index + 1))
        : bottom// y2
    };
  }

}
