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
          theme: 'glass',
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
          theme: 'glass',
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
          theme: 'glass',
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
          theme: 'glass',
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
          theme: 'glass',
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
          theme: 'glass',
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
          theme: 'glass',
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
          theme: 'glass',
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
          theme: 'glass',
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
          theme: 'glass',
          type: 'saturday',
          src_string: '../img/march_tiles/texture-1756173_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '125%',
          color_dark: '#326C5B',
          color_medium: '#ED5514',
          color_light: '#CEE1DF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('march_tiles_id_seq', (SELECT MAX(id) FROM march_tiles));");
    });
};
