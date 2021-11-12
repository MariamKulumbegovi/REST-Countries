import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './UseModal.module.css';

export const UseModal = ({ data }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    height: '100vh',
    overflowY: 'scroll',
    overflowX: 'hidden',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 1.5,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dependency = () => {
    if (data.independent == false) {
      return <li>not independent</li>;
    } else {
      return <li>Independent</li>;
    }
  };
  const landlocked = () => {
    if (data.landlocked == false) {
      return <li>This country has no lands locked</li>;
    } else {
      return <li>This country is partially recognized</li>;
    }
  };
  const languages = () => {
    if (data.languages) {
      const langs = data.languages;
      const array = Object.values(langs).join(', ');
      return <span>languages- {array}</span>;
    } else if (!data.languages) {
      return <li></li>;
    }
  };
  const currency = () => {
    if (data.currencies) {
      const curr = data.currencies;
      const curs = curr[Object.keys(curr)[0]];
      return (
        <li>
          Currency- {curs.name} {curs.symbol}
        </li>
      );
    } else if (!data.currencies) {
      return <li></li>;
    }
  };

  const unMembership = () => {
    if (data.unMember == false) {
      return <li>This country is not a member of UN</li>;
    } else {
      return <li>This country is a member of UN</li>;
    }
  };
  const border = () => {
    if (data.borders) {
      const bor = data.borders;
      const array = bor.join(', ');
      return array;
    } else if (!data.borders) {
      return <> </>;
    }
  };
  const timezones = () => {
    if (data.timezones) {
      const time = data.timezones;
      const array = time.join(', ');
      return array;
    } else if (!data.timezones) {
      return <> </>;
    }
  };
 

  return (
    <div>
      <Button onClick={handleOpen}>Detailed Information</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // className={styles.modal}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1 className={styles.textcenter}>
              {' '}
              <em> {data.name.official}</em>{' '}
              <img src={data.flags.svg} width="auto" height="auto" />
            </h1>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <ul className={styles.modalUl}>
                <li
                  className={`is-flex-direction-column is-align-items-center box ${styles.textcenter}`}
                >
                  <strong className={styles.aligncenter}>Coat of arms </strong>
                  <img src={data.coatOfArms.svg} width="auto" height="auto" />
                </li>
                <li>Area={data.area}km2</li>
                <li>Borders-{border()}</li>
                <li>Capital-{data.capital}</li>
                <li>Car Side-{data.car.side}</li>
                <li className="is-flex">Continent-{data.continents}</li>
                <li className="is-flex">Independent-{dependency()}</li>
                <li className="is-flex">
                  LandLocked(Partially recognized)-{landlocked()}
                </li>
                <li className="is-flex">{languages()}</li>
                <li className="is-flex">{currency()}</li>
                <li className="is-flex">Population-{data.population}</li>
                <li className="is-flex">Region -{data.region}</li>
                <li className="is-flex">Start of week -{data.startOfWeek}</li>
                <li className="is-flex">Status -{data.status}</li>
                <li className="is-flex">Subregion -{data.subregion}</li>
                <li className="is-flex">Timezones -{timezones()}</li>
                <li className="is-flex">UN membership-{unMembership()}</li>
              </ul>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
