import { ChangeEvent, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Input, Loader, Paper } from "@mantine/core";
import { useDebouncedValue } from '@mantine/hooks';

import { List } from "./compoments";
import { getCountries } from "./api";

import styles from './app.module.css';

export default function App() {
  const [search, setSearch] = useState('')
  const [debounced] = useDebouncedValue(search, 200);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const { data = [], isLoading, isError } = useQuery({
    queryKey: ['countries', debounced],
    queryFn: () => getCountries(debounced),
    enabled: Boolean(debounced),
  })

  return (
    <div className="container">
      <div className={styles.controls}>
        <Input placeholder="Search country" value={search} onChange={handleSearch} />
      </div>

      {isError && (
        <Box c="red">
          Something was wrong!
        </Box>
      )}

      {isLoading ? (
        <Paper shadow="md" withBorder p="sm" className={styles.loader}>
          <Loader size={50} m="0 auto" />
        </Paper>
        ) : (
        <List data={data}  />
      )}
    </div>
  );
}
