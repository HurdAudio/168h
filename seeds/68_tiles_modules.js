
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tiles_modules').del()
    .then(function () {
      // Inserts seed entries
      return knex('tiles_modules').insert([
        {
          id: 1,
          user_author_id: 1,
          theme: 'Paper',
          type: 'default',
          src_string: '../img/tiles/159.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#000000',
          color_medium: '#D1D1D1',
          color_light: '#F2F2F2',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_author_id: 1,
          theme: 'Paper',
          type: 'mtwt',
          src_string: '../img/tiles/paper_texture_3.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#000000',
          color_medium: '#DBDBDB',
          color_light: '#F4F4F4',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('tiles_modules_id_seq', (SELECT MAX(id) FROM tiles_modules));");
    });
};
