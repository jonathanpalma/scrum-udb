import development from './development';
import production from './production';

interface Service {
  path: string;
}

export interface Config {
  api: {
    domain: string;
    // getUsers: Service;
  };
}

const commons: Config = {
  api: {
    domain: process.env.REACT_APP_BFF_DOMAIN || '',
    // getUsers: {
    //   path: '/users',
    // },
    // getUsersById: {
    //   path: '/users/:userId',
    // },
    // postUsers: {
    //   path: '/users',
    // },
  },
};

const config =
  process.env.NODE_ENV !== 'production'
    ? development(commons)
    : production(commons);

export default Object.freeze({ ...config });
