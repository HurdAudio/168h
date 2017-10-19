'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('november_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('november_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/thicket-no-2-1990.jpg',
          title: 'Thicket No. 2',
          artist: 'Roni Horn',
          year: '1990',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 17, 22 ],
            "wednesday": [ 5, 10, 16, 21 ],
            "thursday": [ 4, 9, 15, 20 ],
            "friday": [ 3, 8, 14, 19 ],
            "saturday": [ 2, 7, 13, 20 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/colour-as-a-shadow-2005.jpg',
          title: 'Colour as a Shadow',
          artist: 'Katsuhito Nishikawa',
          year: '2005',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 17, 22 ],
            "thursday": [ 5, 10, 16, 21 ],
            "friday": [ 4, 9, 15, 20 ],
            "saturday": [ 3, 8, 14, 19 ],
            "sunday": [ 2, 7, 13, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/seascape-north-atlantic-ocean-cape-breton-1996.jpg',
          title: 'Seascape: North Atlantic Ocean, Cape Breton',
          artist: 'Hiroshi Sugimoto',
          year: '1996',
          rule: {
            "monday": [ 2, 7, 13, 20 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 17, 22 ],
            "friday": [ 5, 10, 16, 21 ],
            "saturday": [ 4, 9, 15, 20 ],
            "sunday": [ 3, 8, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/painting-06-13-2006.jpg',
          title: 'Painting #06-13',
          artist: 'Rudolf de Crignis',
          year: '2006',
          rule: {
            "monday": [ 3, 8, 14, 19 ],
            "tuesday": [ 2, 7, 13, 20 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 17, 22 ],
            "saturday": [ 5, 10, 16, 21 ],
            "sunday": [ 4, 9, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/12-part-line-painting-1984.jpg',
          title: '12 Part Line Painting',
          artist: 'Alan Charlton',
          year: '1984',
          rule: {
            "monday": [ 4, 9, 15, 20 ],
            "tuesday": [ 3, 8, 14, 19 ],
            "wednesday": [ 2, 7, 13, 20 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 17, 22 ],
            "sunday": [ 5, 10, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/pintura-1972.jpg',
          title: 'Pintura',
          artist: 'Fernando Calhau',
          year: '1972',
          rule: {
            "monday": [ 5, 10, 16, 21 ],
            "tuesday": [ 4, 9, 15, 20 ],
            "wednesday": [ 3, 8, 14, 19 ],
            "thursday": [ 2, 7, 13, 20 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/bivest-1-1965.jpg',
          title: 'Bivest + 1',
          artist: 'Gianni Piacentino',
          year: '1965',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 17, 22 ],
            "wednesday": [ 5, 10, 16, 21 ],
            "thursday": [ 4, 9, 15, 20 ],
            "friday": [ 3, 8, 14, 21 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/untitled-no-5-1974.jpg',
          title: 'Untitled No. 5',
          artist: 'Michael Heizer',
          year: '1974',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 17, 22 ],
            "thursday": [ 5, 10, 16, 21 ],
            "friday": [ 4, 9, 15, 20 ],
            "saturday": [ 3, 8, 14, 21 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/untitled-2001.jpg',
          title: 'Untitled',
          artist: 'Olivier Mosset',
          year: '2001',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 17, 22 ],
            "friday": [ 5, 10, 16, 21 ],
            "saturday": [ 4, 9, 15, 20 ],
            "sunday": [ 3, 8, 14, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/deep-rhythm-of-lights-1975.jpg',
          title: 'Deep Rhythm of Lights',
          artist: 'Kishio Suga',
          year: '1975',
          rule: {
            "monday": [ 3, 8, 14, 21 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 17, 22 ],
            "saturday": [ 5, 10, 16, 21 ],
            "sunday": [ 4, 9, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/untitled-1986.jpg',
          title: 'Untitled',
          artist: 'Fred Sandback',
          year: '1986',
          rule: {
            "monday": [ 4, 9, 15, 20 ],
            "tuesday": [ 3, 8, 14, 21 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 17, 22 ],
            "sunday": [ 5, 10, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/the-whole-soul-summed-up-1979.jpg',
          title: 'The Whole Soul Summed Up',
          artist: 'Christopher Wilmarth',
          year: '1979',
          rule: {
            "monday": [ 5, 10, 16, 21 ],
            "tuesday": [ 4, 9, 15, 20 ],
            "wednesday": [ 3, 8, 14, 21 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/yellow-painting-14-1995.jpg',
          title: 'Yellow Painting #14',
          artist: 'Joseph Marioni',
          year: '1995',
          rule: {
            "monday": [ 6, 11, 17, 22 ],
            "tuesday": [ 5, 10, 16, 21 ],
            "wednesday": [ 4, 9, 15, 20 ],
            "thursday": [ 3, 8, 14, 21 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 12, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/untitled-1993.jpg',
          title: 'Untitled',
          artist: 'Gunter Umberg',
          year: '1993',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 17, 22 ],
            "thursday": [ 5, 10, 16, 21 ],
            "friday": [ 4, 9, 15, 22 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/step-by-step-2002.jpg',
          title: 'Step by Step',
          artist: 'Richard Tuttle',
          year: '2002',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 17, 22 ],
            "friday": [ 5, 10, 16, 21 ],
            "saturday": [ 4, 9, 15, 22 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/vii-15-din-14-1989.jpg',
          title: 'VII 15 Din 14',
          artist: 'Hanne Darboven',
          year: '1989',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 17, 22 ],
            "saturday": [ 5, 10, 16, 21 ],
            "sunday": [ 4, 9, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/d-finition-m-thode-505-lettre-au-docteur-barnes-2010.jpg',
          title: 'dé-finition/méthode #505: lettre au docteur barnes',
          artist: 'Claude Rutault',
          year: '2010',
          rule: {
            "monday": [ 4, 9, 15, 22 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 17, 22 ],
            "sunday": [ 5, 10, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/untitled-712-7ft-x-7ft-1978.jpg',
          title: 'Untitled, 712, 7ft x 7ft',
          artist: 'Robert Swain',
          year: '1978',
          rule: {
            "monday": [ 5, 10, 16, 21 ],
            "tuesday": [ 4, 9, 15, 22 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/green-portrait-9.jpg',
          title: 'Green Portrait #9',
          artist: 'Phil Sims',
          year: '?',
          rule: {
            "monday": [ 6, 11, 17, 22 ],
            "tuesday": [ 5, 10, 16, 21 ],
            "wednesday": [ 4, 9, 15, 22 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 12, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/as-if-to-1992.jpg',
          title: 'As, If, To',
          artist: 'Peter Downsbrough',
          year: '1992',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 17, 22 ],
            "wednesday": [ 5, 10, 16, 21 ],
            "thursday": [ 4, 9, 15, 22 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/stanza-azzurra-2006.jpg',
          title: 'Stanza azzurra',
          artist: 'Ettore Spalletti',
          year: '2006',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 17, 22 ],
            "friday": [ 5, 10, 16, 23 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/portrait-1993.jpg',
          title: 'Portrait',
          artist: 'Imi Knoebel',
          year: '1993',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 17, 22 ],
            "saturday": [ 5, 10, 16, 23 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/la-maison-de-la-celle-saint-cloud-1974.jpg',
          title: 'La Maison de La Celle-Saint-Cloud',
          artist: 'Jean-Pierre Raynaud',
          year: '1974',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 17, 22 ],
            "sunday": [ 5, 10, 16, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/barcelona-7-1989.jpg',
          title: 'Barcelona 7',
          artist: 'Larry Bell',
          year: '1989',
          rule: {
            "monday": [ 5, 10, 16, 23 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/maleri-1964.jpg',
          title: 'Maleri',
          artist: 'Jan Groth',
          year: '1964',
          rule: {
            "monday": [ 6, 11, 17, 22 ],
            "tuesday": [ 5, 10, 16, 23 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 12, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/for-pearl-1970(1).jpg',
          title: 'For Pearl',
          artist: 'Brice Marden',
          year: '1970',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 17, 22 ],
            "wednesday": [ 5, 10, 16, 23 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/photo-souvenir-1-carr-1-cercle-4-triangles-hauts-reliefs-situ-s-h-travail-situ-2010.jpg',
          title: 'Photo-souvenir: 1 carré = 1 cercle + 4 triangles, Hauts-reliefs situés H, travail situé',
          artist: 'Daniel Buren',
          year: '2010',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 17, 22 ],
            "thursday": [ 5, 10, 16, 23 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/sem-titulo-1983.jpg',
          title: 'Sem titulo',
          artist: 'Angelo de Sousa',
          year: '1983',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 17, 24 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/28-septembre-1984-1992.jpg',
          title: '28 septembre 1984',
          artist: 'Michel Parmentier',
          year: '1992',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 17, 24 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/always-now-1981.jpg',
          title: 'Always Now',
          artist: 'Tess Jaray',
          year: '1981',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 17, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/tudy-attic-series-xiv-1991.jpg',
          title: 'tudy Attic Series XIV',
          artist: 'Robert Mangold',
          year: '1991',
          rule: {
            "monday": [ 6, 11, 17, 24 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 12, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/schema-luminoso-variabile-rr66-1969.jpg',
          title: 'Schema luminoso variabile RR66',
          artist: 'Grazia Varisco',
          year: '1969',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 17, 24 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/untitled-1995 (1).jpg',
          title: 'Untitled',
          artist: 'James Licini',
          year: '1995',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 17, 24 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/imprints-of-a-no-50-paintbrush-repeated-at-regular-intervals-of-30-cm-1989.jpg',
          title: 'Imprints of a No. 50 Paintbrush Repeated at Regular Intervals of 30 cm.',
          artist: 'Niele Toroni',
          year: '1989',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 17, 24 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/untitled-1970-9.jpg',
          title: 'Untitled',
          artist: 'Nasreen Mohamedi',
          year: '1970',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 25 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/untitled-1974.jpg',
          title: 'Untitled',
          artist: 'Robert Grosvenor',
          year: '1974',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 25 ],
            "sunday": [ 13, 18, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/island-no-1p-1967.jpg',
          title: 'Island No. 1p',
          artist: 'Frank Stella',
          year: '1967',
          rule: {
            "monday": [ 13, 18, 24, 29 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 12, 18, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/w-ix-2006.jpg',
          title: 'W IX',
          artist: 'Joachim Bandau',
          year: '2006',
          rule: {
            "monday": [ 7, 12, 18, 25 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/sun-island-1985.jpg',
          title: 'Sun & Island',
          artist: 'Nanda Vigo',
          year: '1985',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 25 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/last-tangle-1976.jpg',
          title: 'Last Tangle',
          artist: 'Leo Valledor',
          year: '1976',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 25 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/mile-long-drawing.jpg',
          title: 'Mile Long Drawing',
          artist: 'Walter De Maria',
          year: '?',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 25 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/unknown-title.jpg',
          title: 'unknown title',
          artist: 'Roman Cotosman',
          year: '?',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 26 ],
            "saturday": [ 14, 19, 25, 30 ],
            "sunday": [ 13, 18, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/leeward-traffic-1966.jpg',
          title: 'Leeward Traffic',
          artist: 'Robert Huot',
          year: '1966',
          rule: {
            "monday": [ 13, 18, 24, 29 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 26 ],
            "sunday": [ 14, 19, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/interval-2004.jpg',
          title: 'Interval',
          artist: 'John McCracken',
          year: '2004',
          rule: {
            "monday": [ 14, 19, 25, 30 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/aqua-same-1962.jpg',
          title: 'Aqua Same',
          artist: 'Walter Darby Bannard',
          year: '1960',
          rule: {
            "monday": [ 8, 13, 19, 26 ],
            "tuesday": [ 14, 19, 25, 30 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/castle-cccxxxiii-15-7-01-2001.jpg',
          title: 'Castle CCCXXXIII 15.7.01',
          artist: 'Bob Law',
          year: '2001',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 26 ],
            "wednesday": [ 14, 19, 25, 30 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/rouge-ocre-bleu-vert-1978.jpg',
          title: 'Rouge, Ocre, Bleu, Vert',
          artist: 'Yves Gaucher',
          year: '1978',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 26 ],
            "thursday": [ 14, 19, 25, 30 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/serielles-1970.jpg',
          title: 'Serielles',
          artist: 'Victor Bonato',
          year: '1970',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 26 ],
            "friday": [ 14, 19, 25, 30 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/diagonal-of-personal-ecstasy-the-diagonal-of-may-25-1963-to-constantin-brancusi-1963.jpg',
          title: 'Diagonal of Personal Ecstasy (the Diagonal of May 25, 1963, to Constantin Brancusi)',
          artist: 'Dan Flavin',
          year: '1963',
          rule: {
            "monday": [ 13, 18, 24, 29 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 27 ],
            "saturday": [ 15, 20, 26, 1 ],
            "sunday": [ 14, 19, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/print-4-1967.jpg',
          title: 'Print 4',
          artist: 'Bernard Cohen',
          year: '1967',
          rule: {
            "monday": [ 14, 19, 25, 30 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 27 ],
            "sunday": [ 15, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/wake-1965.jpg',
          title: 'Wake',
          artist: 'Marc Vaux',
          year: '1965',
          rule: {
            "monday": [ 15, 20, 26, 1 ],
            "tuesday": [ 14, 19, 25, 30 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/laser-1974.jpg',
          title: 'Laser',
          artist: 'Jef Verheyen',
          year: '1974',
          rule: {
            "monday": [ 9, 14, 20, 27 ],
            "tuesday": [ 15, 20, 26, 1 ],
            "wednesday": [ 14, 19, 25, 30 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/black-painting-indigo-violet-vi-1969.jpg',
          title: 'Black Painting, Indigo Violet VI',
          artist: 'Ralph Hotere',
          year: '1969',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 27 ],
            "wednesday": [ 15, 20, 26, 1 ],
            "thursday": [ 14, 19, 25, 30 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/untitled-ring-with-light-1966.jpg',
          title: 'Untitled (Ring with Light)',
          artist: 'Robert Morris',
          year: '1969',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 27 ],
            "thursday": [ 15, 20, 26, 1 ],
            "friday": [ 14, 19, 25, 30 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/folquer-1972.jpg',
          title: 'Folquer',
          artist: 'Joan Hernandez Pijuan',
          year: '1972',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 27 ],
            "friday": [ 15, 20, 26, 1 ],
            "saturday": [ 14, 19, 25, 30 ],
            "sunday": [ 13, 18, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/fold-1966-2(1).jpg',
          title: 'Fold',
          artist: 'Charlotte Posenenske',
          year: '1966',
          rule: {
            "monday": [ 14, 19, 25, 30 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 28 ],
            "saturday": [ 16, 21, 27, 2 ],
            "sunday": [ 15, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/superficie-argento-1973.jpg',
          title: 'Superficie Argento',
          artist: 'Enrico Castellani',
          year: '1973',
          rule: {
            "monday": [ 15, 20, 26, 1 ],
            "tuesday": [ 14, 19, 25, 30 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 28 ],
            "sunday": [ 16, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/prism-1984.jpg',
          title: 'Prism',
          artist: 'Frederic Matys Thursz',
          year: '1984',
          rule: {
            "monday": [ 16, 21, 27, 2 ],
            "tuesday": [ 15, 20, 26, 1 ],
            "wednesday": [ 14, 19, 25, 30 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/untitled-1959.jpg',
          title: 'Untitled',
          artist: 'Robert Ryman',
          year: '1959',
          rule: {
            "monday": [ 10, 15, 21, 28 ],
            "tuesday": [ 16, 21, 27, 2 ],
            "wednesday": [ 15, 20, 26, 1 ],
            "thursday": [ 14, 19, 25, 30 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/anomalia-1969.jpg',
          title: 'Anomalia',
          artist: 'Rodolfo Arico',
          year: '1969',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 28 ],
            "wednesday": [ 16, 21, 27, 2 ],
            "thursday": [ 15, 20, 26, 1 ],
            "friday": [ 14, 19, 25, 30 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('november_arts_id_seq', (SELECT MAX(id) FROM november_arts));");
    });
};
