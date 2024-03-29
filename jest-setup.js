import { jest } from '@jest/globals';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(() => ({
    google: {
      loading: false,
      geocode: [],
    },
    address: { formated_address: 'some mock address' },
  })),
}));

jest.mock('react-native-maps', () => {
  const React = require('react');
  const { View } = require('react-native');
  class MockMapView extends React.Component {
    render() {
      const { testID, children, ...props } = this.props;

      return (
        <View
          {...{
            ...props,
            testID,
          }}>
          {children}
        </View>
      );
    }
  }

  const mockMapTypes = {
    STANDARD: 0,
    SATELLITE: 1,
    HYBRID: 2,
    TERRAIN: 3,
    NONE: 4,
    MUTEDSTANDARD: 5,
  };

  return {
    __esModule: true,
    default: MockMapView,
    MAP_TYPES: mockMapTypes,
    PROVIDER_DEFAULT: 'default',
    PROVIDER_GOOGLE: 'google',
  };
});

jest.mock('react-native-permissions', () =>
  require('react-native-permissions/mock')
);

jest.mock('react-native-google-places-autocomplete', () => {});

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});
