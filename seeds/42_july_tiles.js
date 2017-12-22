'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('july_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('july_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'steam',
          type: 'default',
          src_string: '../img/july_tiles/Mammatus-storm-clouds_San-Antonio.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#010D1B',
          color_medium: '#7A838C',
          color_light: '#FFFFFD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'steam',
          type: 'week',
          src_string: '../img/july_tiles/clouds-2239564_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '240%',
          color_dark: '#0B335C',
          color_medium: '#5A8399',
          color_light: '#D0CABC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'steam',
          type: 'mtwt',
          src_string: '../img/july_tiles/steamdays.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#090B0A',
          color_medium: '#636560',
          color_light: '#989991',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'steam',
          type: 'friday',
          src_string: '../img/july_tiles/fridaySteam.jpg',
          repeat_value: 'no-repeat',
          size_value: '190%',
          color_dark: '#010101',
          color_medium: '#424149',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'steam',
          type: 'saturday',
          src_string: '../img/july_tiles/saturdaySteam.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#010101',
          color_medium: '#2E353F',
          color_light: '#A3BDD4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'steam',
          type: 'sunday',
          src_string: '../img/july_tiles/sundaySteam.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#445659',
          color_medium: '#BEAF9A',
          color_light: '#E1E1D9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'steam',
          type: 'holiday',
          src_string: '../img/july_tiles/steamHoliday.jpg',
          repeat_value: 'no-repeat',
          size_value: '210%',
          color_dark: '#070200',
          color_medium: '#781E28',
          color_light: '#F1E7E5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'steam',
          type: 'week',
          src_string: '../img/july_tiles/yellowstone-1711475_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '190%',
          color_dark: '#100D06',
          color_medium: '#9B6D22',
          color_light: '#FFFFFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'steam',
          type: 'friday',
          src_string: '../img/july_tiles/cloud-2238140_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '157%',
          color_dark: '#1276C2',
          color_medium: '#7EABC8',
          color_light: '#D1D8DE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'steam',
          type: 'saturday',
          src_string: '../img/july_tiles/cloud-2680190_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#525E6A',
          color_medium: '#D0D1D3',
          color_light: '#D3D3D5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'steam',
          type: 'sunday',
          src_string: '../img/july_tiles/smoke-758274_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#464709',
          color_medium: '#746D27',
          color_light: '#A29E54',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'steam',
          type: 'holiday',
          src_string: '../img/july_tiles/sky-1066427_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '165%',
          color_dark: '#000000',
          color_medium: '#7D4A06',
          color_light: '#FFDF4E',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'steam',
          type: 'week',
          src_string: '../img/july_tiles/industry-611668_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#0D0803',
          color_medium: '#584D42',
          color_light: '#FFF7E1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'steam',
          type: 'friday',
          src_string: '../img/july_tiles/namafjall-1803628_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#111111',
          color_medium: '#684F3B',
          color_light: '#D5D5D7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'steam',
          type: 'saturday',
          src_string: '../img/july_tiles/texture-699697_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#2D2B2C',
          color_medium: '#62817C',
          color_light: '#FDFFEA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'steam',
          type: 'sunday',
          src_string: '../img/july_tiles/clouds-1408073_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#627490',
          color_medium: '#7993B4',
          color_light: '#FEFEFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'steam',
          type: 'holiday',
          src_string: '../img/july_tiles/rainbow_cloud_texture_by_kmiloneko.png',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#8759FC',
          color_medium: '#81FF5E',
          color_light: '#BDFFFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'steam',
          type: 'week',
          src_string: '../img/july_tiles/GettyImages-172148977-56a504c75f9b58b7d0da9223.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#0A090E',
          color_medium: '#8C867A',
          color_light: '#E7E8ED',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('july_tiles_id_seq', (SELECT MAX(id) FROM july_tiles));");
    });
};
