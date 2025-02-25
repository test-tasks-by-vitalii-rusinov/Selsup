import React from 'react';

interface Param {
  id: number;
  name: string;
  type: 'string';
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Color {
  color: string;
}

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  paramValues: ParamValue[];
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

class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      paramValues: props.model.paramValues || [],
    };
  }

  handleInputChange = (paramId: number, value: string) => {
    this.setState((prevState) => {
      const updatedValues = prevState.paramValues.map((paramValue) =>
        paramValue.paramId === paramId
          ? { ...paramValue, value }
          : paramValue
      );

      return { paramValues: updatedValues };
    });
  };

  getModel(): Model {
    return {
      ...this.props.model,
      paramValues: this.state.paramValues,
    };
  }

  render() {
    const { params } = this.props;
    const { paramValues } = this.state;

    return (
      <div>
        <form>
          {params.map((param) => {
            const paramValue = paramValues.find(
              (value) => value.paramId === param.id
            )?.value;

            return (
              <div key={param.id} style={{ width: '400px', height: '30px' }}>
                <label style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                {param.name}:
                  <input
                    type="text"
                    value={paramValue}
                    onChange={(e) => this.handleInputChange(param.id, e.target.value)}
                    style={{ width: '70%' }}
                  />
                </label>
              </div>
            );
          })}
        </form>
        <button
          onClick={() => {
            console.log('Текущая модель:', this.getModel());
          }}
        >
          Текущую модель
        </button>
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <ParamEditor params={params} model={model} />
    </div>
  );
};

export default App;
