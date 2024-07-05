import { v4 as uuidv4 } from 'uuid';
import supabase from './supabaseAPI';

export const uploadFile = async (file) => {
  try {
    const { data: imgData, error } = await supabase.storage.from('images').upload(`userimage/${uuidv4()}.png`, file);

    if (error) {
      console.error('파일 업로드 에러:', error);
      return null;
    }

    const { data } = supabase.storage.from('images').getPublicUrl(imgData.path);
    console.log('업로드된 파일의 URL:', data.publicUrl);

    return data.publicUrl;
  } catch (error) {
    console.error('업로드 에러 ', error);
    return null;
  }
};
