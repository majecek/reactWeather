import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data, units) {
  const averageResult = _.round(_.sum(data) / data.length);

  if (units === 'C') {
    const farenheit = _.round(averageResult * 9 / 5 + 32);
    return `${averageResult} C / ${farenheit} F`;
  }
  return `${averageResult} ${units}`;
}

const Chart = (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>{average(props.data, props.units)} </div>
      <div>{}</div>
    </div>
  );
};

export default Chart;
