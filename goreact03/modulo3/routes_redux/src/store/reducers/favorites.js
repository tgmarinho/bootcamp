const INITIAL_STATE = [
  {
    id: Math.random(),
    name: 'tgmarinho/bootcamp',
    description: 'Treinamento de NODEJS',
    url: 'https://github.com/tgmarinho/bootcamp',
  },
];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        {
          id: Math.random(),
          name: 'facebook/react',
          description:
            'facebook/react(A declarative, efficient, and flexible JavaScript library for building user interfaces. https://reactjs.org )',
          url: 'https://github.com/facebook/react',
        },
      ];

    default:
      return state;
  }
}
