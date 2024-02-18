module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.build.json",
      isolatedModules: false,
    },
  },
  transform: {
    "^.+\\.[jt]s?$": "ts-jest",
  },
  testEnvironment: `node`,
  moduleFileExtensions: [`js`, `jsx`, `ts`, `tsx`, `json`],
}
