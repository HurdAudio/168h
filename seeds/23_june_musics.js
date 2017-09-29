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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
          theme: 'drone',
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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('june_musics_id_seq', (SELECT MAX(id) FROM june_musics));");
    });
};
