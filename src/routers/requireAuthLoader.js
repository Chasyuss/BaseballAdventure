import { redirect } from 'react-router-dom';
import useUserStore from '../store/useUserStore';

export const requireAuthLoader = () => {
  const { user } = useUserStore.getState();
  if (!user) {
    return redirect('/Login');
  }
  return null;
};

//이 함수가 먼저 실행되고 화면 깜박임도 사라짐
