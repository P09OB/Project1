import { MuniciElemObjt } from "./MuniciElemObj";
import { PlaceElemObj } from "./PlaceElemObj";

export type DeparElemObj = {
    id: number;
    img: string;
    title: string;
    description: string;
    mapImg: string;
    munici: MuniciElemObjt[];
    place: PlaceElemObj[];
  }
  