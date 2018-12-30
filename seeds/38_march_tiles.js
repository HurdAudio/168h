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
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Glass',
          type: 'holiday',
          src_string: '../img/march_tiles/glass-breakage-286099_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#272823',
          color_medium: '#A18B64',
          color_light: '#C3CAD0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Glass',
          type: 'week',
          src_string: '../img/march_tiles/reichstag-366199_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#1A1B1E',
          color_medium: '#725637',
          color_light: '#CCC9D4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Glass',
          type: 'friday',
          src_string: '../img/march_tiles/glass-2167690_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#040000',
          color_medium: '#A90100',
          color_light: '#F5FEE5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Glass',
          type: 'saturday',
          src_string: '../img/march_tiles/building-1276193_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#111214',
          color_medium: '#C7F4F5',
          color_light: '#FEFEFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Glass',
          type: 'sunday',
          src_string: '../img/march_tiles/stained-glass-window-327909_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#000707',
          color_medium: '#87C9FC',
          color_light: '#A8C3CC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Glass',
          type: 'holiday',
          src_string: '../img/march_tiles/Small-Broken-Glass.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#050308',
          color_medium: '#476C97',
          color_light: '#D5D3CE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Glass',
          type: 'week',
          src_string: '../img/march_tiles/building-360491_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#030406',
          color_medium: '#BDCAD3',
          color_light: '#E8EBF2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Glass',
          type: 'friday',
          src_string: '../img/march_tiles/glasses-498418_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#030303',
          color_medium: '#424649',
          color_light: '#BDC7D0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Glass',
          type: 'saturday',
          src_string: '../img/march_tiles/collection-21773_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#081A1B',
          color_medium: '#006F3F',
          color_light: '#EFC8C8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Glass',
          type: 'sunday',
          src_string: '../img/march_tiles/stained-glass-window-2482615_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#101B28',
          color_medium: '#70027A',
          color_light: '#85B1CA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Glass',
          type: 'holiday',
          src_string: '../img/march_tiles/glass-3220170_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0D1112',
          color_medium: '#C6F9F9',
          color_light: '#E9F6F5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Glass',
          type: 'week',
          src_string: '../img/march_tiles/facade-2917509_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '165%',
          color_dark: '#0D090A',
          color_medium: '#4A4859',
          color_light: '#E0DECD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Glass',
          type: 'friday',
          src_string: '../img/march_tiles/bottles-661027_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#092229',
          color_medium: '#692C80',
          color_light: '#F6FAF9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Glass',
          type: 'saturday',
          src_string: '../img/march_tiles/wallpaper-861468_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#080500',
          color_medium: '#615767',
          color_light: '#FDFBE9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Glass',
          type: 'sunday',
          src_string: '../img/march_tiles/stained-glass-windows-2669333_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#110C12',
          color_medium: '#6E939D',
          color_light: '#D9D5E4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Glass',
          type: 'holiday',
          src_string: '../img/march_tiles/museum-rietberg-66862_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#12140F',
          color_medium: '#42B37F',
          color_light: '#F0F3F6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Glass',
          type: 'week',
          src_string: '../img/march_tiles/building-2588754_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0C0B10',
          color_medium: '#BAC2C5',
          color_light: '#C7CBCE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Glass',
          type: 'friday',
          src_string: '../img/march_tiles/cup-1202809_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#060203',
          color_medium: '#BF7C37',
          color_light: '#E7EAF5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Glass',
          type: 'saturday',
          src_string: '../img/march_tiles/glass-2582828_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#070602',
          color_medium: '#554C2D',
          color_light: '#FDFDFD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Glass',
          type: 'sunday',
          src_string: '../img/march_tiles/cathedral-1481652_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#0C0E0C',
          color_medium: '#62C5FC',
          color_light: '#F0ECEC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Glass',
          type: 'holiday',
          src_string: '../img/march_tiles/glass-3286209_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#010201',
          color_medium: '#C80201',
          color_light: '#E7D6C6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Glass',
          type: 'week',
          src_string: '../img/march_tiles/architecture-315223_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '152%',
          color_dark: '#120C0A',
          color_medium: '#66A7C5',
          color_light: '#F5F8ED',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Glass',
          type: 'friday',
          src_string: '../img/march_tiles/beverages-703856_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#171716',
          color_medium: '#F5A23C',
          color_light: '#FFFFFA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Glass',
          type: 'saturday',
          src_string: '../img/march_tiles/trevor-gerzen-508625-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#2D1F1D',
          color_medium: '#C19A59',
          color_light: '#E9ECE9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Glass',
          type: 'sunday',
          src_string: '../img/march_tiles/sarah-w-380843-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#050203',
          color_medium: '#FFB333',
          color_light: '#DDE5F5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Glass',
          type: 'holiday',
          src_string: '../img/march_tiles/sven-481475-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#000409',
          color_medium: '#C4BC49',
          color_light: '#C3C7C7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Glass',
          type: 'week',
          src_string: '../img/march_tiles/michael-murphy-116043-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#1E2420',
          color_medium: '#51ACD0',
          color_light: '#F2F4F5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Glass',
          type: 'friday',
          src_string: '../img/march_tiles/david-becker-677440-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '165%',
          color_dark: '#000212',
          color_medium: '#05B7C6',
          color_light: '#F6FFFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Glass',
          type: 'saturday',
          src_string: '../img/march_tiles/sascha-berner-403283-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#0D1015',
          color_medium: '#A1CAC6',
          color_light: '#F7F7FF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Glass',
          type: 'sunday',
          src_string: '../img/march_tiles/felix-dubois-robert-93143-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#352E2D',
          color_medium: '#F704C3',
          color_light: '#BDF683',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Glass',
          type: 'holiday',
          src_string: '../img/march_tiles/chuttersnap-413005-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#02210B',
          color_medium: '#568A58',
          color_light: '#E0DEDF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Glass',
          type: 'week',
          src_string: '../img/march_tiles/giulio-casagrande-471716-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '162%',
          color_dark: '#080405',
          color_medium: '#21717E',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Glass',
          type: 'friday',
          src_string: '../img/march_tiles/henry-fournier-68573-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '156%',
          color_dark: '#020202',
          color_medium: '#D39856',
          color_light: '#FAF7F8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Glass',
          type: 'saturday',
          src_string: '../img/march_tiles/john-morell-121918-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#0F1110',
          color_medium: '#EED7C8',
          color_light: '#FFFBFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Glass',
          type: 'sunday',
          src_string: '../img/march_tiles/logan-cameron-639735-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#100000',
          color_medium: '#E22800',
          color_light: '#BEC3C5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Glass',
          type: 'holiday',
          src_string: '../img/march_tiles/architecture-1750788_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '156%',
          color_dark: '#1B1D12',
          color_medium: '#4F5E25',
          color_light: '#D8D7BB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Glass',
          type: 'week',
          src_string: '../img/march_tiles/valery-rabchenyuk-474574-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0B0C0D',
          color_medium: '#C48557',
          color_light: '#F6FAFB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Glass',
          type: 'friday',
          src_string: '../img/march_tiles/mathew-schwartz-762749-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#26050A',
          color_medium: '#FEBE02',
          color_light: '#EDEEF0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Glass',
          type: 'saturday',
          src_string: '../img/march_tiles/gabriele-diwald-474996-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#35221C',
          color_medium: '#D1B3A5',
          color_light: '#F6F2F0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Glass',
          type: 'sunday',
          src_string: '../img/march_tiles/glass-15748_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '156%',
          color_dark: '#3E4566',
          color_medium: '#106D52',
          color_light: '#40F7FF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Glass',
          type: 'holiday',
          src_string: '../img/march_tiles/amber-kipp-582334-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#134340',
          color_medium: '#8C9B81',
          color_light: '#F7FAFB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Glass',
          type: 'week',
          src_string: '../img/march_tiles/ng-59057-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#051522',
          color_medium: '#82B8D9',
          color_light: '#DFF5FD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Glass',
          type: 'friday',
          src_string: '../img/march_tiles/sandra-seitamaa-1207206-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#072221',
          color_medium: '#238D25',
          color_light: '#FBFBFB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Glass',
          type: 'saturday',
          src_string: '../img/march_tiles/moss-355359-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '182%',
          color_dark: '#000000',
          color_medium: '#D2D138',
          color_light: '#FADB67',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('march_tiles_id_seq', (SELECT MAX(id) FROM march_tiles));");
    });
};
