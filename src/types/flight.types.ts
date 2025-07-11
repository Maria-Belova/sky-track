export interface IFlightAirplane {
  image: string;
  name: string;
}

export interface IFlightAirline {
  flightNumber: string;
  country: string;
}

export interface IFlightRoute {
  speed: number;
  altitude: number;
}

export interface IFlightLocation {
  city: string;
  country: string;
  countryCode: string;
  timezone: string;
  code: string;
}

export interface IFlight {
  id: string;
  airplane: IFlightAirplane;
  route: IFlightRoute;
  logo: string;
  airline: IFlightAirline;
  aircraftReg: string;
  from: IFlightLocation;
  to: IFlightLocation;
  progress: number;
}
