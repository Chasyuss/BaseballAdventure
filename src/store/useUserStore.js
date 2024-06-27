import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const useUserStore = create(
  persist(
    immer((set) => ({
      user: null, // 초기 상태로 user를 null로 설정
      setUser: (userInfo) =>
        set((state) => {
          state.user = userInfo;
        }) // user 상태를 업데이트하는 setUser 함수
    })),
    {
      name: 'users'
    }
  )
);

export default useUserStore;
