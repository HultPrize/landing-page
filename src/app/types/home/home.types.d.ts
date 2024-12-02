export type Sponsor = {
  name: string;
  logo: {
    url: string;
    size: {
      width: number;
      height: number;
    };
  };
  url: string;
};

export type Mentor = {
  name: string;
  imageSrc: string;
  description: string;
};