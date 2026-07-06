import { f as l, a as i } from './fetchAPI-BHJGa_aB.js';
import { s as u, M as _, L as m } from './scrollDown-CRhl1Omr.js';
import {
  _ as v,
  w as d,
  o as f,
  a as p,
  c as g,
  b as M,
  d as c,
  n as h,
  u as w,
  r as t,
} from './index-DXA6RC7-.js';
const y = '_section_zdnqv_1',
  L = { section: y },
  k = '_section_zdnqv_1',
  x = { section: k },
  z = {
    __name: 'HomePage',
    setup(q) {
      const n = t(1),
        o = t([]),
        a = t([]);
      d(
        n,
        async s => {
          try {
            const e = await l(s);
            (o.value = [...o.value, ...e.results]), s > 1 && u();
          } catch (e) {
            console.log('something went wrong', e);
          }
        },
        { immediate: !0 },
      ),
        f(async () => {
          const s = await i();
          a.value = [...a.value, ...s];
        });
      const r = () => {
        n.value += 1;
      };
      return (s, e) => (
        p(),
        g('div', null, [
          M(
            'section',
            { class: h(w(L).section) },
            [
              c(_, { movies: o.value, genres: a.value }, null, 8, [
                'movies',
                'genres',
              ]),
              c(m, { onClick: r }),
            ],
            2,
          ),
        ])
      );
    },
  },
  B = { $style: x },
  P = v(z, [['__cssModules', B]]);
export { P as default };
