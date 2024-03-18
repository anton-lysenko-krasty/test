import { Paper } from "@mantine/core";

import { Country } from "../../interfaces";

import styles from './list.module.css';

interface ListProps {
  data: Country[];
}

export const List = (props: ListProps) => {
  const { data } = props;

  if (!data.length) {
    return (
      <Paper component="ul" shadow="md" withBorder p="sm" className={styles.list}>
        <li>
          No countries
        </li>
      </Paper>
    )
  }

  return (
    <Paper component="ul" shadow="md" withBorder p="sm" className={`container ${styles.list}`}>
        {data.map((item) => {
          const {flags, currencies, languages, maps, name, population, timezones = []} = item;
          const lang = languages ? Object.values(languages).join(', ') : 'Not provide';
          const timezone = timezones.join(', ');
          const currency = currencies ? Object.keys(currencies).join(', ') : '';

          return (
            <li key={name.official} className={styles.item}>
              <div className={styles.itemImage}>
                <img src={flags.svg} alt={flags.alt}/>

                <div>
                  {name.official}
                </div>
              </div>


              <div className={styles.infoBox}>
                <div className={styles.row}>
                  <span>Currency:</span>
                  <span>{currency}</span>
                </div>

                <div className={styles.row}>
                  <span>Languages:</span>
                  <span className="truncate">{lang}</span>
                </div>

                <div className={styles.row}>
                  <span>Population:</span>
                  <span>{population}</span>
                </div>

                <div className={styles.row}>
                  <span>Timezones:</span>
                  <span>{timezone}</span>
                </div>
              </div>

              <a href={maps.googleMaps} className={styles.maps} target="_blank">Maps</a>
            </li>
          )
        })}
    </Paper>
  )
}