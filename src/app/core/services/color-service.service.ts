import { Injectable } from '@angular/core';

export enum ColorTypes {
  BUG = "color-09",
  GRASS = "color-11",
  FIRE = "color-07",
  POISON = "color-05",
  WATER = "color-03",
  FLYING = "color-01",
  NORMAL = "",
  GHOST = "",
  ELECTRIC = "color-08",
  FIGHTING = "",
  DARK = "",
  PSYCHIC = "",
}

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }

  public returnCollor(type: string) {
    type = type.toUpperCase();

    switch (type) {
      case "BUG":
        return ColorTypes.BUG;
      case "GRASS":
        return ColorTypes.GRASS;
      case "FIRE":
        return ColorTypes.FIRE;
      case "POISON":
        return ColorTypes.POISON;
      case "WATER":
        return ColorTypes.WATER;
      case "FLYING":
        return ColorTypes.FLYING;
      case "NORMAL":
        return ColorTypes.NORMAL;
      case "GHOST":
        return ColorTypes.GHOST;
      case "ELECTRIC":
        return ColorTypes.ELECTRIC;
      default:
        return "FALSE";
    }
  }

}
