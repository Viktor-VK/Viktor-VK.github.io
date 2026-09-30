const repo = 'https://github.com/Viktor-VK/portfolio/tree/master/';
const folder = (name: string) => repo + encodeURIComponent(name);

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  status: 'ready' | 'wip';
  page?: string; // своя страница на сайте
  pageLabel?: string; // подпись ссылки на страницу, по умолчанию «Подробнее»
  code?: string; // код на GitHub
};

export const projects: Project[] = [
  {
    title: 'Мониторинг рынка вакансий hh.ru',
    summary:
      'Работающий инструмент: парсер вакансий hh.ru, база DuckDB и дашборды. Исследование рынка аналитиков на 08.09.2026 и интерактивный дашборд.',
    tags: ['Python', 'Selenium', 'DuckDB', 'Superset', 'ECharts'],
    status: 'ready',
    page: '/projects/hh-market/',
    pageLabel: 'Исследование и дашборд',
    code: 'https://github.com/Viktor-VK/Real-time-analytics-hh/tree/wide-funnel',
  },
  {
    title: 'Сквозной анализ цепи поставок',
    summary:
      'Движение товара от поставщика через склады до магазинов по дням: недельный закуп, сроки доставки, ежедневное пополнение магазинов. Для каждого дефицита - на каком этапе цепочки возникла проблема: у поставщика, в закупе или в распределении.',
    tags: ['Python', 'SQL', 'DuckDB', '1С', 'симуляция', 'цепь поставок'],
    status: 'ready',
    page: '/projects/supply-chain/',
    pageLabel: 'Смотреть расчёт',
    code: folder('Сквозной анализ цепи поставок'),
  },
  {
    title: 'Кластеризация точек продаж',
    summary:
      'Сегментация аптечной сети по размеру, ценовому позиционированию и ассортиментному профилю: три кластеризации и автоматическое сведение в понятные бизнес-сегменты.',
    tags: ['Python', 'SQL', 'DuckDB', 'кластеризация', 'ECharts'],
    status: 'ready',
    page: '/projects/store-clustering/',
    pageLabel: 'Смотреть расчёт',
    code: folder('Кластеризация точек продаж'),
  },
  {
    title: 'Скоринг и выбор ассортиментной матрицы',
    summary:
      'Ассортиментная матрица для каждого сегмента аптек: минимум денег в товарных остатках при прибыли как у действующей матрицы, с проверкой на новых неделях продаж.',
    tags: ['Python', 'SQL', 'DuckDB', 'скоринг'],
    status: 'ready',
    page: '/projects/assortment-matrix/',
    pageLabel: 'Смотреть расчёт',
    code: folder('Скоринг и выбор ассортиментной матрицы'),
  },
  {
    title: 'Tesera vs BoardGameGeek',
    summary:
      'Исследование топ-500 игр двух площадок: чем оценки российского сообщества Tesera отличаются от мирового BoardGameGeek и почему «свой» топ всегда выглядит щедрее.',
    tags: ['Python', 'API', 'парсинг HTML', 'pandas', 'scipy', 'ECharts'],
    status: 'ready',
    page: '/projects/tesera-bgg/',
    pageLabel: 'Читать исследование',
    code: folder('Сравнение рейтингов Tesera и BGG'),
  },
];
