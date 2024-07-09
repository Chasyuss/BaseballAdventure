import supabase from './supabaseAPI';

class RoomAPI {
  Make = async ({ roomName, chance }) => {
    try {
      const { data: Makeroomdata, error: MakeroomError } = await supabase
        .from('rooms')
        .insert({ roomname: roomName, chance: parseInt(chance) });

      if (MakeroomError) {
        throw new Error(MakeroomError.message);
      } else {
        return Makeroomdata;
      }
    } catch (error) {
      console.error('방 만들기 에러:', error.message);
      throw error;
    }
  };
}

const roomAPI = new RoomAPI();

export default roomAPI;
