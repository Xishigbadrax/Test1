import Bag from "../bag";
import React, { useState } from "react";
export default function Sum(props) {
  console.log(props.aimagName + "<=====");

  return <div>{props.aimagName == "Arhangai" ? <Sum1 /> : <Sum2 />}</div>;
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
        <label>
          Сум
          <select onChange={(e) => setSumName(e.target.value)}>
            <option></option>
            <option value="Asum1">{Arhangai.sum1.name}</option>
            <option value="Asum2">{Arhangai.sum2.name}</option>
          </select>
        </label>
        <Bag SumNer={SumName} />
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
        <label>
          Сум
          <select onChange={(e) => setSumName(e.target.value)}>
            <option></option>
            <option value="Hsum1">{Hentii.sum1.name}</option>
            <option value="Hsum2">{Hentii.sum2.name}</option>
          </select>
        </label>
        <Bag SumNer={SumName} />
      </form>
    </div>
  );
}
