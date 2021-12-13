import React, { useState } from 'react';
import styles from './app.module.css';
import { EventList } from './components/eventList';
import { mockEvents } from './data/mockEvents';

export function App() {
  const [events, setEvents] = useState(mockEvents);

  const now = Date.now();
  const pastEvents = events.filter(({date}) => date < now)
  const futureEvents = events.filter(({date}) => date >= now);

  return (
    <div className={styles.app}>
      <EventList events={pastEvents} title="Past events"/>
      <EventList events={futureEvents} title="Future events"/>
    </div>
  );
}

export default App;
