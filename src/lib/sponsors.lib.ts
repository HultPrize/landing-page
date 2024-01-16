import { Sponsor } from "@/app/types";

const logoSizes = {
  square: {
    width: 125,
    height: 125,
  },
  horizontal: {
    width: 250,
    height: 125,
  },
  vertical: {
    width: 125,
    height: 250,
  },
};

export const hosts: Sponsor[] = [
  {
    name: "Escuela Politécnica Nacional",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/university/epn.png",
      size: logoSizes.square,
    },
    url: "https://www.epn.edu.ec",
  },
];

export const coHosts: Sponsor[] = [
  {
    name: "FIS",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/university/fis.png",
      size: logoSizes.square,
    },
    url: "https://fis.epn.edu.ec/index.php/es/",
  },
  {
    name: "FCA",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/university/fca.png",
      size: logoSizes.square,
    },
    url: "https://fca.epn.edu.ec/",
  },
];

export const sponsors: Sponsor[] = [
  {
    name: "Nova Club",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/university/full.png",
      size: logoSizes.horizontal,
    },
    url: "https://www.novaclub.tech",
  },
  {
    name: "Club de Emprendimiento",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/university/Propuesta+Logo+Club+Emprendimiento+EPN+wb+(1).png",
      size: logoSizes.square,
    },
    url: "",
  },
];

export const allies: Sponsor[] = [
  {
    name: "Imagen Sistemas",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/university/imagen-sistemas.png",
      size: logoSizes.horizontal,
    },
    url: "",
  },
];


export const externals: Sponsor[] = [
  {
    name: "Chaskis",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/sponsors/chaskis.svg",
      size: logoSizes.horizontal,
    },
    url: "https://chaskis.tech/",
  },
];