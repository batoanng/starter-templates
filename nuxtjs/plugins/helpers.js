import { EMAIL } from '@/constants/regex';

export default (app) => {
  return {
    isEmail(text) {
      return EMAIL.test(text);
    },
  };
};
