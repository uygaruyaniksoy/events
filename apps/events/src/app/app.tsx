import React, { useState } from 'react';
import styles from './app.module.css';
import { EventList } from './components/eventList';
import { mockEvents } from './data/mockEvents';

export function App() {
  const [events, setEvents] = useState(mockEvents);

  return (
    <div className={styles.app}>
      <EventList events={events} title="Past events"/>
      <EventList events={events} title="Future events"/>
    </div>
  );
}

export default App;
