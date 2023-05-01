import { renderHook } from '@testing-library/react-hooks';

import { useSelector } from 'react-redux';
import useRestaurants from '../../src/hooks/useRestaurants';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(() => ({
    restaurants: {
      restoList: [
        {
          id: 1,
          uri: 'https://i.imgur.com/1PLcyBL.png',
          uri_large: 'https://i.imgur.com/25zvKsX.png',
          discount: '50',
          restaurantName: 'Mcdonalds',
          rate: '3.5',
          lapseTime: '10-50',
          bgColor: '',
        },
      ],
    },
  })),
  useDispatch: () => mockDispatch,
}));

describe('useRestaurants', () => {
  it('useRestaurants basic', () => {
    const { result } = renderHook(() => useRestaurants());
    const { restoList } = result.current;
    expect(restoList).toEqual([
      {
        id: 1,
        uri: 'https://i.imgur.com/1PLcyBL.png',
        uri_large: 'https://i.imgur.com/25zvKsX.png',
        discount: '50',
        restaurantName: 'Mcdonalds',
        rate: '3.5',
        lapseTime: '10-50',
        bgColor: '',
      },
    ]);
  });

  it('dispatch', async () => {
    const localState = {
      google: { geocode: [], loading: false },
      address: { address: 'some address' },
      restaurants: {
        restoList: [
          {
            id: 1,
            uri: 'https://i.imgur.com/1PLcyBL.png',
            uri_large: 'https://i.imgur.com/25zvKsX.png',
            discount: '50',
            restaurantName: 'Mcdonalds',
            rate: '3.5',
            lapseTime: '10-50',
            bgColor: '',
          },
        ],
        loading: false,
      },
    };

    useSelector.mockImplementation(() => localState);
    const { result } = renderHook(() => useRestaurants());

    const { getRestos } = result.current;
    getRestos();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
