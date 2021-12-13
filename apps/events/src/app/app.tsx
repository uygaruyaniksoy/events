import React, { useState } from 'react';
import styles from './app.module.css';
import { EventCreate } from './components/eventCreate';
import { EventList } from './components/eventList';
import { mockEvents } from './data/mockEvents';

export function App() {
  const [events, setEvents] = useState(mockEvents);

  const now = Date.now();

  const pastEvents = events.filter(({date}) => date < now)
    .sort(({date: date1}, {date: date2}) => date2 - date1);
  const futureEvents = events.filter(({date}) => date >= now)
    .sort(({date: date1}, {date: date2}) => date1 - date2);

  return (
    <div className={styles.app}>
      <EventCreate onEventCreate={(event) => setEvents(events.concat(event))}/>
      <div className={styles.row}>
        <EventList events={futureEvents} title="Future events"/>
        <EventList events={pastEvents} title="Past events"/>
      </div>
    </div>
  );
}

export default App;
