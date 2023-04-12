import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/my-library.ts',
    output: {
        file: 'dist/my-library.js',
        format: 'es',
        name: 'MyLibrary',
    },
    plugins: [typescript()],
    external: [],
};