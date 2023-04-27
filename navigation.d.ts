import { RootStackParamTenpo } from './App';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamTenpo {}
  }
}
