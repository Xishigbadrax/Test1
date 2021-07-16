import React, { useState, useEffect } from "react";
import css from "../styles/Home.module.css";
import { MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Sum from "./components/sum";

export default function Home() {
  const [Aimag, setAimag] = useState(null);

  useEffect(() => {
    console.log("===>" + Aimag);
  }, [Aimag]);

  return (
    <div className={css.cont}>
      <form className={css.back}>
        <Grid
          spacing={2}
          container
          className={css.des}
          direction="column"
          alignItems="center"
        >
          <Grid xs={12} item>
            <InputLabel>Аймаг:</InputLabel>
            <Select displayEmpty onChange={(e) => setAimag(e.target.value)}>
              <MenuItem disabled>Сонгох...</MenuItem>
              <MenuItem value="Arhangai">Архангай</MenuItem>
              <MenuItem value="Hentii">Хэнтий</MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <Sum aimagName={Aimag} />
          </Grid>

          <Grid item>
            <Button variant="contained" color="primary">
              Товч
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
