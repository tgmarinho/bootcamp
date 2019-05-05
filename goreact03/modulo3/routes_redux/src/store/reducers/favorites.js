const INITIAL_STATE = [];

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
