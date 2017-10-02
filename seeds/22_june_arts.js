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
            "friday": [30, 10, 20, 28 ],
            "saturday": [ 6, 16, 26, 3 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/untitled-1959.jpg',
          title: 'Untitled',
          artist: 'Otto Piene',
          year: '1959',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 6, 16, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/the-egg-1967.jpg',
          title: 'The Egg',
          artist: 'Lygia Pape',
          year: '1967',
          rule: {
            "monday": [ 6, 16, 26, 3 ],
            "tuesday": [ 5, 15, 25, 3 ],
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
          id: 38,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/whirlpool-eye-of-the-storm-1973.jpg',
          title: 'Whirlpool (Eye of the Storm)',
          artist: 'Dennis Oppenheim',
          year: '1973',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 6, 16, 26, 3 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/1965-1-d-tail-photo-1965.jpg',
          title: '1965 / 1 - ∞ /détail photo ?',
          artist: 'Roman Opalka',
          year: '1965',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 6, 16, 26, 3 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/untitled-1980.jpg',
          title: 'Untitled',
          artist: 'Eduardo Nery',
          year: '1980',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 6, 16, 26, 3 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/l-odalisque-turbulente-1967.jpg',
          title: 'L\'odalisque turbulente',
          artist: 'Pierre Molinier',
          year: '1967',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 6, 16, 26, 3 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/double-portrait.jpg',
          title: 'Double Portrait',
          artist: 'Laszlo Moholy-Nagy',
          year: 'c.1923',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 7, 17, 27, 4 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/untitled-1970-3.jpg',
          title: 'Untitled',
          artist: 'Nasreen Mohamedi',
          year: '1970',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 7, 17, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/le-pont-neuf-daguerreotype-1848.jpg',
          title: 'Le Pont Neuf (daguerreotype)',
          artist: 'Anton Melbye',
          year: '1848',
          rule: {
            "monday": [ 7, 17, 27, 4 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/painting-objects-1980.jpg',
          title: 'Painting-Objects',
          artist: 'Florin Maxa',
          year: '1980',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 7, 17, 27, 4 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/eros-crom-tico-1964.jpg',
          title: 'Eros Cromático',
          artist: 'Jorge Martins',
          year: '1964',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 7, 17, 27, 4 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/antiportrait-1984.jpg',
          title: 'Antiportrait',
          artist: 'Marcel Marien',
          year: '1984',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 7, 17, 27, 4 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/new-york-boy-shining-shoes-july-1952-1952.jpg',
          title: 'New York (Boy Shining Shoes), July 1952',
          artist: 'Vivian Maier',
          year: '1952',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 7, 17, 27, 4 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/double-portrait-1930.jpg',
          title: 'Double Portrait',
          artist: 'Dora Maar',
          year: '1930',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 8, 18, 28, 5 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/buried-cube-containing-an-object-of-importance-but-little-value-1968.jpg',
          title: 'Buried Cube Containing an Object of Importance but Little Value',
          artist: 'Sol LeWitt',
          year: '1968',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 8, 18, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/meine-diana-1896.jpg',
          title: 'Meine Diana',
          artist: 'Heinrich Kuhn',
          year: '1896',
          rule: {
            "monday": [ 8, 18, 28, 5 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/portrait.jpg',
          title: 'Portrait',
          artist: 'Alekos Kontopoulos',
          year: 'XX cent.',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 8, 18, 28, 5 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/leap-into-the-void-1960.jpg',
          title: 'Leap into the Void',
          artist: 'Yves Klein',
          year: '1960',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 8, 18, 28, 5 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/from-five-04-2.jpg',
          title: 'From Five',
          artist: 'Abbas Kiarostami',
          year: '2005',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 8, 18, 28, 5 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/portrait-of-marguerite-khnopff-1890.jpg',
          title: 'Portrait of Marguerite Khnopff',
          artist: 'Fernand Khnopff',
          year: '1890',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 8, 18, 28, 5 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/circus-budapest-19-may-1920-1920.jpg',
          title: 'Circus, Budapest, 19 May 1920',
          artist: 'Andre Kertesz',
          year: '1920',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 9, 19, 29, 6 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/chief-flying-hawk-1898.jpg',
          title: 'Chief Flying Hawk',
          artist: 'Gertrude Kasebier',
          year: '1898',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 9, 19, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/gipsy-camp-1910.jpg',
          title: 'Gipsy Camp',
          artist: 'David Kakabadze',
          year: '1910',
          rule: {
            "monday": [ 9, 19, 29, 6 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/girl-t-1996.jpg',
          title: 'Girl-T',
          artist: 'Leiko Ikemura',
          year: '1996',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 9, 19, 29, 6 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/duration-piece-4-bradford-massachusetts-1968.jpg',
          title: 'Duration Piece #4 Bradford Massachusetts',
          artist: 'Douglas Huebler',
          year: '1968',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 9, 19, 29, 6 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/untitled-from-the-series-still-water-the-river-thames-for-example-1999.jpg',
          title: 'Untitled (from the series Still Water (The River Thames, for Example))',
          artist: 'Roni Horn',
          year: '1999',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 9, 19, 29, 6 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/sixty-seconds-of-light-1970.jpg',
          title: 'Sixty Seconds of Light',
          artist: 'John Hilliard',
          year: '1970',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 9, 19, 29, 6 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/typographic-nude-1965.jpg',
          title: 'Typographic Nude',
          artist: 'Robert Heinecken',
          year: '1965',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 10, 20, 30, 7 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/untitled-1942.jpg',
          title: 'Untitled',
          artist: 'David Hare',
          year: '1942',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 10, 20, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/untitled-self-portrait-2000.jpg',
          title: 'Untitled (Self-Portrait)',
          artist: 'Ann Hamilton',
          year: '2000',
          rule: {
            "monday": [ 10, 20, 30, 7 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/garters-1939.jpg',
          title: 'Garters',
          artist: 'Philippe Halsman',
          year: '1939',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 10, 20, 30, 7 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/shanghai-2000.jpg',
          title: 'Shanghai',
          artist: 'Andreas Gursky',
          year: '2000',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 10, 20, 30, 7 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/untitled-diptych-1984.jpg',
          title: 'Untitled Diptych',
          artist: 'Gunther Forg',
          year: '1984',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 10, 20, 30, 7 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/seascape-ibiza-1972.jpg',
          title: 'Seascape, Ibiza',
          artist: 'Franco Fontana',
          year: '1972',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 10, 20, 30, 7 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/forty-eight-view-of-lochness-1997.jpg',
          title: 'Forty-Eight View of Lochness',
          artist: 'Spencer Finch',
          year: '1997',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 11, 21, 1, 8 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/main-d-artiste-1967.jpg',
          title: 'Main d\'artiste',
          artist: 'Robert Filliou',
          year: '1967',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 11, 21, 1, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/male-nude-1897.jpg',
          title: 'Male Nude',
          artist: 'Frank Eugene',
          year: '1897',
          rule: {
            "monday": [ 11, 21, 1, 8 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/new-york-city-1953.jpg',
          title: 'New York City',
          artist: 'Elliott Erwitt',
          year: '1953',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 11, 21, 1, 8 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/monument-valley-grand-scale-1997.jpg',
          title: 'Monument Valley (Grand Scale)',
          artist: 'Tracey Emin',
          year: '1997',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 11, 21, 1, 8 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/the-island-series-1997.jpg',
          title: 'The island series',
          artist: 'Olafur Eliasson',
          year: '1997',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 11, 21, 1, 8 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/downtown-morton-mississippi-1969.jpg',
          title: 'Downtown Morton, Mississippi',
          artist: 'William Eggleston',
          year: '1969',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 11, 21, 1, 8 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/thomas-eakins-and-j-laurie-wallace-1883-1.jpg',
          title: 'Thomas Eakins and J. Laurie Wallace',
          artist: 'Thomas Eakins',
          year: '1883',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 12, 22, 2, 9 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/behind-the-scenes-1902.jpg',
          title: 'Behind the Scenes',
          artist: 'Pierre Dubreuil',
          year: '1902',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 12, 22, 2, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/kiss-by-the-hotel-de-ville-1950.jpg',
          title: 'Kiss by the Hotel de Ville',
          artist: 'Robert Doisneau',
          year: '1950',
          rule: {
            "monday": [ 12, 22, 2, 9 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'photography',
          img_path: './img/june/behind-the-scenes-1904.jpg',
          title: 'Behind the Scenes',
          artist: 'Robert Demachy',
          year: '1904',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 12, 22, 2, 9 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('june_arts_id_seq', (SELECT MAX(id) FROM june_arts));");
    });
};
