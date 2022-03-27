const path = require('path');
const { jsWithTs: tsjPreset } = require('ts-jest/presets');
const ignorePatterns = ['.d.ts$'];

module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    globals: {
        'ts-jest': {
            tsConfig: {
                target: 'es2015'
            }
        }
    },
    rootDir: __dirname,
    roots: ['<rootDir>/src'],
    transform: {
        ...tsjPreset.transform,
        '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
        '^.+.css$': require.resolve('react-scripts/config/jest/cssTransform.js'),
        '^(?!.*.(ts|tsx|js|jsx|css|json)$)': require.resolve('react-scripts/config/jest/cssTransform.js')
    },
    transformIgnorePatterns: ['node_modules', '^.+module.(css|sass|scss)$'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    coveragePathIgnorePatterns: [...ignorePatterns, 'src/(.*)/(.*).d.ts', 'src/index.ts', 'node_modules/(.*)'],
    setupFiles: [require.resolve('react-app-polyfill/jsdom.js')],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    testRegex: ['((__tests__|test)/(?!__mocks__).*|(\\.|/)(test|spec))\\.(tsx|ts)?$'],
    testEnvironment: 'jest-environment-jsdom-sixteen',
    testPathIgnorePatterns: ignorePatterns,
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    modulePath: [path.join(__dirname, 'src')],
    testResultsProcessor: 'jest-sonar-reporter'
};
