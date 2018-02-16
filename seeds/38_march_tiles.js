'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('march_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('march_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Glass',
          type: 'default',
          src_string: '../img/march_tiles/product_2737.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#797471',
          color_medium: '#CBCBCB',
          color_light: '#D6D9E5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Glass',
          type: 'week',
          src_string: '../img/march_tiles/HighRiseGlass0016_1_270.jpg',
          repeat_value: 'no-repeat',
          size_value: '130%',
          color_dark: '#6399BF',
          color_medium: '#86C7DE',
          color_light: '#8CBCD2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Glass',
          type: 'mtwt',
          src_string: '../img/march_tiles/14SPL.png',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#AFCEEA',
          color_medium: '#CEE5C9',
          color_light: '#D6F9FF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Glass',
          type: 'friday',
          src_string: '../img/march_tiles/glass_texture_by_yko_54-d46aqr3.jpg',
          repeat_value: 'no-repeat',
          size_value: '170%',
          color_dark: '#292620',
          color_medium: '#A38A61',
          color_light: '#B7D6F4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Glass',
          type: 'saturday',
          src_string: '../img/march_tiles/beverages-2763025_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#010116',
          color_medium: '#00ADEE',
          color_light: '#FFFCFB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Glass',
          type: 'sunday',
          src_string: '../img/march_tiles/church-1935792_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#000000',
          color_medium: '#5F000B',
          color_light: '#EEE83C',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Glass',
          type: 'holiday',
          src_string: '../img/march_tiles/mhYbZVw.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#020305',
          color_medium: '#7D959B',
          color_light: '#D1DCD8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Glass',
          type: 'week',
          src_string: '../img/march_tiles/glassWeek.jpg',
          repeat_value: 'no-repeat',
          size_value: '190%',
          color_dark: '#051F20',
          color_medium: '#7093A7',
          color_light: '#F1F6F9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Glass',
          type: 'friday',
          src_string: '../img/march_tiles/glass02.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#80888A',
          color_medium: '#939D9C',
          color_light: '#93B1B9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Glass',
          type: 'saturday',
          src_string: '../img/march_tiles/texture-1756173_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '125%',
          color_dark: '#326C5B',
          color_medium: '#ED5514',
          color_light: '#CEE1DF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Glass',
          type: 'sunday',
          src_string: '../img/march_tiles/Stained_Glass_Ship.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#03242F',
          color_medium: '#50B5DB',
          color_light: '#E1EAED',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Glass',
          type: 'holiday',
          src_string: '../img/march_tiles/glass-1497227_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0B0D0A',
          color_medium: '#828783',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Glass',
          type: 'week',
          src_string: '../img/march_tiles/glass-200888_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#010506',
          color_medium: '#1F658D',
          color_light: '#E3B76E',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Glass',
          type: 'friday',
          src_string: '../img/march_tiles/the-wait-2061662_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#120608',
          color_medium: '#054EFF',
          color_light: '#F7FFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Glass',
          type: 'saturday',
          src_string: '../img/march_tiles/alcohol-21723_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#1E0B07',
          color_medium: '#AE6624',
          color_light: '#FDFEFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Glass',
          type: 'sunday',
          src_string: '../img/march_tiles/chapel-1035049_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#090806',
          color_medium: '#AA050C',
          color_light: '#FEFCC5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Glass',
          type: 'holiday',
          src_string: '../img/march_tiles/glass-89051_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '143%',
          color_dark: '#2C302F',
          color_medium: '#817A71',
          color_light: '#FFFEFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Glass',
          type: 'week',
          src_string: '../img/march_tiles/building-2050865_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#081012',
          color_medium: '#3997CC',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Glass',
          type: 'friday',
          src_string: '../img/march_tiles/background-2492687_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#010000',
          color_medium: '#3F3634',
          color_light: '#FAFAFA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Glass',
          type: 'saturday',
          src_string: '../img/march_tiles/glass-595343_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0D1252',
          color_medium: '#809355',
          color_light: '#E1EFE2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Glass',
          type: 'sunday',
          src_string: '../img/march_tiles/stained-glass-1181864_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#150B0A',
          color_medium: '#0C3982',
          color_light: '#E7F1E8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Glass',
          type: 'holiday',
          src_string: '../img/march_tiles/glass-1523567_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '162%',
          color_dark: '#070C12',
          color_medium: '#3A4933',
          color_light: '#DBC687',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Glass',
          type: 'week',
          src_string: '../img/march_tiles/architecture-2503141_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#030305',
          color_medium: '#728AA2',
          color_light: '#FFFEFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Glass',
          type: 'friday',
          src_string: '../img/march_tiles/bottle-2545872_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#151811',
          color_medium: '#4F9318',
          color_light: '#FEFEFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Glass',
          type: 'saturday',
          src_string: '../img/march_tiles/rain-744561_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#1A1112',
          color_medium: '#A95A00',
          color_light: '#9FA1BF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Glass',
          type: 'sunday',
          src_string: '../img/march_tiles/TexturesCom_WindowStainedGlass0158_1_M.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#313431',
          color_medium: '#9AE3D5',
          color_light: '#E9EBEA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Glass',
          type: 'holiday',
          src_string: '../img/march_tiles/free-broken-glass-wallpaper-1.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#000000',
          color_medium: '#1C5A5E',
          color_light: '#F7FFF8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Glass',
          type: 'week',
          src_string: '../img/march_tiles/architecture-2256489_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#030102',
          color_medium: '#00547A',
          color_light: '#FFFCF9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Glass',
          type: 'friday',
          src_string: '../img/march_tiles/4d43b5fc944fef06b1a5c9084682ba2b--clear-glass.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#0A0907',
          color_medium: '#5F4F48',
          color_light: '#9A9997',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Glass',
          type: 'saturday',
          src_string: '../img/march_tiles/artistic-986293_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#271403',
          color_medium: '#737C7F',
          color_light: '#FDFDCA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Glass',
          type: 'sunday',
          src_string: '../img/march_tiles/fish-2097318_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#12110D',
          color_medium: '#08AAEE',
          color_light: '#FFE1E1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('march_tiles_id_seq', (SELECT MAX(id) FROM march_tiles));");
    });
};
