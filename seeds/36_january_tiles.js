'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('january_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('january_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'ice',
          type: 'default',
          src_string: '../img/january_tiles/pattern-2054291_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '1050%',
          color_dark: '#8E8B92',
          color_medium: '#BFBFCB',
          color_light: '#F3F4F8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'ice',
          type: 'week',
          src_string: '../img/january_tiles/ice_texture_by_kikariz_stock.jpg',
          repeat_value: 'no-repeat',
          size_value: '350%',
          color_dark: '#08080D',
          color_medium: '#4B677F',
          color_light: '#C0DCE8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'ice',
          type: 'mtwt',
          src_string: '../img/january_tiles/depositphotos_26348373-stock-photo-seamless-ice-texture.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#7D7D7D',
          color_medium: '#BEBEBE',
          color_light: '#D9D9D9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'ice',
          type: 'friday',
          src_string: '../img/january_tiles/ice-709307_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#210A04',
          color_medium: '#98603D',
          color_light: '#EBC386',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('january_tiles_id_seq', (SELECT MAX(id) FROM january_tiles));");
    });
};
