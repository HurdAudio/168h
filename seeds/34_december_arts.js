'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('december_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('december_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/44-04,Suspense.jpg',
          title: 'Suspense Comics',
          artist: 'Nina Albright',
          year: '1944',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 1, 14, 22, 28 ],
            "thursday": [ 31, 13, 21, 27 ],
            "friday": [ 30, 12, 20, 26 ],
            "saturday": [ 29, 11, 19, 25 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/34-00,The NatlGrdsman.jpg',
          title: 'National Guardsman',
          artist: 'Newton H. Alfred',
          year: '1934',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 1, 14, 22, 28 ],
            "friday": [ 31, 13, 21, 27 ],
            "saturday": [ 30, 12, 20, 26 ],
            "sunday": [ 29, 11, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/17-00,Maupassant.jpg',
          title: 'Book Illustration',
          artist: 'James E. Allen',
          year: '1917',
          rule: {
            "monday": [ 29, 11, 19, 25 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 1, 14, 22, 28 ],
            "saturday": [ 31, 13, 21, 27 ],
            "sunday": [ 30, 12, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/06-06,MotorBoys.jpg',
          title: 'The Motor Boys',
          artist: 'W. M. Allison',
          year: '1906',
          rule: {
            "monday": [ 30, 12, 20, 26 ],
            "tuesday": [ 29, 11, 19, 25 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 1, 14, 22, 28 ],
            "sunday": [ 31, 13, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/1941-04,SpicyMystery.jpg',
          title: 'Spicy Mystery',
          artist: 'Allen Anderson',
          year: '1941',
          rule: {
            "monday": [ 31, 13, 21, 27 ],
            "tuesday": [ 30, 12, 20, 26 ],
            "wednesday": [ 29, 11, 19, 25 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 1, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/21-07,TheAmer1.jpg',
          title: 'The American',
          artist: 'Frederic A. Anderson',
          year: '1921',
          rule: {
            "monday": [ 1, 14, 22, 28 ],
            "tuesday": [ 31, 13, 21, 27 ],
            "wednesday": [ 30, 12, 20, 26 ],
            "thursday": [ 29, 11, 19, 25 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/45-01,PlanetCmx.jpg',
          title: 'Planet Comics',
          artist: 'Murphy Anderson',
          year: '1945',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 1, 14, 22, 28 ],
            "thursday": [ 31, 13, 21, 27 ],
            "friday": [ 30, 12, 20, 26 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/30-00,Interior1.jpg',
          title: 'Clues illus.',
          artist: 'Lyman Anderson',
          year: '1930',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 1, 14, 22, 28 ],
            "friday": [ 31, 13, 21, 27 ],
            "saturday": [ 30, 12, 20, 26 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/25-01-24,Newspaper.jpg',
          title: 'Newspaper',
          artist: 'Joe Archibald',
          year: '1925',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 1, 14, 22, 28 ],
            "saturday": [ 31, 13, 21, 27 ],
            "sunday": [ 30, 12, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/50-00,FantPubCo-17.jpg',
          title: 'book cover',
          artist: 'Jon Arfstrom',
          year: '1950',
          rule: {
            "monday": [ 30, 12, 20, 26 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 1, 14, 22, 28 ],
            "sunday": [ 31, 13, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/27-06,Yearbook.jpg',
          title: 'High School Yearbook',
          artist: 'Ed Ashe, Jr.',
          year: '1927',
          rule: {
            "monday": [ 31, 13, 21, 27 ],
            "tuesday": [ 30, 12, 20, 26 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 1, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/35-12,NewComics.jpg',
          title: 'New Comics',
          artist: 'Rafael Astarita',
          year: '1935',
          rule: {
            "monday": [ 1, 14, 22, 28 ],
            "tuesday": [ 31, 13, 21, 27 ],
            "wednesday": [ 30, 12, 20, 26 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/13-02,StNicholas.jpg',
          title: 'St. Nicholas',
          artist: 'George Avison',
          year: '1913',
          rule: {
            "monday": [ 2, 15, 23, 29 ],
            "tuesday": [ 1, 14, 22, 28 ],
            "wednesday": [ 31, 13, 21, 27 ],
            "thursday": [ 30, 12, 20, 26 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/39-00,CliffCornwall1.jpg',
          title: 'Cliff Cornwall',
          artist: 'John E. Ayman',
          year: '1941',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 1, 14, 22, 28 ],
            "friday": [ 31, 13, 21, 27 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/28-01-28,LoveS-2.jpg',
          title: 'Love Story',
          artist: 'Constance Benson Bailey',
          year: '1928',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 1, 14, 22, 28 ],
            "saturday": [ 31, 13, 21, 27 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/17-05,DeWittClinton.jpg',
          title: 'DeWitt Clinton',
          artist: 'Adolphe Barreaux',
          year: '1917',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 1, 14, 22, 28 ],
            "sunday": [ 31, 13, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/50-04,Argosy.jpg',
          title: 'Argosy',
          artist: 'Harry Barton',
          year: '1950',
          rule: {
            "monday": [ 31, 13, 21, 27 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 1, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/41-05,DocSavage.jpg',
          title: 'Doc Savage Comics',
          artist: 'Ken Battefield',
          year: '1941',
          rule: {
            "monday": [ 1, 14, 22, 28 ],
            "tuesday": [ 31, 13, 21, 27 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/1931-11,Gnglnd.jpg',
          title: 'Gangland Stories',
          artist: 'Walter Baumhofer',
          year: '1931',
          rule: {
            "monday": [ 2, 15, 23, 29 ],
            "tuesday": [ 1, 14, 22, 28 ],
            "wednesday": [ 31, 13, 21, 27 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/29-10,JuniorHome.JPG',
          title: 'Junior Home',
          artist: 'Robert Beebe',
          year: '1929',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 1, 14, 22, 28 ],
            "thursday": [ 31, 13, 21, 27 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/28-08-16,War.jpg',
          title: 'War Stories',
          artist: 'Rudolph Belarski',
          year: '1928',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 1, 14, 22, 28 ],
            "saturday": [ 7, 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/52-00,Illus2.jpg',
          title: 'illustration',
          artist: 'Jim Bentley',
          year: '1952',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 1, 14, 22, 28 ],
            "sunday": [ 7, 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/34-00,Dutton.jpg',
          title: 'Dutton Books',
          artist: 'David Berger',
          year: '1934',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 1, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/35-10,Bedtime.jpg',
          title: 'Bedtime Stories',
          artist: 'Earle Bergey ',
          year: '1935',
          rule: {
            "monday": [ 1, 14, 22, 28 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/36-08,ThrillWndr.jpg',
          title: 'Thrilling Wonder',
          artist: 'Jack Binder',
          year: '1936',
          rule: {
            "monday": [ 2, 15, 23, 29 ],
            "tuesday": [ 1, 14, 22, 28 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/35-05,AllStarFcton.jpg',
          title: 'All Star Fiction',
          artist: 'Lorence Bjorklund',
          year: '1935',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 1, 14, 22, 28 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/1929-08,MM1.jpg',
          title: 'Modern Mechanics',
          artist: '(Blaine) Normand Saunders',
          year: '1929',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 1, 14, 22, 28 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/28-00,Kiss.jpg',
          title: 'Kiss The Crocodile',
          artist: 'Frederick Blakeslee',
          year: '1928',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7, 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/36-06,Yearbook.jpg',
          title: 'School Yearbook',
          artist: 'Chester Bloom',
          year: '1936',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/34-01,WRom-1.jpg',
          title: 'Western Romances',
          artist: 'Jon L. Blummer',
          year: '1934',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/1941-05,Cosmic.jpg',
          title: 'Cosmic',
          artist: 'Hannes Bok',
          year: '1941',
          rule: {
            "monday": [ 2, 15, 23, 29 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/23-04-21,Judge.jpg',
          title: 'Judge',
          artist: 'Enoch Bolles',
          year: '1923',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/52-00,MysteryRanch.jpg',
          title: 'Pocket Book #895',
          artist: 'Stanley Borack',
          year: '1952',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/02-00,TheFrenchReople.jpg',
          title: 'The French People',
          artist: 'Arthur R. Bowker',
          year: '1902',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7, 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/42-08,FantAdv1.jpg',
          title: 'Fantastic Adv.',
          artist: 'William J. Brady',
          year: '1942',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 9, 22, 30, 5 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/45-09,CaptFlight9.jpg',
          title: 'Capt. Flight',
          artist: 'Ann Brewster',
          year: '1945',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 9, 22, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/29-12,AmazingS.JPG',
          title: 'Amazing Stories',
          artist: 'Austin Briggs',
          year: '1929',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/06-00,SchroeberWindow.jpg',
          title: 'Stained Glass',
          artist: 'W. C. Brigham',
          year: '1906',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/22-03-01,Mystery.jpg',
          title: 'Mystery',
          artist: 'W. C. Brigham, Jr.',
          year: '1922',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 9, 22, 30, 5 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/23-10,Munseys.jpg',
          title: 'Munsey\'s Magazine',
          artist: 'Howard V. Brown',
          year: '1923',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 9, 22, 30, 5 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7 , 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/18-00,KrushingKaiser.jpg',
          title: 'Krushing Kaiserism',
          artist: 'Ken Browne',
          year: '1918',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 9, 22, 30, 5 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7 , 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/32-06,Oriental.jpg',
          title: 'Oriental Stories',
          artist: 'Margaret Brundage',
          year: '1932',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 10, 23, 31, 6 ],
            "sunday": [ 9, 22, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/02-06-29,NYHerald.jpg',
          title: 'N Y Herald',
          artist: 'Leighton Budd',
          year: '1902',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 10, 23, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/1928-11,WzBng1.jpg',
          title: 'Whiz Bang',
          artist: 'Carl Buettner',
          year: '1928',
          rule: {
            "monday": [ 10, 23, 31, 6 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/35-07-1st,RnchRom2.jpg',
          title: 'Ranch Romances',
          artist: 'H. D. Bugbee',
          year: '1935',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 10, 23, 31, 6 ],
            "wednesday": [ 9, 22, 30, 5 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/22-00,Ad.jpg',
          title: 'Advertisement',
          artist: 'R. A. Burley',
          year: '1924',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 10, 23, 31, 6 ],
            "thursday": [ 9, 22, 30, 5 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7, 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/10-00,JohnMrsch.jpg',
          title: 'John Marsh\'s Millions',
          artist: 'Samuel Cahan',
          year: '1910',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 10, 23, 31, 6 ],
            "friday": [ 9, 22, 30, 5 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7, 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/19-11.BoysLife.jpg',
          title: 'Boy\'s Life',
          artist: 'Robert A. Cameron',
          year: '1919',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 10, 23, 31, 6 ],
            "saturday": [ 9, 22, 30, 5 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/21-09,BreezyS.jpg',
          title: 'Breezy Stories',
          artist: 'Jules Cannert',
          year: '1921',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 11, 24, 1, 7 ],
            "sunday": [ 10, 23, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'pulp',
          img_path: './img/december/35-12,Prison-p21.jpg',
          title: 'Prison Life',
          artist: 'Ralph Carlson',
          year: '1935',
          rule: {
            "monday": [ 10, 23, 31, 6 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 11, 24, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('december_arts_id_seq', (SELECT MAX(id) FROM december_arts));");
    });
};
