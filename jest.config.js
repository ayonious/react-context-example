module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript'
      ]
    }]
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(js|jsx|ts|tsx)',
    '<rootDir>/src/**/?(*.)(spec|test).(js|jsx|ts|tsx)'
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  collectCoverageFrom: [
    'src/**/*.(js|jsx|ts|tsx)',
    '!src/index.tsx',
    '!src/**/*.d.ts'
  ]
};