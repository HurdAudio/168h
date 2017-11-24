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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('december_tiles_id_seq', (SELECT MAX(id) FROM december_tiles));");
    });
};
