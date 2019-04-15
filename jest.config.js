module.exports = {
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx'
  ],
  'transform': {
    '^.+\\.(tsx?|jsx?)$': 'ts-jest'
  },
  'testMatch': [
    '**/?(*.)+(test).(ts?(x)|js?(x))'
  ],
  'setupTestFrameworkScriptFile': '\'<rootDir>/setup.tests.ts\''
}
