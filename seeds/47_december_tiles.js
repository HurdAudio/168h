'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('december_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('december_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'snow',
          type: 'default',
          src_string: '../img/december_tiles/5342733777_083fee0263_b.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#82858E',
          color_medium: '#A7AEB8',
          color_light: '#D0D1D6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'snow',
          type: 'week',
          src_string: '../img/december_tiles/snow-texture--14.jpg',
          repeat_value: 'no-repeat',
          size_value: '190%',
          color_dark: '#7C7A87',
          color_medium: '#958F94',
          color_light: '#E4DFCF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'snow',
          type: 'mtwt',
          src_string: '../img/december_tiles/9479e7d7b1fa6fe9beea06fabf05cd9f.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#A4B4C4',
          color_medium: '#E0E4ED',
          color_light: '#F3F8FB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'snow',
          type: 'friday',
          src_string: '../img/december_tiles/snow_texture_2_by_arctic_stock.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#677C9B',
          color_medium: '#97A3A3',
          color_light: '#D0CBB5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('december_tiles_id_seq', (SELECT MAX(id) FROM december_tiles));");
    });
};
