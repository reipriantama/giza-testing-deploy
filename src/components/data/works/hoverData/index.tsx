// import React, { useEffect, useState } from "react";
import brimoLogo from "../../../../assets/works/brimo/brimoLogo.webp";
import brimoMockup from "../../../../assets/works/brimo/brimoMockup.webp";
import brimoScreen from "../../../../assets/works/brimo/brimoScreen.webp";
import brimoUser from "../../../../assets/works/brimo/brimoUser.webp";
import codexLogo from "../../../../assets/works/codex/codexLogo.webp";
import codexMockup from "../../../../assets/works/codex/codexMockup.webp";
import codexScreen from "../../../../assets/works/codex/codexScreen.webp";
import codexUser from "../../../../assets/works/codex/codexUser.webp";
import rayaLogo from "../../../../assets/works/raya/rayaLogo.webp";
import rayaMockup from "../../../../assets/works/raya/rayaMockup.webp";
import rayaScreen from "../../../../assets/works/raya/rayaScreen.webp";
import rayaUser from "../../../../assets/works/raya/rayaUser.webp";
import sayurBoxLogo from "../../../../assets/works/sayurBox/sayurBoxLogo.webp";
import sayurBoxMockup from "../../../../assets/works/sayurBox/sayurBoxMockup.webp";
import sayurBoxScreen from "../../../../assets/works/sayurBox/sayurBoxScreen.webp";
import sayurBoxUser from "../../../../assets/works/sayurBox/sayurBoxUser.webp";

interface SliderData {
  id: number;
  images: string[];
}

export const hoverData: SliderData[] = [
  { id: 1, images: [brimoScreen, brimoLogo, brimoMockup, brimoUser] },
  { id: 2, images: [rayaScreen, rayaLogo, rayaMockup, rayaUser] },
  { id: 3, images: [codexScreen, codexLogo, codexMockup, codexUser] },
  {
    id: 4,
    images: [sayurBoxScreen, sayurBoxLogo, sayurBoxMockup, sayurBoxUser],
  },
];
