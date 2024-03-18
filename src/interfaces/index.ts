export interface Country {
  currencies?: {
    [k: string]: {
      name: string;
    }
  };
  flags: {
    svg: string;
    alt: string;
  };
  languages?: {
    [k: string]: string
  };
  maps: {
    googleMaps: string;
  };
  name: {
    official: string;
  };
  population: number;
  timezones: string[];
}