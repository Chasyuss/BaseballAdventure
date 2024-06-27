import supabase from './supabaseAPI';

class AuthAPI {
  SignUp = async ({ email, password, nickname }) => {
    try {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({ email, password });
      const userId = signUpData.user.id;

      if (signUpError) {
        throw Error(signUpError.message);
      }

      const { data: userData, error: userDataError } = await supabase
        .from('users')
        .insert({ id: userId, nickname, email });

      if (userDataError) {
        throw Error(userDataError.message);
      }

      return { signUpData, userData };
    } catch (error) {
      console.error('회원가입 실패');
      throw new Error(`회원가입 실패: ${error.message}`);
    }
  };
}

const authAPI = new AuthAPI();

export default authAPI;
