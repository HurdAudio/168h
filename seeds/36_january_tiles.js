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
        },
        {
          id: 14,
          user_id: 1,
          theme: 'ice',
          type: 'friday',
          src_string: '../img/january_tiles/ice-1998082_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#020003',
          color_medium: '#4E585A',
          color_light: '#DCDCDC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'ice',
          type: 'saturday',
          src_string: '../img/january_tiles/18712675-Seamless-ice-texture-computer-graphic-big-collection-Stock-Photo.jpg',
          repeat_value: 'no-repeat',
          size_value: '110%',
          color_dark: '#1A6B86',
          color_medium: '#76E6EC',
          color_light: '#BFECF2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'ice',
          type: 'sunday',
          src_string: '../img/january_tiles/tyler-agte-tyleragte-icepattern.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#4DA8BC',
          color_medium: '#6ACADA',
          color_light: '#77DEE3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'ice',
          type: 'holiday',
          src_string: '../img/january_tiles/winter-wonderland-1961970_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#3D2A21',
          color_medium: '#A0A19A',
          color_light: '#C2C3C4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'ice',
          type: 'week',
          src_string: '../img/january_tiles/depositphotos_36103545-stock-photo-ice-texture.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#435388',
          color_medium: '#B2BFEC',
          color_light: '#DFEAFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'ice',
          type: 'friday',
          src_string: '../img/january_tiles/two-1231475_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#02040E',
          color_medium: '#5A6B85',
          color_light: '#EDFAFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'ice',
          type: 'saturday',
          src_string: '../img/january_tiles/depositphotos_63077593-stock-photo-frozen-ice-seamless-and-tileable.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#587C9D',
          color_medium: '#91BFD7',
          color_light: '#CFF2F7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'ice',
          type: 'sunday',
          src_string: '../img/january_tiles/cuevas-de-hielo-alasca.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#010302',
          color_medium: '#004A71',
          color_light: '#3CC8DC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'ice',
          type: 'holiday',
          src_string: '../img/january_tiles/50879485-transparent-texture-of-natural-ice-of-blue-color-for-an-abstract-background.jpg',
          repeat_value: 'no-repeat',
          size_value: '151%',
          color_dark: '#0E396F',
          color_medium: '#0C69C1',
          color_light: '#EEF7FF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'ice',
          type: 'week',
          src_string: '../img/january_tiles/white_marble_texture_01_by_goodtextures.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#9CA0AE',
          color_medium: '#DCDFE7',
          color_light: '#DEE0EC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'ice',
          type: 'friday',
          src_string: '../img/january_tiles/Ice-cube-dreamstime_xxl_3038365.png',
          repeat_value: 'no-repeat',
          size_value: '120%',
          color_dark: '#061F3B',
          color_medium: '#42BBF0',
          color_light: '#F2EBEC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('january_tiles_id_seq', (SELECT MAX(id) FROM january_tiles));");
    });
};
