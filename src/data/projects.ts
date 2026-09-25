const repo = 'https://github.com/Viktor-VK/portfolio/tree/master/';
const folder = (name: string) => repo + encodeURIComponent(name);

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  status: 'ready' | 'wip';
  page?: string; // своя страница на сайте
  code?: string; // код на GitHub
};

export const projects: Project[] = [
  {
    title: 'Tesera vs BoardGameGeek',
    summary:
      'Мини-исследование: чем оценки настольных игр российского сообщества Tesera отличаются от мирового BoardGameGeek.',
    tags: ['Python', 'API', 'парсинг HTML', 'pandas', 'ECharts'],
    status: 'wip',
    page: '/projects/tesera-bgg/',
  },
  {
    title: 'Мониторинг рынка вакансий hh.ru',
    summary: 'Работающий инструмент: парсер вакансий hh.ru и дашборд в Superset для отслеживания рынка труда аналитиков.',
    tags: ['Python', 'hh.ru API', 'Superset'],
    status: 'wip',
    code: folder('Мониторинг рынка вакансий hh.ru'),
  },
  {
    title: 'Кластеризация точек продаж',
    summary:
      'Сегментация тысяч точек продаж по цене, размеру и ассортиментному профилю для решений по закупкам и ассортименту.',
    tags: ['Python', 'SQL', 'кластеризация'],
    status: 'ready',
    code: folder('Кластеризация точек продаж'),
  },
  {
    title: 'Скоринг и выбор ассортиментной матрицы',
    summary: 'Score товара, ABC-классификация и выбор итоговой товарной матрицы по сегменту.',
    tags: ['Python', 'SQL', 'ABC', 'скоринг'],
    status: 'ready',
    code: folder('Скоринг и выбор ассортиментной матрицы'),
  },
  {
    title: 'Восстановление истории остатков',
    summary: 'Восстановление ежедневной истории остатков по точкам из текущего остатка и журнала движений.',
    tags: ['Python', 'SQL', 'пайплайн данных'],
    status: 'ready',
    code: folder('Восстановление истории остатков'),
  },
];
