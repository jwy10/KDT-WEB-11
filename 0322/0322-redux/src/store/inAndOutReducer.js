const INPUT = 'inAndOut/INPUT';
const OUTPUT = 'inAndOut/OUTPUT';

const initialState = {
  money: 0,
};

export const input = (value) => ({ type: INPUT, key: value });
export const output = (value) => ({ type: OUTPUT, key: value });

const inAndOutReducer = (state = initialState, action) => {
  console.log(action); // { type: '' , key: ''}
  switch (action.type) {
    case INPUT:
      return { money: state.money + action.key };
    case OUTPUT:
      return { money: state.money - action.key };
    default:
      return state;
  }
};

export default inAndOutReducer;
