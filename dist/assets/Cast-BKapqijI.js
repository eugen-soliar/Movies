import {
  _ as i,
  e as m,
  w as u,
  a as e,
  c as s,
  F as d,
  l as w,
  n as r,
  u as c,
  r as p,
  b as o,
  t as g,
} from './index-DXA6RC7-.js';
import { d as f } from './fetchAPI-BHJGa_aB.js';
const S = '_cardSet_gw8wa_1',
  h = '_item_gw8wa_19',
  y = '_actor_gw8wa_45',
  n = { cardSet: S, item: h, actor: y },
  C = '_cardSet_gw8wa_1',
  $ = '_item_gw8wa_19',
  v = '_actor_gw8wa_45',
  B = { cardSet: C, item: $, actor: v },
  k = ['src', 'alt'],
  x = {
    __name: 'Cast',
    setup(F) {
      const l = m(),
        _ = p([]);
      return (
        u(
          () => l.params.movieId,
          async a => {
            a && (_.value = await f(a));
          },
          { immediate: !0 },
        ),
        (a, M) => (
          e(),
          s(
            'ul',
            { class: r(c(n).cardSet) },
            [
              (e(!0),
              s(
                d,
                null,
                w(
                  _.value,
                  t => (
                    e(),
                    s(
                      'li',
                      { key: t.id, class: r(c(n).item) },
                      [
                        o('div', null, [
                          o(
                            'img',
                            {
                              src: `https://image.tmdb.org/t/p/w200/${t.profile_path}`,
                              alt: t.name,
                            },
                            null,
                            8,
                            k,
                          ),
                          o('h4', { class: r(c(n).actor) }, g(t.name), 3),
                        ]),
                      ],
                      2,
                    )
                  ),
                ),
                128,
              )),
            ],
            2,
          )
        )
      );
    },
  },
  b = { $style: B },
  E = i(x, [['__cssModules', b]]);
export { E as default };
