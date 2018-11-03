
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
        },
        {
          id: 6,
          user_author_id: 1,
          theme: 'Paper',
          type: 'sunday',
          src_string: '../img/tiles/text-1850775_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#1B0600',
          color_medium: '#61391E',
          color_light: '#AF998A',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_author_id: 1,
          theme: 'Paper',
          type: 'holiday',
          src_string: '../img/tiles/background-1972355_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#232F17',
          color_medium: '#588DAC',
          color_light: '#C97F36',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_author_id: 1,
          theme: 'Paper',
          type: 'week',
          src_string: '../img/tiles/abstract-1560358_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#9983F5',
          color_medium: '#C5EFFF',
          color_light: '#EAF5F5',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_author_id: 1,
          theme: 'Paper',
          type: 'friday',
          src_string: '../img/tiles/background-2109758_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#82653D',
          color_medium: '#D4B088',
          color_light: '#F8EACD',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_author_id: 1,
          theme: 'Paper',
          type: 'saturday',
          src_string: '../img/tiles/paper-819099_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '105%',
          color_dark: '#8949C1',
          color_medium: '#E5C4FB',
          color_light: '#F7F5FE',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_author_id: 1,
          theme: 'Paper',
          type: 'sunday',
          src_string: '../img/tiles/watercolour-2477944_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '130%',
          color_dark: '#0921F5',
          color_medium: '#54FBF4',
          color_light: '#E3EFFB',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_author_id: 1,
          theme: 'Paper',
          type: 'holiday',
          src_string: '../img/tiles/moustache-2978560_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#000000',
          color_medium: '#9BCD95',
          color_light: '#EADCD1',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_author_id: 1,
          theme: 'Paper',
          type: 'week',
          src_string: '../img/tiles/paper-787653_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#9A6C32',
          color_medium: '#BE9561',
          color_light: '#D3B57E',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_author_id: 1,
          theme: 'Paper',
          type: 'friday',
          src_string: '../img/tiles/background-1981169_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#03030B',
          color_medium: '#16BDA7',
          color_light: '#ACCBAD',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_author_id: 1,
          theme: 'Paper',
          type: 'saturday',
          src_string: '../img/tiles/background-1986036_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#483316',
          color_medium: '#8D4536',
          color_light: '#CDB18A',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_author_id: 1,
          theme: 'Paper',
          type: 'sunday',
          src_string: '../img/tiles/vintage-1283696_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#13171C',
          color_medium: '#BD7C42',
          color_light: '#F7CDD7',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_author_id: 1,
          theme: 'Paper',
          type: 'holiday',
          src_string: '../img/tiles/flapper-928296_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#150011',
          color_medium: '#DE8D93',
          color_light: '#CEE0D1',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_author_id: 1,
          theme: 'Paper',
          type: 'week',
          src_string: '../img/tiles/background-1975874_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#220D08',
          color_medium: '#9B4602',
          color_light: '#EAD22C',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_author_id: 1,
          theme: 'Paper',
          type: 'friday',
          src_string: '../img/tiles/background-1077965_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#2A1C01',
          color_medium: '#A18B66',
          color_light: '#D5C29A',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_author_id: 1,
          theme: 'Paper',
          type: 'saturday',
          src_string: '../img/tiles/egyptian-1822046_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#57220A',
          color_medium: '#B9B7A2',
          color_light: '#D6D7CF',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_author_id: 1,
          theme: 'Paper',
          type: 'sunday',
          src_string: '../img/tiles/background-2011040_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#E36E09',
          color_medium: '#F3D7C1',
          color_light: '#FFFCE9',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_author_id: 1,
          theme: 'Paper',
          type: 'holiday',
          src_string: '../img/tiles/steampunk-1122553_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#4F3622',
          color_medium: '#D0A32C',
          color_light: '#D1B471',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_author_id: 1,
          theme: 'Paper',
          type: 'week',
          src_string: '../img/tiles/vintage-1303797_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#171813',
          color_medium: '#9B9482',
          color_light: '#ACA593',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_author_id: 1,
          theme: 'Paper',
          type: 'friday',
          src_string: '../img/tiles/handwritten-1763282_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#000000',
          color_medium: '#E6A88E',
          color_light: '#E2D2C2',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_author_id: 1,
          theme: 'Paper',
          type: 'saturday',
          src_string: '../img/tiles/background-image-2098013_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '143%',
          color_dark: '#6D423D',
          color_medium: '#BB9A64',
          color_light: '#CEB98C',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_author_id: 1,
          theme: 'Paper',
          type: 'sunday',
          src_string: '../img/tiles/background-2004122_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#000000',
          color_medium: '#7C8591',
          color_light: '#B3C9DE',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_author_id: 1,
          theme: 'Paper',
          type: 'holiday',
          src_string: '../img/tiles/melissa-poole-689785-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '170%',
          color_dark: '#0A031A',
          color_medium: '#A8C202',
          color_light: '#D3D1D6',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_author_id: 1,
          theme: 'Paper',
          type: 'week',
          src_string: '../img/tiles/joanna-kosinska-129039-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#3A2100',
          color_medium: '#E6AC00',
          color_light: '#9CA7AC',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_author_id: 1,
          theme: 'Paper',
          type: 'friday',
          src_string: '../img/tiles/annie-spratt-695482-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#6B5B48',
          color_medium: '#A5A4A0',
          color_light: '#C8CBCB',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_author_id: 1,
          theme: 'Paper',
          type: 'saturday',
          src_string: '../img/tiles/scrapbook-2351352_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '110%',
          color_dark: '#434636',
          color_medium: '#A6A68E',
          color_light: '#E6E1C4',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_author_id: 1,
          theme: 'Paper',
          type: 'sunday',
          src_string: '../img/tiles/art-by-lonfeldt-726333-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#383E47',
          color_medium: '#65A02F',
          color_light: '#F1F2EA',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_author_id: 1,
          theme: 'Paper',
          type: 'holiday',
          src_string: '../img/tiles/chinh-le-duc-467185-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#7A0004',
          color_medium: '#F2A700',
          color_light: '#CED2D3',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_author_id: 1,
          theme: 'wood',
          type: 'default',
          src_string: '../img/tiles/rawpixel-589085-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#B59264',
          color_medium: '#BEA17B',
          color_light: '#DFE0DA',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_author_id: 1,
          theme: 'wood',
          type: 'mtwt',
          src_string: '../img/tiles/adam-smigielski-536767-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#000000',
          color_medium: '#F59F3F',
          color_light: '#FFDEB1',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_author_id: 1,
          theme: 'wood',
          type: 'week',
          src_string: '../img/tiles/david-boca-512386-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#21201C',
          color_medium: '#D57455',
          color_light: '#C9C5C4',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_author_id: 1,
          theme: 'wood',
          type: 'friday',
          src_string: '../img/tiles/bruno-ramos-lara-5136-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#15151F',
          color_medium: '#97C8E8',
          color_light: '#E1E2D4',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_author_id: 1,
          theme: 'wood',
          type: 'saturday',
          src_string: '../img/tiles/maarten-deckers-280014-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#01030B',
          color_medium: '#00DCCA',
          color_light: '#FFFCFB',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_author_id: 1,
          theme: 'wood',
          type: 'sunday',
          src_string: '../img/tiles/ron-whitaker-551781-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#100604',
          color_medium: '#BD99A3',
          color_light: '#FFEE84',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_author_id: 1,
          theme: 'wood',
          type: 'holiday',
          src_string: '../img/tiles/glen-carrie-66914-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#030000',
          color_medium: '#CD7D44',
          color_light: '#DACAB7',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('tiles_modules_id_seq', (SELECT MAX(id) FROM tiles_modules));");
    });
};
