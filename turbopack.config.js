import path from 'path';

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
