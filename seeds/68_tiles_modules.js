
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tiles_modules').del()
    .then(function () {
      // Inserts seed entries
      return knex('tiles_modules').insert([
        {
          id: 1,
          user_author_id: 1,
          theme: 'Default January',
          type: 'default',
          src_string: '../img/tiles/159.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#000000',
          color_medium: '#D1D1D1',
          color_light: '#F2F2F2',
          public: true
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('tiles_modules_id_seq', (SELECT MAX(id) FROM tiles_modules));");
    });
};
