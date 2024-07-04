import React, { useState } from 'react';
import { Radio } from 'antd';
import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps[ 'componentSize' ];

const AntDesign: React.FC = () => {
  const [ size, setSize ] = useState<SizeType>('large'); // default is 'middle'
  return (
    <>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
    </>
  );
};

export default AntDesign;