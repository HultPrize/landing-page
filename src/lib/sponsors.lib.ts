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
    name: "WORB",
    logo: {
      url: "/worb.png",
      size: logoSizes.square,
    },
    url: "",
  },
  {
    name: "CEDIA",
    logo: {
      url: "/CEDIA.png",
      size: logoSizes.square,
    },
    url: "",
  },
  {
    name: "Chaskis",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/sponsors/chaskis.png",
      size: logoSizes.square,
    },
    url: "",
  },
  {
    name: "IMPAQTO",
    logo: {
      url: "/IMPAQTO.png",
      size: logoSizes.square,
    },
    url: "",
  },
  {
    name: "CITEC",
    logo: {
      url: "/citec.png",
      size: logoSizes.square,
    },
    url: "",
  },
  {
    name: "BYPROS",
    logo: {
      url: "/bypros.png",
      size: logoSizes.square,
    },
    url: "",
  },
  {
    name: "ETH Tricolor",
    logo: {
      url: "/ETH.png",
      size: logoSizes.square,
    },
    url: "",
  },
  {
    name: "DFH Community",
    logo: {
      url: "/dfh.png",
      size: logoSizes.square,
    },
    url: "",
  }
];

export const allies: Sponsor[] = [
  {
    name: "Facultad de Ciencias",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/strategic-allies/facultad-ciencias.png",
      size: logoSizes.square,
    },
    url: "https://ciencias.epn.edu.ec/",
  },
  {
    name: "Nova Club",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/strategic-allies/nova.png",
      size: logoSizes.square,
    },
    url: "https://www.novaclub.tech",
  },
  {
    name: "Club de Emprendimiento",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/strategic-allies/emprendimiento-politecnico.png",
      size: logoSizes.square,
    },
    url: "",
  },
  {
    name: "Imagen Sistemas",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/strategic-allies/imagen-sistemas.png",
      size: logoSizes.square,
    },
    url: "",
  },

];

export const partners: Sponsor[] = [
  {
    name: "Asociación de Estudiantes de la Facultad de Ciencias",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/partners/asociacion-ciencias.png",
      size: logoSizes.square,
    },
    url: "",
  },
  {
    name: "Asociación de Estudiantes de la Facultad de Ciencias Administrativas",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/partners/asociacion-ciencias-administrativas.png",
      size: logoSizes.square,
    },
    url: "",
  },
  {
    name: "Asociación de Estudiantes de Ingeniería de Sistemas",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/partners/asociacion-ingenieria-sistemas.png",
      size: logoSizes.square,
    },
    url: "",
  },
  {
    name: "Asociación de Estudiantes de la Facultad de Ingeniería Química",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/partners/asociacion-ingenieria-quimica.png",
      size: logoSizes.square,
    },
    url: "",
  },
  {
    name: "Federación de Estudiantes de la Escuela Politécnica Nacional",
    logo: {
      url: "https://hult-prize.s3.amazonaws.com/partners/fepon.png",
      size: logoSizes.square,
    },
    url: "",
  },
  {
    name: "JVM ",
    logo: {
      url: "/jvm.png",
      size: logoSizes.square,
    },
    url: "",
  },
];
