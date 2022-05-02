module.exports = {
  displayName: 'ui-layout',
  preset: '../../../jest.preset.ts',
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/ui/layout',
};
