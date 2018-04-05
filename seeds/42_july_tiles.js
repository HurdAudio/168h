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
          theme: 'Steam',
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
          theme: 'Steam',
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
          theme: 'Steam',
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
          theme: 'Steam',
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
          theme: 'Steam',
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
          theme: 'Steam',
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
          theme: 'Steam',
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
          theme: 'Steam',
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
          theme: 'Steam',
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
          theme: 'Steam',
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
          theme: 'Steam',
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
          theme: 'Steam',
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
          theme: 'Steam',
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
          theme: 'Steam',
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
          theme: 'Steam',
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
          theme: 'Steam',
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
          theme: 'Steam',
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
          theme: 'Steam',
          type: 'week',
          src_string: '../img/july_tiles/GettyImages-172148977-56a504c75f9b58b7d0da9223.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#0A090E',
          color_medium: '#8C867A',
          color_light: '#E7E8ED',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Steam',
          type: 'friday',
          src_string: '../img/july_tiles/Solar_coronae_created_by_the_steam_getting_out_hot_springs_1.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#030303',
          color_medium: '#373125',
          color_light: '#EFEBEC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Steam',
          type: 'saturday',
          src_string: '../img/july_tiles/Why-Ice-Dam-Steaming-Is-Safe.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#5F4F4B',
          color_medium: '#8D7F7E',
          color_light: '#BBB8BF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Steam',
          type: 'sunday',
          src_string: '../img/july_tiles/blue_steam_texture_by_beckas.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#4B7897',
          color_medium: '#88B3C4',
          color_light: '#DBD9E7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Steam',
          type: 'holiday',
          src_string: '../img/july_tiles/TexturesCom_Skies0188_M.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#796F91',
          color_medium: '#A17180',
          color_light: '#FFB48D',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Steam',
          type: 'week',
          src_string: '../img/july_tiles/clouds-1473311_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#17446D',
          color_medium: '#9C9FA6',
          color_light: '#DFDCD2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Steam',
          type: 'friday',
          src_string: '../img/july_tiles/fridaySteamers.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#110101',
          color_medium: '#52240D',
          color_light: '#8B5531',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Steam',
          type: 'saturday',
          src_string: '../img/july_tiles/cumulus_clouds.jpg',
          repeat_value: 'no-repeat',
          size_value: '130%',
          color_dark: '#0247E2',
          color_medium: '#5890E5',
          color_light: '#EDF7FA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Steam',
          type: 'sunday',
          src_string: '../img/july_tiles/wallpaper_hipster_blue__d_by_analaurasam-d6a2v4v.jpg',
          repeat_value: 'no-repeat',
          size_value: '165%',
          color_dark: '#1A1D22',
          color_medium: '#41657D',
          color_light: '#C4D5ED',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Steam',
          type: 'holiday',
          src_string: '../img/july_tiles/sky-1.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#262624',
          color_medium: '#644F3D',
          color_light: '#FEA354',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Steam',
          type: 'week',
          src_string: '../img/july_tiles/weeksteam.jpeg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#061F3E',
          color_medium: '#8995A5',
          color_light: '#FAFAFA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Steam',
          type: 'friday',
          src_string: '../img/july_tiles/The-Dream-©-Judith-Brandon-1100x759.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#1E1E23',
          color_medium: '#8E6172',
          color_light: '#9E9073',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Steam',
          type: 'saturday',
          src_string: '../img/july_tiles/smoke-3075644_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#030303',
          color_medium: '#1F1F1F',
          color_light: '#6A8BB9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Steam',
          type: 'sunday',
          src_string: '../img/july_tiles/new-zealand-3018634_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#000706',
          color_medium: '#034484',
          color_light: '#F5F1E8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Steam',
          type: 'holiday',
          src_string: '../img/july_tiles/smoke-268892_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#000002',
          color_medium: '#5F5F5F',
          color_light: '#F5F5F5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Steam',
          type: 'week',
          src_string: '../img/july_tiles/140130190453_1_540x360.jpg',
          repeat_value: 'no-repeat',
          size_value: '151%',
          color_dark: '#070707',
          color_medium: '#AFAFAF',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Steam',
          type: 'friday',
          src_string: '../img/july_tiles/54805-kettle_teaser.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#0B161A',
          color_medium: '#1A3B52',
          color_light: '#AEC6A5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Steam',
          type: 'saturday',
          src_string: '../img/july_tiles/GetImage.jpeg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#030603',
          color_medium: '#44433F',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Steam',
          type: 'sunday',
          src_string: '../img/july_tiles/volcanic_cloud.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#131522',
          color_medium: '#A2A5B6',
          color_light: '#FEC5B7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Steam',
          type: 'holiday',
          src_string: '../img/july_tiles/cloudPink.jpeg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#190B25',
          color_medium: '#655890',
          color_light: '#FDFDFD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Steam',
          type: 'week',
          src_string: '../img/july_tiles/Smoke-Fog-Texture-Black.jpg',
          repeat_value: 'no-repeat',
          size_value: '185%',
          color_dark: '#060606',
          color_medium: '#6C6C6C',
          color_light: '#FAFAFA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Steam',
          type: 'friday',
          src_string: '../img/july_tiles/free_texture_friday_728-1024x682.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#031430',
          color_medium: '#1692B3',
          color_light: '#E3D6EA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Steam',
          type: 'saturday',
          src_string: '../img/july_tiles/sky-background-for-photoshop-11.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#3F5C84',
          color_medium: '#1E6CC1',
          color_light: '#F7F7F4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('july_tiles_id_seq', (SELECT MAX(id) FROM july_tiles));");
    });
};
