'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('june_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('june_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/my-small-world.jpg',
          title: 'My Small World',
          artist: 'Achraf Baznani',
          year: '2014',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 25, 5, 15, 23 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/tumblr-nvtla1gqan1qdsei8o1-1280.jpg',
          title: 'Chloë Sevigny',
          artist: 'Wolfgang Tillmans',
          year: '1995',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 25, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/eight-piles-2003.jpg',
          title: 'Eight Piles',
          artist: 'David Burdeny',
          year: '2003',
          rule: {
            "monday": [ 25, 5, 15, 23 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/gold-in-the-morning-series.jpg',
          title: 'Gold in the morning (A - J)',
          artist: 'Alfredo Jaar',
          year: '1985',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 25, 5, 15, 23 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/ratingen-swimming-pool-1987.jpg',
          title: 'Ratingen Swimming Pool',
          artist: 'Andreas Gursky',
          year: '1987',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 25, 5, 15, 23 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/untitled-cigarettes-1979.jpg',
          title: 'Untitled (Cigarettes)',
          artist: 'Richard Prince',
          year: '1978 - 1979',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 25, 5, 15, 23 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/untitled-35mm-transparency-1990.jpg',
          title: 'Untitled (35mm Transparency)',
          artist: 'Li Yuan-chia',
          year: '1990',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/untitled-1930.jpg',
          title: 'Untitled',
          artist: 'Kansuke Yamamoto',
          year: '1930',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/pavilion-de-l-elegance-madeleine-vionnet-1937.jpg',
          title: 'Pavilion de l\'elegance (Madeleine Vionnet)',
          artist: 'Wols',
          year: '1937',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/ridiculous-portrait-contact-sheet-1972.jpg',
          title: 'Ridiculous Portrait (Contact Sheet)',
          artist: 'May Wilson',
          year: '1972',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/blindman-s-buff-1898.jpg',
          title: 'Blindman\'s Buff',
          artist: 'Clarence White',
          year: '1898',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/nude-1925.jpg',
          title: 'Nude',
          artist: 'Edward Weston',
          year: '1925',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/1994-6-1994.jpg',
          title: '1994.6',
          artist: 'Ai Weiwei',
          year: '1994',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 26, 6, 16, 24 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/arnold-schwarzenegger-1977.jpg',
          title: 'Arnold Schwarzenegger',
          artist: 'Andy Warhol',
          year: '1977',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/fotogramma-1997.jpg',
          title: 'Fotogramma',
          artist: 'Luigi Veronesi',
          year: '1997',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 3, 13, 23, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/surimpression-1934.jpg',
          title: 'Surimpression',
          artist: 'Raoul Ubac',
          year: '1934',
          rule: {
            "monday": [ 3, 13, 23, 30 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/atlas-i-1995.jpg',
          title: 'Atlas I',
          artist: 'Rirkrit Tiravanija',
          year: '1995',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 3, 13, 23, 30 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/wolfgangtillmans-1992lutz-alex-sitting-in-the-trees-1.jpg',
          title: 'Lutz Alex Sitting in the Trees 1',
          artist: 'Wolfgang Tillmans',
          year: '1992',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 3, 13, 23, 30 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/photograph-of-photograph-1973.jpg',
          title: 'Photograph of Photograph',
          artist: 'Takamatsu Jiro',
          year: '1973',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 3, 13, 23, 30 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/self-portrait-with-dada-kopf-dada-head-1920.jpg',
          title: 'Self-portrait with Dada-Kopf (Dada Head)',
          artist: 'Sophie Taeuber-Arp',
          year: '1920',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 3, 13, 23, 30 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/cabot-street-cinema-massachusetts-1978.jpg',
          title: 'Cabot Street Cinema, Massachusetts',
          artist: 'Hiroshi Sugimoto',
          year: '1978',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 4, 14, 24, 1 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/self-portrait-1886.jpg',
          title: 'Self-portrait',
          artist: 'Alfred Stieglitz',
          year: '1886',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 4, 14, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/prince-albert-1938.jpg',
          title: 'Prince Albert',
          artist: 'Frederick Sommer',
          year: '1938',
          rule: {
            "monday": [ 4, 14, 24, 1 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/las-animas-1997.jpg',
          title: 'Las Animas',
          artist: 'Kiki Smith',
          year: '1997',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 4, 14, 24, 1 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/gloucester-16a-1944.jpg',
          title: 'Gloucester 16A',
          artist: 'Aaron Siskind',
          year: '1944',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 4, 14, 24, 1 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/untitled-b-1975.jpg',
          title: 'Untitled B',
          artist: 'Cindy Sherman',
          year: '1975',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 28, 26 ],
            "thursday": [ 4, 14, 24, 1 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/doylestown-house-the-stove-1917.jpg',
          title: 'Doylestown House—The Stove',
          artist: 'Charles Sheeler',
          year: '1917',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 28, 26 ],
            "friday": [ 4, 14, 24, 1 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/rooftops-1916.jpg',
          title: 'Rooftops',
          artist: 'Morton Shamberg',
          year: '1916',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 29, 27 ],
            "saturday": [ 5, 15, 25, 2 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/the-burning-of-rome-1907.jpg',
          title: 'The Burning of Rome',
          artist: 'George Seeley',
          year: '1907',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 29, 27 ],
            "sunday": [ 5, 15, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/amourette-schadography-1918.jpg',
          title: 'Amourette (Schadography)',
          artist: 'Christian Schad',
          year: '1918',
          rule: {
            "monday": [ 5, 15, 25, 2 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 29, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/conoco-shamrock-texas-from-five-views-from-the-panhandle-series.jpg',
          title: 'Conoco - Shamrock, Texas (from Five Views from the Panhandle Series)',
          artist: 'Edward Ruscha',
          year: 'XX cent.',
          rule: {
            "monday": [ 29, 9, 29, 27 ],
            "tuesday": [ 5, 15, 25, 2 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/postcard-1968.jpg',
          title: 'Postcard',
          artist: 'Dieter Roth',
          year: '1968',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 29, 27 ],
            "wednesday": [ 5, 15, 25, 2 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/vormittagsspuk-1927.jpg',
          title: 'Vormittagsspuk',
          artist: 'Hans Richter',
          year: '1927',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 29, 27 ],
            "thursday": [ 5, 15, 25, 2 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/the-coat-stand-1920.jpg',
          title: 'The Coat Stand',
          artist: 'Man Ray',
          year: '1920',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 29, 27 ],
            "friday": [ 5, 15, 25, 2 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/untitled-cowboys-1986.jpg',
          title: 'Untitled (Cowboys)',
          artist: 'Richard Prince',
          year: '1986',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [30, 10, 30, 28 ],
            "saturday": [ 6, 16, 26, 3 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('june_arts_id_seq', (SELECT MAX(id) FROM june_arts));");
    });
};
