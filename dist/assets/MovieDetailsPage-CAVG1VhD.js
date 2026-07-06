import {
  _ as R,
  e as $,
  f as L,
  w as B,
  k as w,
  a as l,
  c as p,
  b as t,
  n as a,
  t as r,
  F as d,
  l as h,
  d as c,
  m as u,
  p as m,
  u as i,
  h as g,
  S as x,
  i as C,
  r as V,
} from './index-DXA6RC7-.js';
import { c as b } from './fetchAPI-BHJGa_aB.js';
const I = '_poster_1xuww_1',
  M = '_posterInfo_1xuww_6',
  N = '_navLink_1xuww_10',
  D = '_link_1xuww_19',
  S = '_activeLink_1xuww_28',
  F = '_ReturnBtn_1xuww_32',
  P = '_loader_1xuww_72',
  z = '_spin_1xuww_1',
  E = {
    poster: I,
    posterInfo: M,
    navLink: N,
    link: D,
    activeLink: S,
    ReturnBtn: F,
    loader: P,
    spin: z,
  },
  G = ['src', 'alt'],
  O = {
    __name: 'MovieDetailsPage',
    setup(j) {
      const o = $(),
        k = L(),
        s = V(null);
      B(
        () => o.params.movieId,
        async e => {
          e && (s.value = await b(e));
        },
        { immediate: !0 },
      );
      const f = () => {
        var e;
        k.push(((e = o.state) == null ? void 0 : e.from) ?? '/');
      };
      return (e, n) => {
        const _ = w('RouterLink'),
          y = w('RouterView');
        return s.value
          ? (l(),
            p(
              d,
              { key: 0 },
              [
                t(
                  'button',
                  { class: a(e.$style.ReturnBtn), type: 'button', onClick: f },
                  ' Return ',
                  2,
                ),
                t(
                  'div',
                  { class: a(e.$style.poster) },
                  [
                    t(
                      'img',
                      {
                        src: `https://image.tmdb.org/t/p/w500/${s.value.poster_path}`,
                        alt: s.value.title,
                      },
                      null,
                      8,
                      G,
                    ),
                    t(
                      'div',
                      { class: a(e.$style.posterInfo) },
                      [
                        t('h3', null, [
                          t('span', null, r(s.value.title) + ' / ', 1),
                          t('span', null, r(s.value.release_date), 1),
                        ]),
                        n[0] || (n[0] = t('h3', null, 'Overview', -1)),
                        t('p', null, r(s.value.overview), 1),
                        n[1] || (n[1] = t('h3', null, 'Genres:', -1)),
                        t('ul', null, [
                          (l(!0),
                          p(
                            d,
                            null,
                            h(
                              s.value.genres,
                              v => (l(), p('li', { key: v.id }, r(v.name), 1)),
                            ),
                            128,
                          )),
                        ]),
                      ],
                      2,
                    ),
                  ],
                  2,
                ),
                t(
                  'div',
                  { class: a(e.$style.navLink) },
                  [
                    c(
                      _,
                      {
                        class: a(e.$style.link),
                        to: { path: `${i(o).path}/cast`, state: i(o).state },
                      },
                      {
                        default: u(() => [
                          ...(n[2] || (n[2] = [m(' Cast ', -1)])),
                        ]),
                        _: 1,
                      },
                      8,
                      ['class', 'to'],
                    ),
                    c(
                      _,
                      {
                        class: a(e.$style.link),
                        to: { path: `${i(o).path}/reviews`, state: i(o).state },
                      },
                      {
                        default: u(() => [
                          ...(n[3] || (n[3] = [m(' Review ', -1)])),
                        ]),
                        _: 1,
                      },
                      8,
                      ['class', 'to'],
                    ),
                  ],
                  2,
                ),
                (l(),
                g(x, null, {
                  fallback: u(() => [
                    t('div', { class: a(e.$style.loader) }, null, 2),
                  ]),
                  default: u(() => [c(y)]),
                  _: 1,
                })),
              ],
              64,
            ))
          : C('', !0);
      };
    },
  },
  T = { $style: E },
  H = R(O, [['__cssModules', T]]);
export { H as default };
