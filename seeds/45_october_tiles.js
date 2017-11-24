'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('october_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('october_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'autumnal',
          type: 'default',
          src_string: '../img/october_tiles/autumnalDefault.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#926A50',
          color_medium: '#CA993C',
          color_light: '#E0BC5E',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'autumnal',
          type: 'week',
          src_string: '../img/october_tiles/autumnal_glass_bump_abstract_by_don64738-d5lemnq.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#846353',
          color_medium: '#E54237',
          color_light: '#F3E82D',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'autumnal',
          type: 'mtwt',
          src_string: '../img/october_tiles/leaves-1648179_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#0C000A',
          color_medium: '#945046',
          color_light: '#E3A140',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'autumnal',
          type: 'friday',
          src_string: '../img/october_tiles/sycamore_leaf_tree_nature_color_fall_maple_season-863153.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#F32D04',
          color_medium: '#83880D',
          color_light: '#FDD61E',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('october_tiles_id_seq', (SELECT MAX(id) FROM october_tiles));");
    });
};
