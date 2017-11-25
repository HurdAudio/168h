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
        },
        {
          id: 5,
          user_id: 1,
          theme: 'ice',
          type: 'saturday',
          src_string: '../img/january_tiles/ChiseledIce.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#647D9C',
          color_medium: '#91AED7',
          color_light: '#CEE2FA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'ice',
          type: 'sunday',
          src_string: '../img/january_tiles/7581993-Rime-texture-Stock-Photo-ice-texture-snow.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#143F56',
          color_medium: '#5BA1D4',
          color_light: '#E8F4F5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'ice',
          type: 'holiday',
          src_string: '../img/january_tiles/ice-2381291_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#3C62B3',
          color_medium: '#79AFDE',
          color_light: '#F1F4F9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'ice',
          type: 'week',
          src_string: '../img/january_tiles/ice-melting6a.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#1B4C48',
          color_medium: '#7FFBED',
          color_light: '#B0EEED',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'ice',
          type: 'friday',
          src_string: '../img/january_tiles/53e761b2082a7.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#5B7F90',
          color_medium: '#8DA7B8',
          color_light: '#D0D4D7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'ice',
          type: 'saturday',
          src_string: '../img/january_tiles/ice-wallpapers-002.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#191D2A',
          color_medium: '#72BEFA',
          color_light: '#CDDCF1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'ice',
          type: 'sunday',
          src_string: '../img/january_tiles/19-cool-blue-ice-texture-free-hi-res.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#131A25',
          color_medium: '#5891E5',
          color_light: '#73B2F9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'ice',
          type: 'holiday',
          src_string: '../img/january_tiles/eis-texture.jpg',
          repeat_value: 'no-repeat',
          size_value: '143%',
          color_dark: '#23281F',
          color_medium: '#707DA7',
          color_light: '#BFB9C3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'ice',
          type: 'week',
          src_string: '../img/january_tiles/17-dark-ice-texture-free-hi-res.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#878CA2',
          color_medium: '#C0CDDD',
          color_light: '#F9FAFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('january_tiles_id_seq', (SELECT MAX(id) FROM january_tiles));");
    });
};
