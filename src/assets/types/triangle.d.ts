import type ICanvasTriangle from "./canvas-triangle";

export default interface ITriangle extends ICanvasTriangle {
  isValid: boolean,
  scale: boolean,
  circumscribedRadius: number,
  inscribedRadius: number
}