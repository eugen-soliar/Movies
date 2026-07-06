import {
  _ as y,
  e as M,
  f as g,
  w as q,
  o as w,
  a as c,
  c as j,
  b as l,
  g as k,
  v as B,
  n as i,
  u as m,
  d as b,
  h as x,
  i as L,
  r as n,
  j as V,
} from './index-DXA6RC7-.js';
import { b as C, a as D } from './fetchAPI-BHJGa_aB.js';
import { s as N, M as Q, L as $ } from './scrollDown-CRhl1Omr.js';
const R = '_form_j87qa_1',
  S = '_input_j87qa_9',
  v = { form: R, input: S },
  U = '_form_j87qa_1',
  z = '_input_j87qa_9',
  E = { form: U, input: z },
  G = ['name'],
  H = {
    __name: 'MoviesPage',
    setup(T) {
      const _ = M(),
        f = g(),
        r = n(1),
        s = n(''),
        o = n([]),
        u = n([]),
        p = V(() => _.query.searchQuery ?? '');
      q([r, p], async ([e, a]) => {
        if (a !== '')
          try {
            const t = await C(a, e);
            (o.value = [...o.value, ...t.results]), e > 1 && N();
          } catch (t) {
            console.log('something went wrong', t);
          }
      }),
        w(async () => {
          const e = await D();
          u.value = [...u.value, ...e];
        });
      const d = e => {
          e.preventDefault(),
            s.value !== '' &&
              ((r.value = 1),
              (o.value = []),
              f.push({ query: { searchQuery: s.value } }),
              (s.value = ''));
        },
        h = () => {
          r.value += 1;
        };
      return (e, a) => (
        c(),
        j('div', null, [
          l(
            'form',
            { class: i(m(v).form), onSubmit: d },
            [
              k(
                l(
                  'input',
                  {
                    class: i(m(v).input),
                    'onUpdate:modelValue': a[0] || (a[0] = t => (s.value = t)),
                    name: s.value,
                  },
                  null,
                  10,
                  G,
                ),
                [[B, s.value]],
              ),
            ],
            34,
          ),
          b(Q, { movies: o.value, genres: u.value }, null, 8, [
            'movies',
            'genres',
          ]),
          o.value.length > 20 ? (c(), x($, { key: 0, onClick: h })) : L('', !0),
        ])
      );
    },
  },
  P = { $style: E },
  J = y(H, [['__cssModules', P]]);
export { J as default };
