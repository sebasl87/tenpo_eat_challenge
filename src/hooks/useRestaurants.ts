import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { useCallback } from 'react';
import { fetchRestos } from '../store/restaurantsSlice';

const useRestaurants = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { restoList } = useSelector((state: RootState) => state.restaurants);

  const getRestos = useCallback(() => dispatch(fetchRestos()), [dispatch]);

  return { restoList, getRestos };
};

export default useRestaurants;
