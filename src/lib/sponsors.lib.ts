import { Sponsor } from "@/app/types";

const logoSizes = {
  square: {
    width: 170,
    height: 170,
  },
  horizontal: {
    width: 170,
    height: 85,
  },
  vertical: {
    width: 85,
    height: 175,
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
    url: "https://fis.epn.edu.ec",
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
    name: "Chaskis",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/sponsors/chaskis.svg",
      size: {
        width: 300,
        height: 300,
      },
    },
    url: "https://chaskis.tech/",
  },
];

export const allies: Sponsor[] = [
  {
    name: "Facultad de Ciencias",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/university/fc.jpeg",
      size: logoSizes.square,
    },
    url: "https://ciencias.epn.edu.ec/",
  },
  {
    name: "Nova Club",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/university/full.png",
      size: logoSizes.square,
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
  {
    name: "Imagen Sistemas",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/university/imagen-sistemas.png",
      size: logoSizes.horizontal,
    },
    url: "",
  },
];

export const partners: Sponsor[] = [
  {
    name: "Asociación de Estudiantes de la Facultad de Ciencias",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/university/aeeicef.jpeg",
      size: logoSizes.square,
    },
    url: "",
  },
  {
    name: "Asociación de Estudiantes de la Facultad de Ciencias Administrativas",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/university/aefca.jpeg",
      size: logoSizes.square,
    },
    url: "",
  },
  {
    name: "Asociación de Estudiantes de Ingeniería de Sistemas",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/university/aeis.jpeg",
      size: logoSizes.horizontal,
    },
    url: "",
  },
  {
    name: "Asociación de Estudiantes de la Facultad de Ingeniería Química",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/university/aeiq.png",
      size: logoSizes.square,
    },
    url: "",
  },
];
