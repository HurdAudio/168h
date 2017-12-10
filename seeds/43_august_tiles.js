'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('august_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('august_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'primary colors',
          type: 'default',
          src_string: '../img/august_tiles/oZCxYKC.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#000000',
          color_medium: '#C4C723',
          color_light: '#2AFEFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'primary colors',
          type: 'week',
          src_string: '../img/august_tiles/18FF5DCF-072D-4227-AD0B-12FFF1348E95.jpeg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#030802',
          color_medium: '#EE2128',
          color_light: '#FECD06',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'primary colors',
          type: 'mtwt',
          src_string: '../img/august_tiles/primaries.png',
          repeat_value: 'no-repeat',
          size_value: '105%',
          color_dark: '#212322',
          color_medium: '#0192D6',
          color_light: '#FAFFFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'primary colors',
          type: 'friday',
          src_string: '../img/august_tiles/redPrimary.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#A42A03',
          color_medium: '#82483D',
          color_light: '#BD8E7C',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'primary colors',
          type: 'saturday',
          src_string: '../img/august_tiles/yellow-primary.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#F6C837',
          color_medium: '#F6F072',
          color_light: '#F9F9F9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'primary colors',
          type: 'sunday',
          src_string: '../img/august_tiles/blue-plaid-fabric-texture.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#051E5B',
          color_medium: '#2D74A4',
          color_light: '#FEFDF9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'primary colors',
          type: 'holiday',
          src_string: '../img/august_tiles/circles-27975_1280.png',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#0000FE',
          color_medium: '#FE0000',
          color_light: '#FFFF01',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'primary colors',
          type: 'week',
          src_string: '../img/august_tiles/large-brolly_crop-c82a62fdbf221f1abe6a269945b62557.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#01199E',
          color_medium: '#00BD76',
          color_light: '#F4C0C9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'primary colors',
          type: 'friday',
          src_string: '../img/august_tiles/sun-flower-2713120_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#2A0704',
          color_medium: '#AA9F3A',
          color_light: '#FEFD63',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'primary colors',
          type: 'saturday',
          src_string: '../img/august_tiles/course-695163_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#010A4F',
          color_medium: '#025093',
          color_light: '#03BFFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('august_tiles_id_seq', (SELECT MAX(id) FROM august_tiles));");
    });
};
