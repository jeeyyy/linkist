import { Directive, Renderer, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLinker]'
})
export class LinkerDirective implements OnInit {

  @Input() appLinker: string = null;

  constructor(public el: ElementRef, public renderer: Renderer) { }

  ngOnInit() {
    if (this.appLinker) {
      const graphContainer: HTMLElement = document.getElementById('GRAPH_CONTAINER');
      const svgContainer: SVGElement = graphContainer.querySelector('svg.svg-container') as SVGElement;
      const currentElem: HTMLElement = this.el.nativeElement.querySelector(`article.node-base`);
      const parentElem: HTMLElement = document.getElementById(this.appLinker);

      // if (svgContainer.children.length < 1) {
        this._connect(currentElem, parentElem, svgContainer);
      // }
    }
  }

  private _connect(currentElem, parentElem, svgContainer) {
    const currentElemPos = this._getPos(currentElem, svgContainer);
    const parentElemPos = this._getPos(parentElem, svgContainer);
    const svgNS = "http://www.w3.org/2000/svg";
    let newpath = document.createElementNS(svgNS, "path");
    // newpath.setAttributeNS(null, "id", "pathIdD");  - need to set ID dynamically for easy css targetting of active states.
    newpath.setAttributeNS(null, 
      "d",
      "M" + currentElemPos.left + " " + currentElemPos.top + " " +
      "L" + parentElemPos.right + " " + parentElemPos.top + " " +
      "L" + parentElemPos.right + " " + parentElemPos.bottom + " " +
      "L" + currentElemPos.left + " " + currentElemPos.bottom + " " +
      "Z"
    );
    newpath.setAttributeNS(null, "fill", "black");
    svgContainer.appendChild(newpath);
  }

  private _getPos(el: Element, canvasElement: Element) {
    const canvasRect: ClientRect = canvasElement.getBoundingClientRect();
    const elRect: ClientRect = el.getBoundingClientRect();

    return {
      top: elRect.top - canvasRect.top,
      left: elRect.left - canvasRect.left,
      right: elRect.right - canvasRect.left,
      bottom: elRect.bottom - canvasRect.top
    };
  }

}
