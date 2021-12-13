import { DateTimePicker } from '@mui/lab';
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import styles from './eventCreate.module.css';
import { Event } from '../model/event';

export const EventCreate = ({onEventCreate}: { onEventCreate: (event: Event) => void }) => {
  const [date, setDate] = useState<number>(Date.now());
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const createEvent = () => {
    onEventCreate({
      name,
      address,
      description,
      date,
      location: {
        latitude,
        longitude
      },
    });
  }

  return <div className={styles.row}>
    <div className={styles.column}>
      <TextField label="Name" variant="outlined" onChange={(event) => setName(event.target.value)}/>
      <TextField label="Latitude" variant="outlined" type="number" onChange={(event) => setLatitude(Number(event.target.value))}/>
    </div>
    <div className={styles.column}>
      <TextField label="Address" variant="outlined" onChange={(event) => setAddress(event.target.value)}/>
      <TextField label="Longitude" variant="outlined" type="number" onChange={(event) => setLongitude(Number(event.target.value))}/>
    </div>
    <div className={styles.column}>
      <TextField label="Description" variant="outlined" multiline rows={5} onChange={(event) => setDescription(event.target.value)}/>
    </div>
    <div className={styles.column}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} variant="outlined"/>}
        label="Date picker"
        value={date}
        onChange={(newValue) => {
          setDate(newValue ?? Date.now());
        }}
      />
      <Button variant="contained" onClick={createEvent}>Create new event</Button>
    </div>
  </div>;
};
