import React, { useState } from "react";
import { MenuItem } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
export default function Bag(props) {
  const project = () => {
    switch (props.SumNer) {
      case "Asum1":
        return <Bag1 />;
      case "Asum2":
        return <Bag2 />;
      case "Hsum1":
        return <Bag3 />;
      case "Hsum2":
        return <Bag4 />;

      default:
        return null;
    }
  };

  return <div>{project()}</div>;
}
function Bag1(props) {
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
  return (
    <div>
      <form>
        <InputLabel>Баг:</InputLabel>
        <Select>
          <MenuItem></MenuItem>
          <MenuItem value="lime">{Arhangai.sum1.bag1}</MenuItem>
          <MenuItem value="lime">{Arhangai.sum1.bag2}</MenuItem>
          <MenuItem value="lime">{Arhangai.sum1.bag3}</MenuItem>
        </Select>
      </form>
    </div>
  );
}

function Bag3(props) {
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
  return (
    <div>
      <form>
        <InputLabel>Баг:</InputLabel>
        <Select>
          <MenuItem></MenuItem>
          <MenuItem value="lime">{Hentii.sum1.bag1}</MenuItem>
          <MenuItem value="lime">{Hentii.sum1.bag2}</MenuItem>
          <MenuItem value="lime">{Hentii.sum1.bag3}</MenuItem>
        </Select>
      </form>
    </div>
  );
}

function Bag4(props) {
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
  return (
    <div>
      <form>
        <InputLabel>Баг:</InputLabel>
        <Select>
          <MenuItem></MenuItem>
          <MenuItem value="lime">{Hentii.sum2.bag1}</MenuItem>
          <MenuItem value="lime">{Hentii.sum2.bag2}</MenuItem>
          <MenuItem value="lime">{Hentii.sum2.bag3}</MenuItem>
        </Select>
      </form>
    </div>
  );
}

function Bag2(props) {
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
  return (
    <div>
      <form>
        <InputLabel>Баг:</InputLabel>
        <Select>
          <MenuItem></MenuItem>
          <MenuItem value="lime">{Arhangai.sum2.bag1}</MenuItem>
          <MenuItem value="lime">{Arhangai.sum2.bag2}</MenuItem>
          <MenuItem value="lime">{Arhangai.sum2.bag3}</MenuItem>
        </Select>
      </form>
    </div>
  );
}
