import type { IFlight } from '../../types/flight.types';

export const FLIGHTS: IFlight[] = [
  {
    id: 'TK143',
    logo: '/logos/turkish.svg',
    airline: { flightNumber: 'TK143', country: 'Turkey' },
    aircraftReg: 'TC-JFP',
    from: {
      city: 'Sofia',
      country: 'Bulgaria',
      countryCode: 'BG',
      timezone: 'UTC +3',
      code: 'SOF',
    },
    to: {
      city: 'Beijing',
      country: 'China',
      countryCode: 'CN',
      timezone: 'UTC +8',
      code: 'PEK',
    },
    airplane: {
      image: '/flights/turkish.png',
      name: 'Airbus A330',
    },
    route: {
      speed: 870,
      altitude: 10600,
    },
  },
  {
    id: 'RN1782',
    logo: '/logos/ryanair.svg',
    airline: { flightNumber: 'RN1782', country: 'Ireland' },
    aircraftReg: 'D-AISP',
    from: {
      city: 'Dublin',
      country: 'Ireland',
      countryCode: 'IE',
      timezone: 'UTC +1',
      code: 'DUB',
    },
    to: {
      city: 'Larnaca',
      country: 'Cyprus',
      countryCode: 'CY',
      timezone: 'UTC +3',
      code: 'LCA',
    },
    airplane: {
      image: '/flights/ryanair.png',
      name: 'Boeing 737-800',
    },
    route: {
      speed: 840,
      altitude: 11200,
    },
  },
  {
    id: 'S7124',
    logo: '/logos/s7.svg',
    airline: { flightNumber: 'S7124', country: 'Russia' },
    aircraftReg: 'RA-73415',
    from: {
      city: 'Nice',
      country: 'France',
      countryCode: 'FR',
      timezone: 'UTC +2',
      code: 'NCE',
    },
    to: {
      city: 'Tbilisi',
      country: 'Georgia',
      countryCode: 'GE',
      timezone: 'UTC +4',
      code: 'TBS',
    },
    airplane: {
      image: '/flights/s7.png',
      name: 'Airbus A320neo',
    },
    route: {
      speed: 860,
      altitude: 10900,
    },
  },
  {
    id: 'LX318',
    logo: '/logos/swiss.svg',
    airline: { flightNumber: 'LX318', country: 'Switzerland' },
    aircraftReg: 'HB-JHK',
    from: {
      city: 'Porto',
      country: 'Portugal',
      countryCode: 'PT',
      timezone: 'UTC +1',
      code: 'OPO',
    },
    to: {
      city: 'Baku',
      country: 'Azerbaijan',
      countryCode: 'AZ',
      timezone: 'UTC +4',
      code: 'GYD',
    },
    airplane: {
      image: '/flights/swiss.png',
      name: 'Airbus A220-300',
    },
    route: {
      speed: 830,
      altitude: 10700,
    },
  },
  {
    id: 'LH401',
    logo: '/logos/lufthansa.svg',
    airline: { flightNumber: 'LH401', country: 'Germany' },
    aircraftReg: 'D-AIXD',
    from: {
      city: 'Burgas',
      country: 'Bulgaria',
      countryCode: 'BG',
      timezone: 'UTC +3',
      code: 'BOJ',
    },
    to: {
      city: 'Muscat',
      country: 'Oman',
      countryCode: 'OM',
      timezone: 'UTC +4',
      code: 'MCT',
    },
    airplane: {
      image: '/flights/lufthansa.png',
      name: 'Airbus A350-900',
    },
    route: {
      speed: 890,
      altitude: 11300,
    },
  },
];
