import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  senha: Yup.string().required(),
});
export { loginSchema };
