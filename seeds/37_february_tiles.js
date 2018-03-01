'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('february_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('february_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'default',
          src_string: '../img/february_tiles/Red-Silk-Fabric-Texture-1.jpg',
          repeat_value: 'no-repeat',
          size_value: '220%',
          color_dark: '#76081B',
          color_medium: '#CD2C3A',
          color_light: '#E8526B',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'week',
          src_string: '../img/february_tiles/red_chenille_fabric_texture_by_beckas.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#2A0100',
          color_medium: '#9F0E11',
          color_light: '#CF0709',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'mtwt',
          src_string: '../img/february_tiles/silk-326018_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#3B1512',
          color_medium: '#5A201C',
          color_light: '#EB564F',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'friday',
          src_string: '../img/february_tiles/il_340x270.1100550400_1zqt.jpg',
          repeat_value: 'no-repeat',
          size_value: '130%',
          color_dark: '#6F0519',
          color_medium: '#E3202E',
          color_light: '#F97060',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'saturday',
          src_string: '../img/february_tiles/elegant-red-silk-background-20.jpg',
          repeat_value: 'no-repeat',
          size_value: '190%',
          color_dark: '#040404',
          color_medium: '#53040A',
          color_light: '#FC4541',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'sunday',
          src_string: '../img/february_tiles/rose-2819660_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#412510',
          color_medium: '#FE372A',
          color_light: '#E86C6F',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'holiday',
          src_string: '../img/february_tiles/silk-fabric-texture-5-1024x682.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#FE0122',
          color_medium: '#FC51D3',
          color_light: '#FE9CFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'week',
          src_string: '../img/february_tiles/TE123424759.jpeg',
          repeat_value: 'no-repeat',
          size_value: '110%',
          color_dark: '#35080D',
          color_medium: '#CD1419',
          color_light: '#F48687',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'friday',
          src_string: '../img/february_tiles/Satin-silk-fabric.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#4F0713',
          color_medium: '#B71B26',
          color_light: '#FA5C64',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'saturday',
          src_string: '../img/february_tiles/roter-samt_2160x1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '120%',
          color_dark: '#290B0B',
          color_medium: '#4C1616',
          color_light: '#611B1D',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'sunday',
          src_string: '../img/february_tiles/25-dark-red-silk.jpg',
          repeat_value: 'no-repeat',
          size_value: '190%',
          color_dark: '#310B0A',
          color_medium: '#8C2621',
          color_light: '#F57E5A',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'holiday',
          src_string: '../img/february_tiles/oriental-toile-venetian-pink-by-beacon-hill-701229.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#7B1C20',
          color_medium: '#895636',
          color_light: '#B08C62',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'week',
          src_string: '../img/february_tiles/background-1241207_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#180606',
          color_medium: '#BF070C',
          color_light: '#F6B6AE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'friday',
          src_string: '../img/february_tiles/texture-1262571_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#17070B',
          color_medium: '#77212A',
          color_light: '#C66C85',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'saturday',
          src_string: '../img/february_tiles/background-2168549_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '185%',
          color_dark: '#251313',
          color_medium: '#422223',
          color_light: '#DA9499',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'sunday',
          src_string: '../img/february_tiles/red-893318_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#350B15',
          color_medium: '#C6274C',
          color_light: '#E0123F',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'holiday',
          src_string: '../img/february_tiles/carpet-100084_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#202333',
          color_medium: '#DD2843',
          color_light: '#F39674',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'week',
          src_string: '../img/february_tiles/240_F_104948324_Dxb9kAsz3vHr6DxdCbMZMCZ3FAvCYUpc.jpg',
          repeat_value: 'no-repeat',
          size_value: '210%',
          color_dark: '#0B0001',
          color_medium: '#3B0202',
          color_light: '#B00203',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'friday',
          src_string: '../img/february_tiles/red-velvet-wallpaper-22072-22628-hd-wallpapers.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#000000',
          color_medium: '#3F0102',
          color_light: '#910806',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'saturday',
          src_string: '../img/february_tiles/orangesilk.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#140610',
          color_medium: '#92320E',
          color_light: '#F1D433',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'sunday',
          src_string: '../img/february_tiles/41D56ja12LL.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#490202',
          color_medium: '#830900',
          color_light: '#A90801',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'holiday',
          src_string: '../img/february_tiles/silk_material_soft_light_50576_1920x1080.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#29242B',
          color_medium: '#4B5E5B',
          color_light: '#D5CCDA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'week',
          src_string: '../img/february_tiles/fabric-2313919_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0E0D12',
          color_medium: '#303440',
          color_light: '#6E7E8E',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'friday',
          src_string: '../img/february_tiles/Red-Color-of-Romance-and-Love_Salon-Buzz-800x533.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#1A0200',
          color_medium: '#6B0510',
          color_light: '#F12B42',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'saturday',
          src_string: '../img/february_tiles/02b4703b2d26b06336bebbefa76d2f9f.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#241E3D',
          color_medium: '#D3101D',
          color_light: '#D4BD84',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'sunday',
          src_string: '../img/february_tiles/3332477693_cfaaf065c5.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#750D04',
          color_medium: '#B32318',
          color_light: '#CB6D53',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'holiday',
          src_string: '../img/february_tiles/TexturesCom_Various0237_1_S.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#38284B',
          color_medium: '#880309',
          color_light: '#DE8C40',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'week',
          src_string: '../img/february_tiles/il_340x270.1023291441_hggc.jpg',
          repeat_value: 'no-repeat',
          size_value: '130%',
          color_dark: '#0C0F14',
          color_medium: '#5D594E',
          color_light: '#CECAB0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'friday',
          src_string: '../img/february_tiles/red_texture_by_lg_design-d8m1km6.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#720102',
          color_medium: '#970102',
          color_light: '#DF0000',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'saturday',
          src_string: '../img/february_tiles/Traditions-Linens-vintage-velvet-crimson.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#310502',
          color_medium: '#591007',
          color_light: '#87372C',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'sunday',
          src_string: '../img/february_tiles/Silk-Brocade-Fabric-2201-color-420.jpg',
          repeat_value: 'no-repeat',
          size_value: '120%',
          color_dark: '#4E3D3A',
          color_medium: '#891717',
          color_light: '#D7B087',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'holiday',
          src_string: '../img/february_tiles/016_Marbled-VelvetFABRIC_800px.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#121423',
          color_medium: '#B73E2A',
          color_light: '#F0EFE8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'week',
          src_string: '../img/february_tiles/sofas-edloe-finch-ef-z1-3s004v-tribeca-mid-century-modern-velvet-sofa-dark-green-630591784517_188.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#070707',
          color_medium: '#182D28',
          color_light: '#EBF3F1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Silk/Velvet',
          type: 'friday',
          src_string: '../img/february_tiles/tmp_7Y6WOK.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#5C1710',
          color_medium: '#CA7B38',
          color_light: '#CBA16A',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('february_tiles_id_seq', (SELECT MAX(id) FROM february_tiles));");
    });
};
