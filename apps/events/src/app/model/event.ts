export interface Location {
  latitude: number;
  longitude: number;
}

export interface Event {
  name: string;
  date: number;
  description: string;
  address: string;
  location: Location;
}

