import debug from 'debug';

const { REACT_APP_NAME } = process.env;
const COLORS: { [key: string]: string } = {
  error: '#FF0000',
  info: '#1799B5',
  trace: '#006400',
  warn: '#FF8C00',
};

class Log {
  constructor(source: string) {
    this.source = source;
  }

  source = '';

  generateMessage(level: string, message: string) {
    const namespace = `${REACT_APP_NAME}:${level}`;
    // TODO: Remove "any" after color prop is added to @types/debug
    const dbgr: any = debug(namespace);
    dbgr.color = COLORS[level];
    dbgr(this.source, message);
  }

  trace(message: any) {
    return this.generateMessage('trace', message);
  }

  info(message: any) {
    return this.generateMessage('info', message);
  }

  warn(message: any) {
    return this.generateMessage('warn', message);
  }

  error(message: any) {
    return this.generateMessage('error', message);
  }
}

export default Log;
