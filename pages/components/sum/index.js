import Bag from "../bag";
import { MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
export default function Sum(props) {
  console.log(props.aimagName + "<=====");
  const project = () => {
    switch (props.aimagName) {
      case "Arhangai":
        return <Sum1 />;
      case "Hentii":
        return <Sum2 />;

      default:
        return null;
    }
  };

  return <div>{project()}</div>;
}

function Sum1(props) {
  const Arhangai = {
    sum1: {
      name: "Архангай сум 1",
      bag1: "Архангай баг 1-1",
      bag2: "Архангай баг 1-2",
      bag3: "Архангай баг 1-3",
    },
    sum2: {
      name: "Архангай сум 2",
      bag1: "Архангай баг 2-1",
      bag2: "Архангай баг 2-2",
      bag3: "Архангай баг 2-3",
    },
    sum3: {
      name: "Архангай сум 3",
      bag1: "Архангай баг 3-1",
      bag2: "Архангай баг 3-2",
      bag3: "Архангай баг 3-3",
    },
  };

  const [SumName, setSumName] = useState(null);
  console.log("sum name === " + SumName);
  return (
    <div>
      <form>
        <Grid container direction="column" spacing={2}>
          <Grid>
            <InputLabel>Сум:</InputLabel>
            <Select onChange={(e) => setSumName(e.target.value)}>
              <MenuItem></MenuItem>
              <MenuItem value="Asum1">{Arhangai.sum1.name}</MenuItem>
              <MenuItem value="Asum2">{Arhangai.sum2.name}</MenuItem>
            </Select>
          </Grid>

          <Grid item>
            <Bag SumNer={SumName} />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

function Sum2(props) {
  const Hentii = {
    sum1: {
      name: "Хэнтий сум 1",
      bag1: "Хэнтий баг 1-1",
      bag2: "Хэнтий баг 1-2",
      bag3: "Хэнтий баг 1-3",
    },
    sum2: {
      name: "Хэнтий сум 2",
      bag1: "Хэнтий баг 2-1",
      bag2: "Хэнтий баг 2-2",
      bag3: "Хэнтий баг 2-3",
    },
    sum3: {
      name: "Хэнтий сум 3",
      bag1: "Хэнтий баг 3-1",
      bag2: "Хэнтий баг 3-2",
      bag3: "Хэнтий баг 3-3",
    },
  };
  const [SumName, setSumName] = useState(null);
  return (
    <div>
      <form>
        <InputLabel>Сум:</InputLabel>
        <Select onChange={(e) => setSumName(e.target.value)}>
          <MenuItem></MenuItem>
          <MenuItem value="Hsum1">{Hentii.sum1.name}</MenuItem>
          <MenuItem value="Hsum2">{Hentii.sum2.name}</MenuItem>
        </Select>

        <Bag SumNer={SumName} />
      </form>
    </div>
  );
}
