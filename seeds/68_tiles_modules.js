
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
        },
        {
          id: 3,
          user_author_id: 1,
          theme: 'Paper',
          type: 'week',
          src_string: '../img/tiles/Paper-texture-picture-material-2-40545.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#9D7D4E',
          color_medium: '#D2B082',
          color_light: '#DCC599',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_author_id: 1,
          theme: 'Paper',
          type: 'friday',
          src_string: '../img/tiles/map-2614404_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#555446',
          color_medium: '#9B6257',
          color_light: '#FBFCF4',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_author_id: 1,
          theme: 'Paper',
          type: 'saturday',
          src_string: '../img/tiles/scrapbook-696235_1920.png',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#000000',
          color_medium: '#B1D455',
          color_light: '#E3ECD2',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('tiles_modules_id_seq', (SELECT MAX(id) FROM tiles_modules));");
    });
};
