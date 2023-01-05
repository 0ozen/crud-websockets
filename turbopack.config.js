import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default {
  entry: {
    index: './src/index.js',
    main: './src/public/main.js',
    notes: './src/public/notes.js',
    socket: './src/public/socket.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  }
};
