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
      url: "/logos/epn/dark.png",
      size: logoSizes.square,
    },
    url: "https://www.epn.edu.ec",
  },
];

export const coHosts: Sponsor[] = [
  {
    name: "Escuela Politécnica Nacional",
    logo: {
      url: "/logos/epn/dark.png",
      size: logoSizes.square,
    },
    url: "https://www.epn.edu.ec",
  },
  {
    name: "Escuela Politécnica Nacional",
    logo: {
      url: "/logos/epn/dark.png",
      size: logoSizes.square,
    },
    url: "https://www.epn.edu.ec",
  },
];

export const sponsors: Sponsor[] = [
  {
    name: "Nova Club",
    logo: {
      url: "/logos/allies/nova.png",
      size: logoSizes.horizontal,
    },
    url: "https://www.novaclub.tech",
  },
  {
    name: "Club de Emprendimiento",
    logo: {
      url: "/logos/epn/dark.png",
      size: logoSizes.square,
    },
    url: "",
  },
];

export const allies: Sponsor[] = [
  {
    name: "Escuela Politécnica Nacional",
    logo: {
      url: "/logos/epn/dark.png",
      size: logoSizes.square,
    },
    url: "https://www.epn.edu.ec",
  },
  {
    name: "Escuela Politécnica Nacional",
    logo: {
      url: "/logos/epn/dark.png",
      size: logoSizes.square,
    },
    url: "https://www.epn.edu.ec",
  },
  {
    name: "Escuela Politécnica Nacional",
    logo: {
      url: "/logos/epn/dark.png",
      size: logoSizes.square,
    },
    url: "https://www.epn.edu.ec",
  },
];
