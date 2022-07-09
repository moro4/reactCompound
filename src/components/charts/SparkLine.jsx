import React from 'react';
import {SparklineComponent, Inject, SparklineTooltip} from
   '@syncfusion/ej2-react-charts';

function SparkLine({id, height, width, color, data, type, currentColor}) {
   return (
      <SparklineComponent id={id} height={height} width={width}
         lineWidth={1} valueType='Numeric' fill={color}
         border={{color: currentColor, width: 2}} xName='x'
         yName='yval' type={type} dataSource={data}
         tooltipSettings={{
            visible: true,
            format: 'month ${x}: income ${yval}',
            trackLineSettings: {visible: true}
         }}
      >
         <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
   )
}

export default SparkLine