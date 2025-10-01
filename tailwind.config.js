/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  /**
   * Список шаблонов файлов, которые будут сканироваться на наличие утилитарных классов Tailwind CSS.
   * Включает компоненты Astro, HTML/JS/TS файлы и все CSS-файлы в директории styles.
   */
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/styles/**/*.css',
    './src/styles/global.css'
  ],
  /**
   * Активация темного режима с использованием стратегии 'class'.
   * Добавляет варианты `dark:` и применяет темную тему, когда класс `dark` присутствует на `<html>`.
   */
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /**
         * Пользовательская цветовая палитра для музыкальных тем.
         * - primary: Ярко-оранжевый (#f59e0b)
         * - secondary: Темно-пурпурный (#7c3aed)
         * - accent: Неоново-зеленый (#10b981)
         */
        music: {
          primary: '#f59e0b', // Оранжевый
          secondary: '#7c3aed', // Пурпурный
          accent: '#10b981' // Неоновый зелёный
        }
      }
    }
  },
  plugins: [
    /**
     * Плагин для улучшенного форматирования текста.
     * Предоставляет утилиты вроде `prose`, `prose-lg`, которые обеспечивают красивое оформление текстовых элементов.
     */
    require('@tailwindcss/typography'),
  ]
};
