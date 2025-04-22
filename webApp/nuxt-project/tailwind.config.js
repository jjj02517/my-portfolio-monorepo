const baseConfig = require('../../packages/config/tailwind.config') // 공통 설정 파일 경로

module.exports = {
  ...baseConfig,
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    '../../packages/ui/src/**/*.{vue,js,ts,tsx}'
  ]
}
