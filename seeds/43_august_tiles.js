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
          theme: 'Primary Colors',
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
          theme: 'Primary Colors',
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
          theme: 'Primary Colors',
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
          theme: 'Primary Colors',
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
          theme: 'Primary Colors',
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
          theme: 'Primary Colors',
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
          theme: 'Primary Colors',
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
          theme: 'Primary Colors',
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
          theme: 'Primary Colors',
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
          theme: 'Primary Colors',
          type: 'saturday',
          src_string: '../img/august_tiles/course-695163_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#010A4F',
          color_medium: '#025093',
          color_light: '#03BFFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Primary Colors',
          type: 'sunday',
          src_string: '../img/august_tiles/currants-404686_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#0C0002',
          color_medium: '#640405',
          color_light: '#BC7A7D',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Primary Colors',
          type: 'holiday',
          src_string: '../img/august_tiles/rTesselating_Fish_Fractal_Primary_Colors_shop_preview.png',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#0D117F',
          color_medium: '#FCFE16',
          color_light: '#E5DEE5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Primary Colors',
          type: 'week',
          src_string: '../img/august_tiles/b100704f75ff4c23b79c01bcc56077a9--brugge-primary-colors.jpg',
          repeat_value: 'no-repeat',
          size_value: '115%',
          color_dark: '#051506',
          color_medium: '#FF304B',
          color_light: '#CAAB8F',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Primary Colors',
          type: 'friday',
          src_string: '../img/august_tiles/background-2499411_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#07627F',
          color_medium: '#389DBB',
          color_light: '#5EC6E9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Primary Colors',
          type: 'saturday',
          src_string: '../img/august_tiles/wall-628681_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#D12C09',
          color_medium: '#9F9A7E',
          color_light: '#CBC1B3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Primary Colors',
          type: 'sunday',
          src_string: '../img/august_tiles/meterstab-2243316_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#392C20',
          color_medium: '#B59F10',
          color_light: '#BBA988',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Primary Colors',
          type: 'holiday',
          src_string: '../img/august_tiles/cdd4016a363d1cc8fccc056011b7e653--color-mix-primary-colors.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#0D0A0E',
          color_medium: '#FE0000',
          color_light: '#E3D104',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Primary Colors',
          type: 'week',
          src_string: '../img/august_tiles/primary_colors_fs.jpg',
          repeat_value: 'no-repeat',
          size_value: '143%',
          color_dark: '#040509',
          color_medium: '#CB0E14',
          color_light: '#EFFBAB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Primary Colors',
          type: 'friday',
          src_string: '../img/august_tiles/red-quilted-texture_1048-1757.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#450100',
          color_medium: '#CB2F30',
          color_light: '#FEF6AC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Primary Colors',
          type: 'saturday',
          src_string: '../img/august_tiles/background-1591227_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '185%',
          color_dark: '#3B2807',
          color_medium: '#FF9501',
          color_light: '#FEFD02',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Primary Colors',
          type: 'sunday',
          src_string: '../img/august_tiles/deep-blue-wood-texture-wallpaper.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#012093',
          color_medium: '#0275E1',
          color_light: '#0579ED',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Primary Colors',
          type: 'holiday',
          src_string: '../img/august_tiles/RBrowning_PRIMARY_COLORS_48_x_60.jpg',
          repeat_value: 'no-repeat',
          size_value: '130%',
          color_dark: '#2E3033',
          color_medium: '#2E80E2',
          color_light: '#CAE8E5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Primary Colors',
          type: 'week',
          src_string: '../img/august_tiles/Red-Blue-Yellow__93381.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#072178',
          color_medium: '#AE030B',
          color_light: '#F5FAE6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Primary Colors',
          type: 'friday',
          src_string: '../img/august_tiles/yellow-watercolor-texture.jpg',
          repeat_value: 'no-repeat',
          size_value: '130%',
          color_dark: '#C07207',
          color_medium: '#FDD011',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Primary Colors',
          type: 'saturday',
          src_string: '../img/august_tiles/blue-wall-texture-with-damask-design-background.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#020114',
          color_medium: '#010C6B',
          color_light: '#356DF6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Primary Colors',
          type: 'sunday',
          src_string: '../img/august_tiles/Metallic-Grid-Texture-8.jpg',
          repeat_value: 'no-repeat',
          size_value: '170%',
          color_dark: '#000600',
          color_medium: '#8F1400',
          color_light: '#D19F80',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('august_tiles_id_seq', (SELECT MAX(id) FROM august_tiles));");
    });
};
