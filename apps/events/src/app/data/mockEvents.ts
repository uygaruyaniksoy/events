import { Event } from '../model/event';

export const mockEvents: Event[] = [
  {
    name: 'Event 1',
    address: 'Address 1',
    date: Date.now() + 100000000,
    description: 'Some event desc 1',
    location: {latitude: 42, longitude: 54},
  },
  {
    name: 'Event 2',
    address: 'Address 2',
    date: Date.now() + 200000000,
    description: 'Some event desc 2',
    location: {latitude: 42, longitude: 54},
  },
  {
    name: 'Event 3',
    address: 'Address 3',
    date: Date.now() - 100000000,
    description: 'Some event desc 3',
    location: {latitude: 42, longitude: 54},
  },
  {
    name: 'Event 4',
    address: 'Address 4',
    date: Date.now() - 200000000,
    description: 'Some event desc 4',
    location: {latitude: 42, longitude: 54},
  },
];


