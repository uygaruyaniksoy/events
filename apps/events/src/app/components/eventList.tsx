import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, Divider, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useState } from 'react';
import styles from './eventList.module.css';
import {Event} from '../model/event';

const formatDate = (date: number) => new Date(date).toLocaleString();

const EventItem = ({event}: { event: Event }) => {
  const [open, setOpen] = useState(false);

  return <>
    <ListItemButton onClick={() => setOpen(!open)}>
      <ListItemText primary={event.name} secondary={formatDate(event.date)}/>
      {open ? <ExpandLess/> : <ExpandMore/>}
    </ListItemButton>
    <Collapse in={open} timeout="auto" className={styles.collapsable}>
      <Typography variant="h6" gutterBottom component="div"> Description </Typography>
      <Typography variant="body2" gutterBottom> {event.description} </Typography>
      <Typography variant="h6" gutterBottom component="div"> Address </Typography>
      <Typography variant="body2" gutterBottom> {event.address} </Typography>
      <Typography variant="h6" gutterBottom component="div"> Coordinates </Typography>
      <Typography variant="body2" gutterBottom>{event.location.latitude} - {event.location.longitude}</Typography>
    </Collapse>
    <Divider/>
  </>;
};

export const EventList = ({events, title}: { events: Event[], title: string }) => {
  return <div>
    <Typography variant="h5" gutterBottom component="div"> {title} </Typography>
    <List className={styles.eventList}>
      {events.map((event) => <EventItem key={event.name} event={event}/>)}
    </List>
  </div>;
};

