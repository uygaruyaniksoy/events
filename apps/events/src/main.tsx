import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import App from './app/app';

ReactDOM.render(
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <StrictMode>
      <App/>
    </StrictMode>
  </LocalizationProvider>,
  document.getElementById('root'),
);
