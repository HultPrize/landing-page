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
