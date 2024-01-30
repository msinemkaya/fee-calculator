import path from 'path';

export default function directoryName(dirname : string) {
  let directory = dirname;

  if (directory.includes('dist')) {
    directory = path.join(directory, '../');
  }

  return directory;
}
