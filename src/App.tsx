import React from 'react';
import ParamEditor from './ParamEditor'; // Убедитесь, что путь корректен

interface Param {
    id: number;
    name: string;
    type: 'string';
  }

const params: Param[] = [
  { id: 1, name: 'Назначение', type: 'string' },
  { id: 2, name: 'Длина', type: 'string' },
];

const model = {
  paramValues: [
    { paramId: 1, value: 'повседневное' },
    { paramId: 2, value: 'макси' },
  ],
  colors: [{color: 'red'}, {color: 'green'}, {color: 'blue'}],
};

const App = () => {
  return (
    <div>
      <ParamEditor params={params} model={model} />
    </div>
  );
};

export default App;
