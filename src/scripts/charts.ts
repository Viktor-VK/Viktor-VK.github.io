// Общие заготовки для графиков ECharts на страницах проектов: цвета из CSS-переменных темы,
// пересоздание графиков при смене темы и подгонка размера (в т.ч. в фоновой вкладке с нулевой шириной).
import * as echarts from 'echarts/core';
import { ScatterChart, BarChart, LineChart, HeatmapChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  MarkLineComponent,
  MarkAreaComponent,
  VisualMapComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  ScatterChart,
  BarChart,
  LineChart,
  HeatmapChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  MarkLineComponent,
  MarkAreaComponent,
  VisualMapComponent,
  CanvasRenderer,
]);

export type Theme = ReturnType<typeof readTheme>;

export function readTheme() {
  const css = getComputedStyle(document.documentElement);
  const v = (name: string) => css.getPropertyValue(name).trim();
  const C = {
    text: v('--text'),
    muted: v('--muted'),
    grid: v('--grid'),
    border: v('--border'),
    surface: v('--surface'),
    surface2: v('--surface-2'),
    accent: v('--accent'),
    font: v('--font'),
    series: [v('--series-tesera'), v('--series-bgg'), v('--series-both'), v('--series-4'), v('--series-5'), v('--series-6')],
    bad: v('--scale-bad'),
    mid: v('--scale-mid'),
    good: v('--scale-good'),
    low: v('--scale-low'),
    high: v('--scale-high'),
  };
  const base = {
    textStyle: { fontFamily: C.font, color: C.muted },
    tooltip: {
      backgroundColor: C.surface2,
      borderColor: C.border,
      textStyle: { color: C.text, fontFamily: C.font, fontSize: 13 },
    },
    animationDuration: 400,
  };
  const axis = {
    axisLine: { lineStyle: { color: C.grid } },
    axisTick: { show: false },
    axisLabel: { color: C.muted },
    splitLine: { lineStyle: { color: C.grid } },
    nameTextStyle: { color: C.muted },
  };
  return { C, base, axis };
}

// числа по-русски
export const int = (x: number) => Math.round(x).toLocaleString('ru-RU');
export const mln = (x: number, d = 1) => (x / 1e6).toFixed(d).replace('.', ',');
export const pct = (x: number, d = 0) => (x * 100).toFixed(d).replace('.', ',') + '%';
export const signed = (s: string, x: number) => (x > 0 ? '+' : x < 0 ? '-' : '') + s;

/** Рисует графики функцией render(init, theme); при смене темы пересоздаёт их, при изменении размера - подгоняет. */
export function mountCharts(render: (init: (id: string) => echarts.ECharts, t: Theme) => void) {
  const charts: echarts.ECharts[] = [];
  const ro = new ResizeObserver(() => charts.forEach((c) => c.resize()));
  const init = (id: string) => {
    const el = document.getElementById(id)!;
    const c = echarts.init(el);
    charts.push(c);
    ro.observe(el);
    return c;
  };
  const draw = () => {
    charts.splice(0).forEach((c) => c.dispose());
    ro.disconnect();
    render(init, readTheme());
  };
  draw();
  window.addEventListener('themechange', draw);
  // подписи осей рассчитываются под ширину экрана: при переходе через мобильную ширину перерисовываем
  let narrow = window.innerWidth < 560;
  window.addEventListener('resize', () => {
    if ((window.innerWidth < 560) !== narrow) {
      narrow = !narrow;
      draw();
    }
  });
}
