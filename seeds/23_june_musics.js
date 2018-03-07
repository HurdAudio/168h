'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('june_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('june_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2576718619/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lowpoint.bandcamp.com/album/bring-me-the-head-of-kyle-bobby-dunn',
          a_string: 'Bring Me The Head of Kyle Bobby Dunn by Kyle Bobby Dunn',
          rule: {
            "monday": [ 30, 4, 10, 21 ],
            "tuesday": [ 29, 3, 9, 20 ],
            "wednesday": [ 28, 2, 8, 19 ],
            "thursday": [ 27, 1, 7, 18 ],
            "saturday": [ 1, 5, 11, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=399680356/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ruralcolours.bandcamp.com/album/peace',
          a_string: 'Peace by Guenter Schlienz',
          rule: {
            "monday": [ 1, 5, 11, 22 ],
            "tuesday": [ 30, 4, 10, 21 ],
            "wednesday": [ 29, 3, 9, 20 ],
            "thursday": [ 28, 2, 8, 19 ],
            "saturday": [ 27, 1, 7, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=782987008/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bingsatellites.bandcamp.com/album/song-of-the-hummingbird',
          a_string: 'Song of the Hummingbird by Bing Satellites',
          rule: {
            "monday": [ 27, 1, 7, 18 ],
            "tuesday": [ 1, 5, 11, 22 ],
            "wednesday": [ 30, 4, 10, 21 ],
            "thursday": [ 29, 3, 9, 20 ],
            "saturday": [ 28, 2, 8, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3514634362/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://timhecker.bandcamp.com/album/love-streams',
          a_string: 'Love Streams by Tim Hecker',
          rule: {
            "monday": [ 28, 2, 8, 19 ],
            "tuesday": [ 27, 1, 7, 18 ],
            "wednesday": [ 1, 5, 11, 22 ],
            "thursday": [ 30, 4, 10, 21 ],
            "saturday": [ 29, 3, 9, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1112581834/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sonicmeditations.bandcamp.com/album/exquisite-lust',
          a_string: 'Exquisite Lust by Expo 70',
          rule: {
            "monday": [ 29, 3, 9, 20 ],
            "tuesday": [ 28, 2, 8, 19 ],
            "wednesday": [ 27, 1, 7, 18 ],
            "thursday": [ 1, 5, 11, 22 ],
            "saturday": [ 30, 4, 10, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3966425461/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://omahara.bandcamp.com/album/omahara-3',
          a_string: 'Omahara by Omahara',
          rule: {
            "monday": [ 30, 4, 10, 21 ],
            "tuesday": [ 29, 3, 9, 20 ],
            "wednesday": [ 28, 2, 8, 19 ],
            "thursday": [ 27, 1, 7, 18 ],
            "saturday": [ 1, 5, 11, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1246693833/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://phillniblock.bandcamp.com/album/touch-five',
          a_string: 'Touch Five by Phill Niblock',
          rule: {
            "monday": [ 2, 6, 12, 23 ],
            "tuesday": [ 1, 5, 11, 22 ],
            "wednesday": [ 30, 4, 9, 21 ],
            "thursday": [ 29, 3, 9, 20 ],
            "saturday": [ 28, 2, 8, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3218298308/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://helenscarsdale.bandcamp.com/album/spots-in-the-sun',
          a_string: 'spots in the sun by matt shoemaker',
          rule: {
            "monday": [ 28, 2, 8, 19 ],
            "tuesday": [ 2, 6, 12, 23 ],
            "wednesday": [ 1, 5, 11, 22 ],
            "thursday": [ 30, 4, 9, 21 ],
            "saturday": [ 29, 3, 9, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=475957477/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://helenscarsdale.bandcamp.com/album/surrender-render-end',
          a_string: 'surrender, render, end by francisco meirino',
          rule: {
            "monday": [ 29, 3, 9, 20 ],
            "tuesday": [ 28, 2, 8, 19 ],
            "wednesday": [ 2, 6, 12, 23 ],
            "thursday": [ 1, 5, 11, 22 ],
            "saturday": [ 30, 4, 9, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1254767643/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kylebobbydunn.bandcamp.com/album/in-miserum-stercus',
          a_string: 'In Miserum Stercus by Kyle Bobby Dunn',
          rule: {
            "monday": [ 30, 4, 9, 21 ],
            "tuesday": [ 29, 3, 9, 20 ],
            "wednesday": [ 28, 2, 8, 19 ],
            "thursday": [ 2, 6, 12, 23 ],
            "saturday": [ 1, 5, 11, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2347154279/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eileanrec.bandcamp.com/album/stay-sea',
          a_string: 'Stay / Sea by HolyKindOf',
          rule: {
            "monday": [ 1, 5, 11, 22 ],
            "tuesday": [ 30, 4, 9, 21 ],
            "wednesday": [ 29, 3, 9, 20 ],
            "thursday": [ 28, 2, 8, 19 ],
            "saturday": [ 2, 6, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2922557334/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lowpoint.bandcamp.com/album/glisten',
          a_string: 'Glisten by Tim Catlin &amp; Machinefabriek',
          rule: {
            "monday": [ 2, 6, 12, 23 ],
            "tuesday": [ 1, 5, 11, 22 ],
            "wednesday": [ 30, 4, 9, 21 ],
            "thursday": [ 29, 3, 9, 20 ],
            "saturday": [ 28, 2, 8, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=315244532/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://itsnotyouitsme.bandcamp.com/album/this-i-featuring-theo-bleckmann-sk-li-sverrisson',
          a_string: 'This I (featuring Theo Bleckmann &amp; Skúli Sverrisson) by itsnotyouitsme',
          rule: {
            "monday": [ 28, 2, 8, 19 ],
            "tuesday": [ 2, 6, 12, 23 ],
            "wednesday": [ 1, 5, 11, 22 ],
            "thursday": [ 30, 4, 9, 21 ],
            "saturday": [ 29, 3, 9, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2093749474/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://timhecker.bandcamp.com/album/virgins-paper-bag-edition',
          a_string: 'Virgins (Paper Bag edition) by Tim Hecker',
          rule: {
            "monday": [ 30, 4, 10, 21 ],
            "tuesday": [ 29, 3, 9, 20 ],
            "wednesday": [ 3, 7, 13, 24 ],
            "thursday": [ 2, 6, 12, 23 ],
            "saturday": [ 1, 5, 10, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3270291878/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dronarivm.bandcamp.com/album/open-to-the-sea',
          a_string: 'Open To The Sea by Enrico Coniglio &amp; Matteo Uggeri',
          rule: {
            "monday": [ 1, 5, 10, 22 ],
            "tuesday": [ 30, 4, 10, 21 ],
            "wednesday": [ 29, 3, 9, 20 ],
            "thursday": [ 3, 7, 13, 24 ],
            "saturday": [ 2, 6, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1040093344/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://phillniblock.bandcamp.com/album/touch-works-for-hurdy-gurdy-and-voice',
          a_string: 'Touch Works, for Hurdy Gurdy and Voice by Phill Niblock',
          rule: {
            "monday": [ 2, 6, 12, 23 ],
            "tuesday": [ 1, 5, 10, 22 ],
            "wednesday": [ 30, 4, 10, 21 ],
            "thursday": [ 29, 3, 9, 20 ],
            "saturday": [ 3, 7, 13, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2056492879/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orphax.bandcamp.com/album/dream-sequence-4',
          a_string: 'Dream Sequence #4 by Orphax',
          rule: {
            "monday": [ 3, 7, 13, 24 ],
            "tuesday": [ 2, 6, 12, 23 ],
            "wednesday": [ 1, 5, 10, 22 ],
            "thursday": [ 30, 4, 10, 21 ],
            "saturday": [ 29, 7, 9, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1381228377/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://assemblyfield.bandcamp.com/album/solarism',
          a_string: 'Solarism by Projektions',
          rule: {
            "monday": [ 29, 7, 9, 20 ],
            "tuesday": [ 3, 7, 13, 24 ],
            "wednesday": [ 2, 6, 12, 23 ],
            "thursday": [ 1, 5, 10, 22 ],
            "saturday": [ 30, 4, 10, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1094705682/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://touch333.bandcamp.com/album/figueroa-terrace',
          a_string: 'Figueroa Terrace by Thomas Ankersmit',
          rule: {
            "monday": [ 30, 4, 10, 21 ],
            "tuesday": [ 29, 7, 9, 20 ],
            "wednesday": [ 3, 7, 13, 24 ],
            "thursday": [ 2, 6, 12, 23 ],
            "saturday": [ 1, 5, 10, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=644271494/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orenambarchi.bandcamp.com/album/live-knots',
          a_string: 'Live Knots by Oren Ambarchi',
          rule: {
            "monday": [ 1, 5, 10, 22 ],
            "tuesday": [ 30, 4, 10, 21 ],
            "wednesday": [ 29, 7, 9, 20 ],
            "thursday": [ 3, 7, 13, 24 ],
            "saturday": [ 2, 6, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3406973740/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://emmanuelholterbach.bandcamp.com/album/trois-disques-p-les-pour-eliane-radigue',
          a_string: 'Trois Disques Pâles (pour Eliane Radigue) by Emmanuel Holterbach',
          rule: {
            "monday": [ 3, 7, 13, 23 ],
            "tuesday": [ 2, 6, 11, 23 ],
            "wednesday": [ 1, 5, 11, 22 ],
            "thursday": [ 30, 8, 10, 21 ],
            "saturday": [ 4, 8, 14, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1703488108/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pioulard.bandcamp.com/album/lignin-poise',
          a_string: 'Lignin Poise by Benoît Pioulard',
          rule: {
            "monday": [ 4, 8, 14, 25 ],
            "tuesday": [ 3, 7, 13, 23 ],
            "wednesday": [ 2, 6, 11, 23 ],
            "thursday": [ 1, 5, 11, 22 ],
            "saturday": [ 30, 8, 10, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=605498052/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://starsofthelid.bandcamp.com/album/and-their-refinement-of-the-decline',
          a_string: 'and their Refinement of the Decline by Stars of the Lid',
          rule: {
            "monday": [ 30, 8, 10, 21 ],
            "tuesday": [ 4, 8, 14, 25 ],
            "wednesday": [ 3, 7, 13, 23 ],
            "thursday": [ 2, 6, 11, 23 ],
            "saturday": [ 1, 5, 11, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2983148247/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://irisarri.bandcamp.com/album/seventeen-words',
          a_string: 'Seventeen Words by Gailes',
          rule: {
            "monday": [ 1, 5, 11, 22 ],
            "tuesday": [ 30, 8, 10, 21 ],
            "wednesday": [ 4, 8, 14, 25 ],
            "thursday": [ 3, 7, 13, 23 ],
            "saturday": [ 2, 6, 11, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1545097450/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oneohtrixpointnever1.bandcamp.com/album/rifts',
          a_string: 'Rifts by Oneohtrix Point Never',
          rule: {
            "monday": [ 2, 6, 11, 23 ],
            "tuesday": [ 1, 5, 11, 22 ],
            "wednesday": [ 30, 8, 10, 21 ],
            "thursday": [ 4, 8, 14, 25 ],
            "saturday": [ 3, 7, 13, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=941299459/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://benfrost.bandcamp.com/album/black-marrow',
          a_string: 'Black Marrow by Ben Frost',
          rule: {
            "monday": [ 3, 7, 13, 23 ],
            "tuesday": [ 2, 6, 11, 23 ],
            "wednesday": [ 1, 5, 11, 22 ],
            "thursday": [ 30, 8, 10, 21 ],
            "saturday": [ 4, 8, 14, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=547528775/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fennesz.bandcamp.com/album/mahler-remixed',
          a_string: 'Mahler Remixed by fennesz',
          rule: {
            "monday": [ 4, 8, 14, 25 ],
            "tuesday": [ 3, 7, 13, 23 ],
            "wednesday": [ 2, 6, 11, 23 ],
            "thursday": [ 1, 5, 11, 22 ],
            "saturday": [ 30, 8, 10, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1616218889/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kylebobbydunn.bandcamp.com/album/a-young-persons-guide-to-kyle-bobby-dunn',
          a_string: 'A Young Person&#39;s Guide To Kyle Bobby Dunn by Kyle Bobby Dunn',
          rule: {
            "monday": [ 1, 9, 11, 22 ],
            "tuesday": [ 5, 9, 15, 26 ],
            "wednesday": [ 4, 8, 14, 24 ],
            "thursday": [ 3, 7, 12, 24 ],
            "saturday": [ 2, 6, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3922067933/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://airtexture.bandcamp.com/album/air-texture-volume-i',
          a_string: 'Air Texture Volume I by Air Texture',
          rule: {
            "monday": [ 2, 6, 12, 23 ],
            "tuesday": [ 1, 9, 11, 22 ],
            "wednesday": [ 5, 9, 15, 26 ],
            "thursday": [ 4, 8, 14, 24 ],
            "saturday": [ 3, 7, 12, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1748224388/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://adambryanbaumwiltzie.bandcamp.com/album/travels-in-constants-vol-24',
          a_string: 'Travels in Constants Vol 24 by Adam Bryanbaum Wiltzie',
          rule: {
            "monday": [ 3, 7, 12, 24 ],
            "tuesday": [ 2, 6, 12, 23 ],
            "wednesday": [ 1, 9, 11, 22 ],
            "thursday": [ 5, 9, 15, 26 ],
            "saturday": [ 4, 8, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2315096369/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/four-full-flutes',
          a_string: 'Four Full Flutes by Phill Niblock',
          rule: {
            "monday": [ 4, 8, 14, 24 ],
            "tuesday": [ 3, 7, 12, 24 ],
            "wednesday": [ 2, 6, 12, 23 ],
            "thursday": [ 1, 9, 11, 22 ],
            "saturday": [ 5, 9, 15, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1138670248/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://slaapwel.bandcamp.com/album/silenne',
          a_string: 'Silenne by Simon Scott',
          rule: {
            "monday": [ 5, 9, 15, 26 ],
            "tuesday": [ 4, 8, 14, 24 ],
            "wednesday": [ 3, 7, 12, 24 ],
            "thursday": [ 2, 6, 12, 23 ],
            "saturday": [ 1, 9, 11, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3024537233/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sonmi451.bandcamp.com/album/alice',
          a_string: 'Alice by Sonmi451',
          rule: {
            "monday": [ 1, 9, 11, 22 ],
            "tuesday": [ 5, 9, 15, 26 ],
            "wednesday": [ 4, 8, 14, 24 ],
            "thursday": [ 3, 7, 12, 24 ],
            "saturday": [ 2, 6, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1904128458/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://brianconniffe.bandcamp.com/album/bornless-ep',
          a_string: 'Bornless EP by Brian Conniffe',
          rule: {
            "monday": [ 2, 6, 12, 23 ],
            "tuesday": [ 1, 9, 11, 22 ],
            "wednesday": [ 5, 9, 15, 26 ],
            "thursday": [ 4, 8, 14, 24 ],
            "saturday": [ 3, 7, 12, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=911509297/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://timhecker.bandcamp.com/album/harmony-in-ultraviolet',
          a_string: 'Harmony In Ultraviolet by Tim Hecker',
          rule: {
            "monday": [ 4, 8, 13, 25 ],
            "tuesday": [ 3, 7, 13, 24 ],
            "wednesday": [ 2, 10, 12, 23 ],
            "thursday": [ 6, 10, 16, 27 ],
            "saturday": [ 5, 9, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2967472899/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kaitlynaureliasmith.bandcamp.com/album/frkwys-vol-13-sunergy',
          a_string: 'FRKWYS Vol. 13: Sunergy by Kaitlyn Aurelia Smith &amp; Suzanne Ciani',
          rule: {
            "monday": [ 5, 9, 15, 25 ],
            "tuesday": [ 4, 8, 13, 25 ],
            "wednesday": [ 3, 7, 13, 24 ],
            "thursday": [ 2, 10, 12, 23 ],
            "saturday": [ 6, 10, 16, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=185406926/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://loscil.bandcamp.com/album/suns',
          a_string: 'Suns by loscil',
          rule: {
            "monday": [ 6, 10, 16, 27 ],
            "tuesday": [ 5, 9, 15, 25 ],
            "wednesday": [ 4, 8, 13, 25 ],
            "thursday": [ 3, 7, 13, 24 ],
            "saturday": [ 2, 10, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2018875982/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://huron.bandcamp.com/album/the-red-tape',
          a_string: 'the red tape by Huron',
          rule: {
            "monday": [ 2, 10, 12, 23 ],
            "tuesday": [ 6, 10, 16, 27 ],
            "wednesday": [ 5, 9, 15, 25 ],
            "thursday": [ 4, 8, 13, 25 ],
            "saturday": [ 3, 7, 13, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2502611751/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xxchamxx.bandcamp.com/album/land-1',
          a_string: 'LAND #1 by CHAM',
          rule: {
            "monday": [ 3, 7, 13, 24 ],
            "tuesday": [ 2, 10, 12, 23 ],
            "wednesday": [ 6, 10, 16, 27 ],
            "thursday": [ 5, 9, 15, 25 ],
            "saturday": [ 4, 8, 13, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4286426371/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eileanrec.bandcamp.com/album/excavation',
          a_string: 'Excavation by Cicely Irvine',
          rule: {
            "monday": [ 4, 8, 13, 25 ],
            "tuesday": [ 3, 7, 13, 24 ],
            "wednesday": [ 2, 10, 12, 23 ],
            "thursday": [ 6, 10, 16, 27 ],
            "saturday": [ 5, 9, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=873660777/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dronarivm.bandcamp.com/album/branches',
          a_string: 'Branches by Cyril Secq / Orla Wren',
          rule: {
            "monday": [ 5, 9, 15, 25 ],
            "tuesday": [ 4, 8, 13, 25 ],
            "wednesday": [ 3, 7, 13, 24 ],
            "thursday": [ 2, 10, 12, 23 ],
            "saturday": [ 6, 10, 16, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=382220642/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dronarivm.bandcamp.com/album/sinfonietta',
          a_string: 'Sinfonietta by Marsen Jules',
          rule: {
            "monday": [ 7, 11, 17, 28 ],
            "tuesday": [ 6, 10, 16, 26 ],
            "wednesday": [ 5, 9, 14, 26 ],
            "thursday": [ 4, 8, 14, 25 ],
            "saturday": [ 3, 11, 13, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1445261392/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://forestswords.bandcamp.com/album/compassion',
          a_string: 'Compassion by Forest Swords',
          rule: {
            "monday": [ 3, 11, 13, 24 ],
            "tuesday": [ 7, 11, 17, 28 ],
            "wednesday": [ 6, 10, 16, 26 ],
            "thursday": [ 5, 9, 14, 26 ],
            "saturday": [ 4, 8, 14, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=565792550/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dreamcatalogue.bandcamp.com/album/--18',
          a_string: '新しい日の誕生 by 2814',
          rule: {
            "monday": [ 4, 8, 14, 25 ],
            "tuesday": [ 3, 11, 13, 24 ],
            "wednesday": [ 7, 11, 17, 28 ],
            "thursday": [ 6, 10, 16, 26 ],
            "saturday": [ 5, 9, 14, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1719169483/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://telepathtelepath.bandcamp.com/album/--42',
          a_string: '仮想夢女の子 by 仮想夢プラザ',
          rule: {
            "monday": [ 5, 9, 14, 26 ],
            "tuesday": [ 4, 8, 14, 25 ],
            "wednesday": [ 3, 11, 13, 24 ],
            "thursday": [ 7, 11, 17, 28 ],
            "saturday": [ 6, 10, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=867883367/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://timhecker.bandcamp.com/album/ravedeath-1972',
          a_string: 'Ravedeath, 1972 by Tim Hecker',
          rule: {
            "monday": [ 6, 10, 16, 26 ],
            "tuesday": [ 5, 9, 14, 26 ],
            "wednesday": [ 4, 8, 14, 25 ],
            "thursday": [ 3, 11, 13, 24 ],
            "saturday": [ 7, 11, 17, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1248245268/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://necrodeathmort.bandcamp.com/album/overland',
          a_string: 'Overland by Necro Deathmort',
          rule: {
            "monday": [ 7, 11, 17, 28 ],
            "tuesday": [ 6, 10, 16, 26 ],
            "wednesday": [ 5, 9, 14, 26 ],
            "thursday": [ 4, 8, 14, 25 ],
            "saturday": [ 3, 11, 13, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3828099932/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orphax.bandcamp.com/album/studies-in-dissonance',
          a_string: 'Studies in dissonance by Orphax',
          rule: {
            "monday": [ 3, 11, 13, 24 ],
            "tuesday": [ 7, 11, 17, 28 ],
            "wednesday": [ 6, 10, 16, 26 ],
            "thursday": [ 5, 9, 14, 26 ],
            "saturday": [ 4, 8, 14, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2253300390/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oceanographicrecords.bandcamp.com/album/modular',
          a_string: 'MODULAR by Matt Chamberlain, Viktor Krauss, and Dan Phelps',
          rule: {
            "monday": [ 5, 9, 15, 26 ],
            "tuesday": [ 4, 12, 14, 25 ],
            "wednesday": [ 8, 12, 18, 29 ],
            "thursday": [ 7, 11, 17, 27 ],
            "saturday": [ 6, 10, 15, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1073464636/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mysterybear.bandcamp.com/album/complex-silence-4',
          a_string: 'Complex Silence 4 by Dave Seidel',
          rule: {
            "monday": [ 6, 10, 15, 27 ],
            "tuesday": [ 5, 9, 15, 26 ],
            "wednesday": [ 4, 12, 14, 25 ],
            "thursday": [ 8, 12, 18, 29 ],
            "saturday": [ 7, 11, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=64449763/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://recordings.irritablehedgehog.com/album/dave-seidel-60-hz',
          a_string: 'Dave Seidel: ~60 Hz by Dave Seidel',
          rule: {
            "monday": [ 7, 11, 17, 27 ],
            "tuesday": [ 6, 10, 15, 27 ],
            "wednesday": [ 5, 9, 15, 26 ],
            "thursday": [ 4, 12, 14, 25 ],
            "saturday": [ 8, 12, 18, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2847866671/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://archivesdubmusic.bandcamp.com/album/the-grey-ghost-of-morning',
          a_string: 'The Grey Ghost Of Morning by Chris Weeks',
          rule: {
            "monday": [ 8, 12, 18, 29 ],
            "tuesday": [ 7, 11, 17, 27 ],
            "wednesday": [ 6, 10, 15, 27 ],
            "thursday": [ 5, 9, 15, 26 ],
            "saturday": [ 4, 12, 14, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4102448981/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://n5md.bandcamp.com/album/heartless',
          a_string: 'Heartless by bvdub',
          rule: {
            "monday": [ 4, 12, 14, 25 ],
            "tuesday": [ 8, 12, 18, 29 ],
            "wednesday": [ 7, 11, 17, 27 ],
            "thursday": [ 6, 10, 15, 27 ],
            "saturday": [ 5, 9, 15, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2777478826/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oyukiconjugate.bandcamp.com/album/the-euphoria-of-disobedience',
          a_string: 'The Euphoria of Disobedience by O Yuki Conjugate',
          rule: {
            "monday": [ 5, 9, 15, 26 ],
            "tuesday": [ 4, 12, 14, 25 ],
            "wednesday": [ 8, 12, 18, 29 ],
            "thursday": [ 7, 11, 17, 27 ],
            "saturday": [ 6, 10, 15, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3868833881/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orphax1.bandcamp.com/album/warschauer-stra-e',
          a_string: 'Warschauer Straße by Orphax',
          rule: {
            "monday": [ 6, 10, 15, 27 ],
            "tuesday": [ 5, 9, 15, 26 ],
            "wednesday": [ 4, 12, 14, 25 ],
            "thursday": [ 8, 12, 18, 29 ],
            "saturday": [ 7, 11, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2514789193/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://astralandshit.bandcamp.com/album/--99',
          a_string: 'состояния - тление цвета by Astral &amp; Shit',
          rule: {
            "monday": [ 8, 12, 18, 28 ],
            "tuesday": [ 7, 11, 16, 28 ],
            "wednesday": [ 7, 10, 16, 27 ],
            "thursday": [ 5, 13, 15, 26 ],
            "saturday": [ 9, 13, 19, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4011494198/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://paulminesweeper.bandcamp.com/album/northreach',
          a_string: 'Northreach by Paul Minesweeper',
          rule: {
            "monday": [ 9, 13, 19, 30 ],
            "tuesday": [ 8, 12, 18, 28 ],
            "wednesday": [ 7, 11, 16, 28 ],
            "thursday": [ 7, 10, 16, 27 ],
            "saturday": [ 5, 13, 15, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3957509238/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://genot.bandcamp.com/album/paralysis-live-at-silent-night-8',
          a_string: 'Paralysis: Live at Silent Night #8 by The House in the Woods',
          rule: {
            "monday": [ 5, 13, 15, 26 ],
            "tuesday": [ 9, 13, 19, 30 ],
            "wednesday": [ 8, 12, 18, 28 ],
            "thursday": [ 7, 11, 16, 28 ],
            "saturday": [ 7, 10, 16, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3271790009/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://themyrrorsbbib.bandcamp.com/album/hasta-la-victoria',
          a_string: 'Hasta La Victoria by The Myrrors',
          rule: {
            "monday": [ 7, 10, 16, 27 ],
            "tuesday": [ 5, 13, 15, 26 ],
            "wednesday": [ 9, 13, 19, 30 ],
            "thursday": [ 8, 12, 18, 28 ],
            "saturday": [ 7, 11, 16, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1709653459/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mathiasgrassow.bandcamp.com/album/2017-divinations',
          a_string: '(2017) Divinations by Mathias Grassow',
          rule: {
            "monday": [ 7, 11, 16, 28 ],
            "tuesday": [ 7, 10, 16, 27 ],
            "wednesday": [ 5, 13, 15, 26 ],
            "thursday": [ 9, 13, 19, 30 ],
            "saturday": [ 8, 12, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1359018864/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://darrenmcclure.bandcamp.com/album/nature-mirror',
          a_string: 'Nature Mirror by Darren McClure',
          rule: {
            "monday": [ 8, 12, 18, 28 ],
            "tuesday": [ 7, 11, 16, 28 ],
            "wednesday": [ 7, 10, 16, 27 ],
            "thursday": [ 5, 13, 15, 26 ],
            "saturday": [ 9, 13, 19, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2286899085/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://davidnewlyn.bandcamp.com/album/transparencies',
          a_string: 'Transparencies by David Newlyn',
          rule: {
            "monday": [ 9, 13, 19, 30 ],
            "tuesday": [ 8, 12, 18, 28 ],
            "wednesday": [ 7, 11, 16, 28 ],
            "thursday": [ 7, 10, 16, 27 ],
            "saturday": [ 5, 13, 15, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2361958115/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://antonymes.bandcamp.com/album/for-now-we-see-through-a-glass-dimly',
          a_string: '(For Now We See) Through A Glass Dimly by Antonymes',
          rule: {
            "monday": [ 6, 14, 16, 27 ],
            "tuesday": [ 10, 14, 20, 1 ],
            "wednesday": [ 9, 13, 19, 29 ],
            "thursday": [ 8, 12, 17, 29 ],
            "saturday": [  ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1698224919/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/music-by-phill-niblock',
          a_string: 'Music by Phill Niblock by Phill Niblock',
          rule: {
            "monday": [ 8, 11, 17, 28 ],
            "tuesday": [ 6, 14, 16, 27 ],
            "wednesday": [ 10, 14, 20, 1 ],
            "thursday": [ 9, 13, 19, 29 ],
            "saturday": [ 8, 12, 17, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1857300793/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/body-music',
          a_string: 'Body Music by Ellen Fullman',
          rule: {
            "monday": [ 8, 12, 17, 29 ],
            "tuesday": [ 8, 11, 17, 28 ],
            "wednesday": [ 6, 14, 16, 27 ],
            "thursday": [ 10, 14, 20, 1 ],
            "saturday": [ 9, 13, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3087503069/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/logos-works',
          a_string: 'Logos Works by Logos Duo (Moniek Darge / Godfried-Willem Raes )',
          rule: {
            "monday": [ 9, 13, 19, 29 ],
            "tuesday": [ 8, 12, 17, 29 ],
            "wednesday": [ 8, 11, 17, 28 ],
            "thursday": [ 6, 14, 16, 27 ],
            "saturday": [ 10, 14, 20, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2971626337/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://noght.bandcamp.com/album/a-letter',
          a_string: 'A Letter by NoGht',
          rule: {
            "monday": [ 10, 14, 20, 1 ],
            "tuesday": [ 9, 13, 19, 29 ],
            "wednesday": [ 8, 12, 17, 29 ],
            "thursday": [ 8, 11, 17, 28 ],
            "saturday": [ 6, 14, 16, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3748396525/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oejerum.bandcamp.com/album/tr-erne-intetheden',
          a_string: 'Træerne &amp; Intetheden by øjeRum',
          rule: {
            "monday": [ 6, 14, 16, 27 ],
            "tuesday": [ 10, 14, 20, 1 ],
            "wednesday": [ 9, 13, 19, 29 ],
            "thursday": [ 8, 12, 17, 29 ],
            "saturday": [ 8, 11, 17, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3484145994/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://offland.bandcamp.com/album/pathways',
          a_string: 'Pathways by Off Land',
          rule: {
            "monday": [ 8, 11, 17, 28 ],
            "tuesday": [ 6, 14, 16, 27 ],
            "wednesday": [ 10, 14, 20, 1 ],
            "thursday": [ 9, 13, 19, 29 ],
            "saturday": [ 8, 12, 17, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3252752347/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/security-vehicles-only',
          a_string: 'Security Vehicles Only by Amnon Wolman',
          rule: {
            "monday": [ 9, 13, 18, 30 ],
            "tuesday": [ 9, 12, 18, 29 ],
            "wednesday": [ 7, 15, 17, 28 ],
            "thursday": [ 11, 15, 21, 2 ],
            "saturday": [ 10, 14, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1046372200/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gurugurubrain.bandcamp.com/album/sua-hiam-zun',
          a_string: '山險峻/Sua-Hiam-Zun by 破地獄/Scattered Purgatory',
          rule: {
            "monday": [ 10, 14, 20, 30 ],
            "tuesday": [ 9, 13, 18, 30 ],
            "wednesday": [ 9, 12, 18, 29 ],
            "thursday": [ 7, 15, 17, 28 ],
            "saturday": [ 11, 15, 21, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1439306838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tinyleaves.bandcamp.com/album/notes-on-belonging-2',
          a_string: 'Notes On Belonging by Tiny Leaves',
          rule: {
            "monday": [ 11, 15, 21, 2 ],
            "tuesday": [ 10, 14, 20, 30 ],
            "wednesday": [ 9, 13, 18, 30 ],
            "thursday": [ 9, 12, 18, 29 ],
            "saturday": [ 7, 15, 17, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1650358930/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.lowercasenoises.com/album/passage',
          a_string: 'Passage by Lowercase Noises',
          rule: {
            "monday": [ 7, 15, 17, 28 ],
            "tuesday": [ 11, 15, 21, 2 ],
            "wednesday": [ 10, 14, 20, 30 ],
            "thursday": [ 9, 13, 18, 30 ],
            "saturday": [ 9, 12, 18, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=400208076/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.lowercasenoises.com/album/the-swiss-illness',
          a_string: 'The Swiss Illness by Lowercase Noises',
          rule: {
            "monday": [ 9, 12, 18, 29 ],
            "tuesday": [ 7, 15, 17, 28 ],
            "wednesday": [ 11, 15, 21, 2 ],
            "thursday": [ 10, 14, 20, 30 ],
            "saturday": [ 9, 13, 18, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=650819023/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.lowercasenoises.com/album/james',
          a_string: 'James by Lowercase Noises',
          rule: {
            "monday": [ 9, 13, 18, 30 ],
            "tuesday": [ 9, 12, 18, 29 ],
            "wednesday": [ 7, 15, 17, 28 ],
            "thursday": [ 11, 15, 21, 2 ],
            "saturday": [ 10, 14, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3992946822/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unknowntonerecords.bandcamp.com/album/wounded-knee',
          a_string: 'Wounded Knee by Piotr Cisak',
          rule: {
            "monday": [ 10, 14, 20, 30 ],
            "tuesday": [ 9, 13, 18, 30 ],
            "wednesday": [ 9, 12, 18, 29 ],
            "thursday": [ 7, 15, 17, 28 ],
            "saturday": [ 11, 15, 21, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1907379065/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://handstitched.bandcamp.com/album/the-cloud-chorus',
          a_string: 'The Cloud Chorus by Maps and Diagrams',
          rule: {
            "monday": [ 12, 16, 22, 3 ],
            "tuesday": [ 11, 15, 21, 1 ],
            "wednesday": [ 10, 14, 19, 1 ],
            "thursday": [ 10, 13, 19, 30 ],
            "saturday": [ 8, 16, 18, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=277244698/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eileanrec.bandcamp.com/album/medicina',
          a_string: 'Medicina by Sustainer',
          rule: {
            "monday": [ 8, 16, 18, 29 ],
            "tuesday": [ 12, 16, 22, 3 ],
            "wednesday": [ 11, 15, 21, 1 ],
            "thursday": [ 10, 14, 19, 1 ],
            "saturday": [ 10, 13, 19, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=9089074/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://timhecker.bandcamp.com/album/virgins-2',
          a_string: 'Virgins by Tim Hecker',
          rule: {
            "monday": [ 10, 13, 19, 30 ],
            "tuesday": [ 8, 16, 18, 29 ],
            "wednesday": [ 12, 16, 22, 3 ],
            "thursday": [ 11, 15, 21, 1 ],
            "saturday": [ 10, 14, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4022394178/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deafheavens.bandcamp.com/album/sunbather',
          a_string: 'Sunbather by deafheaven',
          rule: {
            "monday": [ 10, 14, 19, 1 ],
            "tuesday": [ 10, 13, 19, 30 ],
            "wednesday": [ 8, 16, 18, 29 ],
            "thursday": [ 12, 16, 22, 3 ],
            "saturday": [ 11, 15, 21, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3693191614/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amulets.bandcamp.com/album/twin-symmetry',
          a_string: 'TWIN SYMMETRY by AMULETS',
          rule: {
            "monday": [ 11, 15, 21, 1 ],
            "tuesday": [ 10, 14, 19, 1 ],
            "wednesday": [ 10, 13, 19, 30 ],
            "thursday": [ 8, 16, 18, 29 ],
            "saturday": [ 12, 16, 22, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1445226504/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firstterracerecords.bandcamp.com/album/fts001',
          a_string: 'FTS001 by K. Leimer / Like A Villain',
          rule: {
            "monday": [ 12, 16, 22, 3 ],
            "tuesday": [ 11, 15, 21, 1 ],
            "wednesday": [ 10, 14, 19, 1 ],
            "thursday": [ 10, 13, 19, 30 ],
            "saturday": [ 8, 16, 18, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1069671556/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soundinsilencerecords.bandcamp.com/album/yours-are-stories-of-sadness',
          a_string: 'Yours Are Stories Of Sadness by bvdub',
          rule: {
            "monday": [ 8, 16, 18, 29 ],
            "tuesday": [ 12, 16, 22, 3 ],
            "wednesday": [ 11, 15, 21, 1 ],
            "thursday": [ 10, 14, 19, 1 ],
            "saturday": [ 10, 13, 19, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=427507248/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://store.broken20.com/album/li-series-05-jack-on-piano',
          a_string: 'li_series 05: Jack On Piano by TVO',
          rule: {
            "monday": [ 11, 14, 20, 1 ],
            "tuesday": [ 9, 17, 19, 30 ],
            "wednesday": [ 13, 17, 23, 4 ],
            "thursday": [ 12, 16, 22, 2 ],
            "saturday": [ 11, 15, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=283318884/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://adarcahianku.bandcamp.com/album/the-lost-beggars-of-sahara',
          a_string: 'the lost beggars of sahara by adarkah ianqu',
          rule: {
            "monday": [ 11, 15, 20, 2 ],
            "tuesday": [ 11, 14, 20, 1 ],
            "wednesday": [ 9, 17, 19, 30 ],
            "thursday": [ 13, 17, 23, 4 ],
            "saturday": [ 12, 16, 22, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3144344340/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blankembrace.bandcamp.com/album/pure',
          a_string: 'Pure by Blank Embrace',
          rule: {
            "monday": [ 12, 16, 22, 2 ],
            "tuesday": [ 11, 15, 20, 2 ],
            "wednesday": [ 11, 14, 20, 1 ],
            "thursday": [ 9, 17, 19, 30 ],
            "saturday": [ 13, 17, 23, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1505950645/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fabersan.bandcamp.com/album/selected-ambients-2017-collection',
          a_string: 'Selected Ambients 2017 (Collection) by Fabersan',
          rule: {
            "monday": [ 13, 17, 23, 4 ],
            "tuesday": [ 12, 16, 22, 2 ],
            "wednesday": [ 11, 15, 20, 2 ],
            "thursday": [ 11, 14, 20, 1 ],
            "saturday": [ 9, 17, 19, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3921803894/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://irrappext.bandcamp.com/album/celestial-laminate',
          a_string: 'Celestial Laminate by irr. app. (ext.)',
          rule: {
            "monday": [ 9, 17, 19, 30 ],
            "tuesday": [ 13, 17, 23, 4 ],
            "wednesday": [ 12, 16, 22, 2 ],
            "thursday": [ 11, 15, 20, 2 ],
            "saturday": [ 11, 14, 20, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=149042100/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whitelabrecs.bandcamp.com/album/purification-verses',
          a_string: 'Purification Verses by Tsone',
          rule: {
            "monday": [ 11, 14, 20, 1 ],
            "tuesday": [ 9, 17, 19, 30 ],
            "wednesday": [ 13, 17, 23, 4 ],
            "thursday": [ 12, 16, 22, 2 ],
            "saturday": [ 11, 15, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2105411563/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whitelabrecs.bandcamp.com/album/eyes-down-slowdown',
          a_string: 'eyes down slowdown by the prairie lines',
          rule: {
            "monday": [ 11, 15, 20, 2 ],
            "tuesday": [ 11, 14, 20, 1 ],
            "wednesday": [ 9, 17, 19, 30 ],
            "thursday": [ 13, 17, 23, 4 ],
            "saturday": [ 12, 16, 22, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=727838500/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newatlantismusic.bandcamp.com/album/inner-work',
          a_string: 'Inner Work by JV Lightbody',
          rule: {
            "monday": [ 13, 17, 23, 3 ],
            "tuesday": [ 12, 16, 21, 3 ],
            "wednesday": [ 12, 15, 21, 2 ],
            "thursday": [ 10, 18, 20, 1 ],
            "saturday": [ 14, 18, 24, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2425378851/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thecaretaker.bandcamp.com/album/everywhere-at-the-end-of-time',
          a_string: 'Everywhere at the end of time by The Caretaker',
          rule: {
            "monday": [ 14, 18, 24, 5 ],
            "tuesday": [ 13, 17, 23, 3 ],
            "wednesday": [ 12, 16, 21, 3 ],
            "thursday": [ 12, 15, 21, 2 ],
            "saturday": [ 10, 18, 20, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=794123225/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://loscil.bandcamp.com/album/monument-builders',
          a_string: 'Monument Builders by loscil',
          rule: {
            "monday": [ 10, 18, 20, 1 ],
            "tuesday": [ 14, 18, 24, 5 ],
            "wednesday": [ 13, 17, 23, 3 ],
            "thursday": [ 12, 16, 21, 3 ],
            "saturday": [ 12, 15, 21, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3777901001/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whitelabrecs.bandcamp.com/album/of-light-and-shade',
          a_string: 'Of Light and Shade by Overshift',
          rule: {
            "monday": [ 12, 15, 21, 2 ],
            "tuesday": [ 10, 18, 20, 1 ],
            "wednesday": [ 14, 18, 24, 5 ],
            "thursday": [ 13, 17, 23, 3 ],
            "saturday": [ 12, 16, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2146271663/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whitelabrecs.bandcamp.com/album/unsung-memories',
          a_string: 'Unsung Memories by Polaroid Notes',
          rule: {
            "monday": [ 12, 16, 21, 3 ],
            "tuesday": [ 12, 15, 21, 2 ],
            "wednesday": [ 10, 18, 20, 1 ],
            "thursday": [ 14, 18, 24, 5 ],
            "saturday": [ 13, 17, 23, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1325522365/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whitelabrecs.bandcamp.com/album/sixteen-frames',
          a_string: 'sixteen frames by teleferick',
          rule: {
            "monday": [ 13, 17, 23, 3 ],
            "tuesday": [ 12, 16, 21, 3 ],
            "wednesday": [ 12, 15, 21, 2 ],
            "thursday": [ 10, 18, 20, 1 ],
            "saturday": [ 14, 18, 24, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=228542707/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dragonseyerecordings.bandcamp.com/album/steel-dragons-eye-twelfth-anniversary',
          a_string: 'Steel: Dragon&#39;s Eye Twelfth Anniversary by Various Artists',
          rule: {
            "monday": [ 14, 18, 24, 5 ],
            "tuesday": [ 13, 17, 23, 3 ],
            "wednesday": [ 12, 16, 21, 3 ],
            "thursday": [ 12, 15, 21, 2 ],
            "saturday": [ 10, 18, 20, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2089019764/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dragonseyerecordings.bandcamp.com/album/as-if-we-were-never-here',
          a_string: 'As If We Were Never Here by Marc Kate',
          rule: {
            "monday": [ 11, 19, 21, 2 ],
            "tuesday": [ 15, 19, 25, 6 ],
            "wednesday": [ 14, 17, 24, 4 ],
            "thursday": [ 13, 17, 22, 4 ],
            "saturday": [ 13, 16, 22, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=982255756/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dragonseyerecordings.bandcamp.com/album/acclimation',
          a_string: 'Acclimation by Jake Muir',
          rule: {
            "monday": [ 13, 16, 22, 3 ],
            "tuesday": [ 11, 19, 21, 2 ],
            "wednesday": [ 15, 19, 25, 6 ],
            "thursday": [ 14, 17, 24, 4 ],
            "saturday": [ 13, 17, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3451854041/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kylebobbydunn.bandcamp.com/album/music-for-medication',
          a_string: 'Music for Medication by Kyle Bobby Dunn',
          rule: {
            "monday": [ 13, 17, 22, 4 ],
            "tuesday": [ 13, 16, 22, 3 ],
            "wednesday": [ 11, 19, 21, 2 ],
            "thursday": [ 15, 19, 25, 6 ],
            "saturday": [ 14, 17, 24, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2831529311/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kylebobbydunn.bandcamp.com/album/six-cognitive-works',
          a_string: 'Six Cognitive Works by Kyle Bobby Dunn',
          rule: {
            "monday": [ 14, 17, 24, 4 ],
            "tuesday": [ 13, 17, 22, 4 ],
            "wednesday": [ 13, 16, 22, 3 ],
            "thursday": [ 11, 19, 21, 2 ],
            "saturday": [ 15, 19, 25, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1536680056/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://greggkowalsky.bandcamp.com/album/lorange-lorange',
          a_string: 'L&#39;Orange, L&#39;Orange by Gregg Kowalsky',
          rule: {
            "monday": [ 15, 19, 25, 6 ],
            "tuesday": [ 14, 17, 24, 4 ],
            "wednesday": [ 13, 17, 22, 4 ],
            "thursday": [ 13, 16, 22, 3 ],
            "saturday": [  ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3300788636/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rhucle.bandcamp.com/album/flavor-of-water',
          a_string: 'Flavor Of Water by Rhucle / Mike Nigro',
          rule: {
            "monday": [ 11, 19, 21, 2 ],
            "tuesday": [ 15, 19, 25, 6 ],
            "wednesday": [ 14, 17, 24, 4 ],
            "thursday": [ 13, 17, 22, 4 ],
            "saturday": [ 13, 16, 22, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2915664514/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://heart.bandcamp.com/album/new-tab',
          a_string: 'New Tab by Khotin',
          rule: {
            "monday": [ 13, 16, 22, 3 ],
            "tuesday": [ 11, 19, 21, 2 ],
            "wednesday": [ 15, 19, 25, 6 ],
            "thursday": [ 14, 17, 24, 4 ],
            "saturday": [ 13, 17, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2479038235/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newatlantismusic.bandcamp.com/album/new-atlantis-volume-1',
          a_string: 'New Atlantis Volume 1 by New Atlantis',
          rule: {
            "monday": [ 14, 18, 23, 5 ],
            "tuesday": [ 14, 17, 23, 4 ],
            "wednesday": [ 12, 20, 22, 3 ],
            "thursday": [ 16, 20, 26, 7 ],
            "saturday": [ 15, 18, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3335578837/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chiheihatakeyama.bandcamp.com/album/sora',
          a_string: 'Sora by Chihei Hatakeyama + Federico Durand',
          rule: {
            "monday": [ 15, 18, 25, 5 ],
            "tuesday": [ 14, 18, 23, 5 ],
            "wednesday": [ 14, 17, 23, 4 ],
            "thursday": [ 12, 20, 22, 3 ],
            "saturday": [ 16, 20, 26, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2550586637/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chiheihatakeyama.bandcamp.com/album/heavy-snow',
          a_string: 'Heavy Snow by Chihei Hatakeyama',
          rule: {
            "monday": [ 16, 20, 26, 7 ],
            "tuesday": [ 15, 18, 25, 5 ],
            "wednesday": [ 14, 18, 23, 5 ],
            "thursday": [ 14, 17, 23, 4 ],
            "saturday": [ 12, 20, 22, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1537311490/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chiheihatakeyama.bandcamp.com/album/fluorescent-monochrome',
          a_string: 'Fluorescent Monochrome by Straytone',
          rule: {
            "monday": [ 12, 20, 22, 3 ],
            "tuesday": [ 16, 20, 26, 7 ],
            "wednesday": [ 15, 18, 25, 5 ],
            "thursday": [ 14, 18, 23, 5 ],
            "saturday": [ 14, 17, 23, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2596997395/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://huron.bandcamp.com/album/infinity-plus-forever',
          a_string: 'Infinity Plus Forever by Huron',
          rule: {
            "monday": [ 14, 17, 23, 4 ],
            "tuesday": [ 12, 20, 22, 3 ],
            "wednesday": [ 16, 20, 26, 7 ],
            "thursday": [ 15, 18, 25, 5 ],
            "saturday": [ 14, 18, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=676881688/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oyukiconjugate.bandcamp.com/album/tropic',
          a_string: 'TROPIC by O Yuki Conjugate',
          rule: {
            "monday": [ 14, 18, 23, 5 ],
            "tuesday": [ 14, 17, 23, 4 ],
            "wednesday": [ 12, 20, 22, 3 ],
            "thursday": [ 16, 20, 26, 7 ],
            "saturday": [ 15, 18, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3201498376/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://murkok.bandcamp.com/album/coast',
          a_string: 'coast by murkok',
          rule: {
            "monday": [ 15, 18, 25, 5 ],
            "tuesday": [ 14, 18, 23, 5 ],
            "wednesday": [ 14, 17, 23, 4 ],
            "thursday": [ 12, 20, 22, 3 ],
            "saturday": [ 16, 20, 26, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=174233431/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://adarcahianku.bandcamp.com/album/badart',
          a_string: 'badart by adarkahianqu',
          rule: {
            "monday": [ 17, 21, 27, 8 ],
            "tuesday": [ 16, 19, 26, 6 ],
            "wednesday": [ 15, 19, 24, 6 ],
            "thursday": [ 15, 18, 24, 5 ],
            "saturday": [ 13, 21, 23, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2754202102/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blankembrace.bandcamp.com/album/promises',
          a_string: 'Promises by Blank Embrace',
          rule: {
            "monday": [ 13, 21, 23, 4 ],
            "tuesday": [ 17, 21, 27, 8 ],
            "wednesday": [ 16, 19, 26, 6 ],
            "thursday": [ 15, 19, 24, 6 ],
            "saturday": [ 15, 18, 24, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=907489737/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fabersan.bandcamp.com/album/sunday-afternoon-music-inspired-by-the-cosmology-of-alfred-north-whitehead',
          a_string: 'Sunday Afternoon                                     [music inspired by the cosmology of Alfred North Whitehead.] by Fabersan',
          rule: {
            "monday": [ 15, 18, 24, 5 ],
            "tuesday": [ 13, 21, 23, 4 ],
            "wednesday": [ 17, 21, 27, 8 ],
            "thursday": [ 16, 19, 26, 6 ],
            "saturday": [ 15, 19, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2720701071/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soundinsilencerecords.bandcamp.com/album/faded-photographs',
          a_string: 'Faded Photographs by Absent Without Leave',
          rule: {
            "monday": [ 15, 19, 24, 6 ],
            "tuesday": [ 15, 18, 24, 5 ],
            "wednesday": [ 13, 21, 23, 4 ],
            "thursday": [ 17, 21, 27, 8 ],
            "saturday": [ 16, 19, 26, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=2905790012/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://store.broken20.com/album/li-series-09-materia-prima-lapidis-philosophorum',
          a_string: 'li_series 09: Materia Prima Lapidis Philosophorum by Valanx',
          rule: {
            "monday": [ 16, 19, 26, 6 ],
            "tuesday": [ 15, 19, 24, 6 ],
            "wednesday": [ 15, 18, 24, 5 ],
            "thursday": [ 13, 21, 23, 4 ],
            "saturday": [ 17, 21, 27, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2264359719/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stevehauschildt.bandcamp.com/album/strands',
          a_string: 'Strands by Steve Hauschildt',
          rule: {
            "monday": [ 17, 21, 27, 8 ],
            "tuesday": [ 16, 19, 26, 6 ],
            "wednesday": [ 15, 19, 24, 6 ],
            "thursday": [ 15, 18, 24, 5 ],
            "saturday": [ 13, 21, 23, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=560207272/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://polarseasrecordings.bandcamp.com/album/lowered-expectations',
          a_string: 'Lowered Expectations by Bradley Sean Alexander',
          rule: {
            "monday": [ 13, 21, 23, 4 ],
            "tuesday": [ 17, 21, 27, 8 ],
            "wednesday": [ 16, 19, 26, 6 ],
            "thursday": [ 15, 19, 24, 6 ],
            "saturday": [ 15, 18, 24, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3320035111/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://archivesdubmusic.bandcamp.com/album/home',
          a_string: 'Home by Warmth',
          rule: {
            "monday": [ 16, 19, 25, 6 ],
            "tuesday": [ 14, 22, 24, 5 ],
            "wednesday": [ 18, 22, 28, 9 ],
            "thursday": [ 17, 20, 27, 7 ],
            "saturday": [ 16, 20, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1355051069/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theattemptedtheftofmillions.bandcamp.com/album/loam',
          a_string: 'Loam by Trevor Vincent Edmonds &amp; Sean Curtis Patrick',
          rule: {
            "monday": [ 16, 20, 25, 7 ],
            "tuesday": [ 16, 19, 25, 6 ],
            "wednesday": [ 14, 22, 24, 5 ],
            "thursday": [ 18, 22, 28, 9 ],
            "saturday": [ 17, 20, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3629491121/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eleh.bandcamp.com/album/circle-three-full-moon-at-35hz',
          a_string: 'Circle Three: Full Moon At 35Hz by eleh',
          rule: {
            "monday": [ 17, 20, 27, 7 ],
            "tuesday": [ 16, 20, 25, 7 ],
            "wednesday": [ 16, 19, 25, 6 ],
            "thursday": [ 14, 22, 24, 5 ],
            "saturday": [ 18, 22, 28, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3505795299/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eleh.bandcamp.com/album/home-age-i',
          a_string: 'Home Age I by eleh',
          rule: {
            "monday": [ 18, 22, 28, 9 ],
            "tuesday": [ 17, 20, 27, 7 ],
            "wednesday": [ 16, 20, 25, 7 ],
            "thursday": [ 16, 19, 25, 6 ],
            "saturday": [ 14, 22, 24, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3542683785/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eleh.bandcamp.com/album/ohmage-resistor',
          a_string: 'Ohmage/Resistor by eleh',
          rule: {
            "monday": [ 14, 22, 24, 5 ],
            "tuesday": [ 18, 22, 28, 9 ],
            "wednesday": [ 17, 20, 27, 7 ],
            "thursday": [ 16, 20, 25, 7 ],
            "saturday": [ 16, 19, 25, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3552224053/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://phillniblock.bandcamp.com/album/touch-strings',
          a_string: 'Touch Strings by Phill Niblock',
          rule: {
            "monday": [ 16, 19, 25, 6 ],
            "tuesday": [ 14, 22, 24, 5 ],
            "wednesday": [ 18, 22, 28, 9 ],
            "thursday": [ 17, 20, 27, 7 ],
            "saturday": [ 16, 20, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4258213455/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://phillniblock.bandcamp.com/album/touch-three',
          a_string: 'Touch Three by Phill Niblock',
          rule: {
            "monday": [ 16, 20, 25, 7 ],
            "tuesday": [ 16, 19, 25, 6 ],
            "wednesday": [ 14, 22, 24, 5 ],
            "thursday": [ 18, 22, 28, 9 ],
            "saturday": [ 17, 20, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2701969926/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://phillniblock.bandcamp.com/album/touch-food',
          a_string: 'Touch Food by Phill Niblock',
          rule: {
            "monday": [ 18, 21, 26, 8 ],
            "tuesday": [ 17, 21, 26, 8 ],
            "wednesday": [ 17, 20, 26, 7 ],
            "thursday": [ 15, 23, 25, 6 ],
            "saturday": [ 19, 23, 29, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1997461071/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://quietestrecords.bandcamp.com/album/the-tape-works-pt1',
          a_string: 'The Tape Works Pt1 by Red on maroon',
          rule: {
            "monday": [ 19, 23, 29, 10 ],
            "tuesday": [ 18, 21, 26, 8 ],
            "wednesday": [ 17, 21, 26, 8 ],
            "thursday": [ 17, 20, 26, 7 ],
            "saturday": [ 15, 23, 25, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3030048139/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://quietestrecords.bandcamp.com/album/the-keeper-of-lost-souls',
          a_string: 'The keeper of lost souls. by Quietest Records',
          rule: {
            "monday": [ 15, 23, 25, 6 ],
            "tuesday": [ 19, 23, 29, 10 ],
            "wednesday": [ 18, 21, 26, 8 ],
            "thursday": [ 17, 21, 26, 8 ],
            "saturday": [ 17, 20, 26, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3424011459/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://quietestrecords.bandcamp.com/album/a-life-reinvented',
          a_string: 'A life reinvented by Quietest Records',
          rule: {
            "monday": [ 17, 20, 26, 7 ],
            "tuesday": [ 15, 23, 25, 6 ],
            "wednesday": [ 19, 23, 29, 10 ],
            "thursday": [ 18, 21, 26, 8 ],
            "saturday": [ 17, 21, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2097781097/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juliannabarwick.bandcamp.com/album/nepenthe',
          a_string: 'Nepenthe by Julianna Barwick',
          rule: {
            "monday": [ 17, 21, 26, 8 ],
            "tuesday": [ 17, 20, 26, 7 ],
            "wednesday": [ 15, 23, 25, 6 ],
            "thursday": [ 19, 23, 29, 10 ],
            "saturday": [ 18, 21, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2238000015/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juliannabarwick.bandcamp.com/album/will',
          a_string: 'Will by Julianna Barwick',
          rule: {
            "monday": [ 18, 21, 26, 8 ],
            "tuesday": [ 17, 21, 26, 8 ],
            "wednesday": [ 17, 20, 26, 7 ],
            "thursday": [ 15, 23, 25, 6 ],
            "saturday": [ 19, 23, 29, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4097428080/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juliannabarwick.bandcamp.com/album/rosabi-ep',
          a_string: 'Rosabi EP by Julianna Barwick',
          rule: {
            "monday": [ 19, 23, 29, 10 ],
            "tuesday": [ 18, 21, 26, 8 ],
            "wednesday": [ 17, 21, 26, 8 ],
            "thursday": [ 17, 20, 26, 7 ],
            "saturday": [ 15, 23, 25, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2327071401/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://celer.bandcamp.com/album/landmarks',
          a_string: 'Landmarks by Celer + Forest Management',
          rule: {
            "monday": [ 16, 24, 26, 7 ],
            "tuesday": [ 20, 24, 30, 11 ],
            "wednesday": [ 19, 22, 27, 9 ],
            "thursday": [ 18, 22, 27, 9 ],
            "saturday": [ 18, 21, 27, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1348975170/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://celer.bandcamp.com/album/in-the-end-youll-just-disappear',
          a_string: 'In the End You&#39;ll Just Disappear by Celer',
          rule: {
            "monday": [ 18, 21, 27, 8 ],
            "tuesday": [ 16, 24, 26, 7 ],
            "wednesday": [ 20, 24, 30, 11 ],
            "thursday": [ 19, 22, 27, 9 ],
            "saturday": [ 18, 22, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=263019383/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://celer.bandcamp.com/album/alcoves',
          a_string: 'Alcoves by Celer',
          rule: {
            "monday": [ 18, 22, 27, 9 ],
            "tuesday": [ 18, 21, 27, 8 ],
            "wednesday": [ 16, 24, 26, 7 ],
            "thursday": [ 20, 24, 30, 11 ],
            "saturday": [ 19, 22, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3643562070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deanmcphee.bandcamp.com/album/four-stones',
          a_string: 'Four Stones by Dean McPhee',
          rule: {
            "monday": [ 19, 22, 27, 9 ],
            "tuesday": [ 18, 22, 27, 9 ],
            "wednesday": [ 18, 21, 27, 8 ],
            "thursday": [ 16, 24, 26, 7 ],
            "saturday": [ 20, 24, 30, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3749575597/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://scottlawlor.bandcamp.com/album/the-year-of-the-snake-the-2013-compilation-set',
          a_string: 'The Year of The Snake (The 2013 Compilation Set) by Scott Lawlor',
          rule: {
            "monday": [ 20, 24, 30, 11 ],
            "tuesday": [ 19, 22, 27, 9 ],
            "wednesday": [ 18, 22, 27, 9 ],
            "thursday": [ 18, 21, 27, 8 ],
            "saturday": [ 16, 24, 26, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=258041068/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://januszjurga.bandcamp.com/album/duchy-rogowca',
          a_string: 'Duchy Rogowca by Janusz Jurga',
          rule: {
            "monday": [ 16, 24, 26, 7 ],
            "tuesday": [ 20, 24, 30, 11 ],
            "wednesday": [ 19, 22, 27, 9 ],
            "thursday": [ 18, 22, 27, 9 ],
            "saturday": [ 18, 21, 27, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2672424612/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://messa666.bandcamp.com/album/belfry',
          a_string: 'Belfry by Messa',
          rule: {
            "monday": [ 18, 21, 27, 8 ],
            "tuesday": [ 16, 24, 26, 7 ],
            "wednesday": [ 20, 24, 30, 11 ],
            "thursday": [ 19, 22, 27, 9 ],
            "saturday": [ 18, 22, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=231620390/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rbeny.bandcamp.com/album/cascade-symmetry',
          a_string: 'cascade symmetry by r beny',
          rule: {
            "monday": [ 19, 23, 28, 10 ],
            "tuesday": [ 19, 22, 28, 9 ],
            "wednesday": [ 17, 25, 27, 8 ],
            "thursday": [ 21, 25, 1, 12 ],
            "saturday": [ 20, 23, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3750285773/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cycliclaw.bandcamp.com/album/alchymeia',
          a_string: 'Alchymeia by raison d&#39;être',
          rule: {
            "monday": [ 20, 23, 28, 10 ],
            "tuesday": [ 19, 23, 28, 10 ],
            "wednesday": [ 19, 22, 28, 9 ],
            "thursday": [ 17, 25, 27, 8 ],
            "saturday": [ 21, 25, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3956813243/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aairria.bandcamp.com/album/automatic-listening-i',
          a_string: 'Automatic Listening I by Aairria',
          rule: {
            "monday": [ 21, 25, 1, 12 ],
            "tuesday": [ 20, 23, 28, 10 ],
            "wednesday": [ 19, 23, 28, 10 ],
            "thursday": [ 19, 22, 28, 9 ],
            "saturday": [ 17, 25, 27, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3863520136/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ashotdanielyan.bandcamp.com/album/utopia-2304',
          a_string: 'Utopia 2304 by Ashot Danielyan',
          rule: {
            "monday": [ 17, 25, 27, 8 ],
            "tuesday": [ 21, 25, 1, 12 ],
            "wednesday": [ 20, 23, 28, 10 ],
            "thursday": [ 19, 23, 28, 10 ],
            "saturday": [ 19, 22, 28, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3643612398/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://meitei.bandcamp.com/album/kwaidan',
          a_string: 'Kwaidan / 怪談 by Meitei / 冥丁',
          rule: {
            "monday": [ 19, 22, 28, 9 ],
            "tuesday": [ 17, 25, 27, 8 ],
            "wednesday": [ 21, 25, 1, 12 ],
            "thursday": [ 20, 23, 28, 10 ],
            "saturday": [ 19, 23, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1818678450/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leebannon.bandcamp.com/album/tahoe',
          a_string: 'Tahoe by Dedekind Cut',
          rule: {
            "monday": [ 19, 23, 28, 10 ],
            "tuesday": [ 19, 22, 28, 9 ],
            "wednesday": [ 17, 25, 27, 8 ],
            "thursday": [ 21, 25, 1, 12 ],
            "saturday": [ 20, 23, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1544015561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://12kmusic.bandcamp.com/album/field',
          a_string: 'Field by SHUTTLE358',
          rule: {
            "monday": [ 20, 23, 28, 10 ],
            "tuesday": [ 19, 23, 28, 10 ],
            "wednesday": [ 19, 22, 28, 9 ],
            "thursday": [ 17, 25, 27, 8 ],
            "saturday": [ 21, 25, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1955768260/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://archivesdubmusic.bandcamp.com/album/snow-light',
          a_string: 'Snow Light by Gallery Six',
          rule: {
            "monday": [ 22, 26, 2, 13 ],
            "tuesday": [ 21, 24, 29, 11 ],
            "wednesday": [ 20, 24, 29, 11 ],
            "thursday": [ 20, 23, 29, 10 ],
            "saturday": [ 18, 26, 28, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=857075846/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carolinemckenzie.bandcamp.com/album/interior-exterior',
          a_string: 'interior/exterior by Caroline McKenzie',
          rule: {
            "monday": [ 18, 26, 28, 9 ],
            "tuesday": [ 22, 26, 2, 13 ],
            "wednesday": [ 21, 24, 29, 11 ],
            "thursday": [ 20, 24, 29, 11 ],
            "saturday": [ 20, 23, 29, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2102278697/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carolinemckenzie.bandcamp.com/album/the-drowning-of-ophelia',
          a_string: 'the drowning of ophelia by Caroline McKenzie',
          rule: {
            "monday": [ 20, 23, 29, 10 ],
            "tuesday": [ 18, 26, 28, 9 ],
            "wednesday": [ 22, 26, 2, 13 ],
            "thursday": [ 21, 24, 29, 11 ],
            "saturday": [ 20, 24, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Drone',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3267038252/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carolinemckenzie.bandcamp.com/album/red-snow',
          a_string: 'red snow by Caroline McKenzie',
          rule: {
            "monday": [ 20, 24, 29, 11 ],
            "tuesday": [ 20, 23, 29, 10 ],
            "wednesday": [ 18, 26, 28, 9 ],
            "thursday": [ 22, 26, 2, 13 ],
            "saturday": [ 21, 24, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('june_musics_id_seq', (SELECT MAX(id) FROM june_musics));");
    });
};
