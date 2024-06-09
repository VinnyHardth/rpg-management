import { cleanEnv, num, port, str } from "envalid";

const validateEnv = () => {
  cleanEnv(process.env, {
    PORT: port(),
    DATABASE_URL: str(),
    DEFAULT_LANG: str({ choices: ["pt-BR"] }),
    BCRYPT_ROUNDS: num({ default: 10 }),
  });
};

export default validateEnv;
