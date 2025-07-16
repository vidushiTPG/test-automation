import { createLogger, format, transports } from 'winston';
import path from 'path';
import fs from 'fs';

export function getTestLogger(testName: string) {
  const logDir = path.join(process.cwd(), 'logs');
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }
  return createLogger({
    level: 'info',
    format: format.combine(
      format.timestamp(),
      format.printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`)
    ),
    transports: [
      new transports.File({
        filename: path.join(logDir, `${testName}.log`),
        level: 'info'
      }),
      new transports.Console()
    ]
  });
}
