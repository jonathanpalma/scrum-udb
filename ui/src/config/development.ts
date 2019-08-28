import { Config } from './index';

const development = (commons: Config): Config =>
  Object.assign(commons, {
    api: { ...commons.api, domain: '//127.0.0.1:3001' },
  });

export default development;
