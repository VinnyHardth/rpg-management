import { cleanEnv, port, str } from "envalid";

const validateEnv = () => {
  cleanEnv(process.env, {
    PORT: port(),
    DATABASE_URL: str(),
    DEFAULT_LANG: str({ choices: ["pt-BR"] }),
  });
};

export default validateEnv;
