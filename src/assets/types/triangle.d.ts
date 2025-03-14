import type ICanvasTriangle from "./canvas-triangle";

export default interface ITriangle extends ICanvasTriangle {
  isValid: boolean,
  circumscribedRadius: number,
  inscribedRadius: number
}