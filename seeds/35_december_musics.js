'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('december_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('december_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3057480238/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hhaabb.bandcamp.com/album/hab',
          a_string: 'HAB by HAB',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 5, 11, 17, 23 ],
            "wednesday": [ 4, 10, 16, 22 ],
            "thursday": [ 3, 9, 15, 21 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3742352136/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hermetopascoal.bandcamp.com/album/viajando-com-o-som-the-lost-76-vice-versa-studio-session',
          a_string: 'Viajando Com O Som (The Lost &#39;76 Vice-Versa Studio Session) by Hermeto Pascoal',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 6, 12, 18, 24 ],
            "wednesday": [ 5, 11, 17, 23 ],
            "thursday": [ 4, 10, 16, 22 ],
            "saturday": [ 3, 9, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3080218267/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://selomundomelhor.bandcamp.com/album/projeto-cru',
          a_string: 'Projeto Cru by Projeto Cru',
          rule: {
            "monday": [ 3, 9, 15, 21 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 6, 12, 18, 24 ],
            "thursday": [ 5, 11, 17, 23 ],
            "saturday": [ 4, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1775467947/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/conta',
          a_string: '&quot;conta&quot; by M.TAKARA',
          rule: {
            "monday": [ 4, 10, 16, 22 ],
            "tuesday": [ 3, 9, 15, 21 ],
            "wednesday": [ 7, 13, 19, 25 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 5, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2940843005/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://graxa.bandcamp.com/album/a-concorr-ncia-demais',
          a_string: 'A concorrência é demais! by Graxa',
          rule: {
            "monday": [ 5, 11, 17, 23 ],
            "tuesday": [ 4, 10, 16, 22 ],
            "wednesday": [ 3, 9, 15, 21 ],
            "thursday": [ 7, 13, 19, 25 ],
            "saturday": [ 6, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=535551876/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ubiquitycompilations.bandcamp.com/album/brasil-do-brazil',
          a_string: 'Brasil do Brazil by Various Artists',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 5, 11, 17, 23 ],
            "wednesday": [ 4, 10, 16, 22 ],
            "thursday": [ 3, 9, 15, 21 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1384877798/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sinewave1.bandcamp.com/album/para-uso-recreativo',
          a_string: 'Para Uso Recreativo by Sick',
          rule: {
            "monday": [ 8, 14, 20, 26 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 6, 12, 18, 24 ],
            "thursday": [ 5, 11, 17, 23 ],
            "saturday": [ 4, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2370054641/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomze.bandcamp.com/album/tom-z',
          a_string: 'Tom Zé by Tom Ze',
          rule: {
            "monday": [ 4, 10, 16, 22 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 7, 13, 19, 25 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 5, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2340267301/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theblogthatcelebratesitself.bandcamp.com/album/va-the-sea',
          a_string: 'VA - The Sea by TBTCI',
          rule: {
            "monday": [ 5, 11, 17, 23 ],
            "tuesday": [ 4, 10, 16, 22 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 7, 13, 19, 25 ],
            "saturday": [ 6, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=808439901/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coaxodosapo.bandcamp.com/album/oquadro',
          a_string: 'OQuadro by OQuadro',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 5, 11, 17, 23 ],
            "wednesday": [ 4, 10, 16, 22 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1811681915/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coaxodosapo.bandcamp.com/album/piano-solos',
          a_string: 'Piano Solos by Guilherme Arantes',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 6, 12, 18, 24 ],
            "wednesday": [ 5, 11, 17, 23 ],
            "thursday": [ 4, 10, 16, 22 ],
            "saturday": [ 8, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1742007145/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coaxodosapo.bandcamp.com/album/as-ganhadeiras-de-itapu',
          a_string: 'As Ganhadeiras de Itapuã by As Ganhadeiras de Itapuã',
          rule: {
            "monday": [ 8, 14, 20, 26 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 6, 12, 18, 24 ],
            "thursday": [ 5, 11, 17, 23 ],
            "saturday": [ 4, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2962010502/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomze.bandcamp.com/album/grande-liquida-o',
          a_string: 'Grande Liquidação by Tom Ze',
          rule: {
            "monday": [ 4, 10, 16, 22 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 7, 13, 19, 25 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 5, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3738045895/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vvaaschemarecords.bandcamp.com/album/freedom-jazz-dance',
          a_string: 'Freedom Jazz Dance by VVAA',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 5, 11, 17, 23 ],
            "wednesday": [ 9, 15, 21, 27 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1526212277/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://djcaptainplanet.bandcamp.com/album/esperanto-slang',
          a_string: 'Esperanto Slang by Captain Planet',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 6, 12, 18, 24 ],
            "wednesday": [ 5, 11, 17, 23 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 8, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3108741675/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/rain-music',
          a_string: '&quot;rain music&quot; by NATHAN BELL',
          rule: {
            "monday": [ 8, 14, 20, 26 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 6, 12, 18, 24 ],
            "thursday": [ 5, 11, 17, 23 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=808439901/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coaxodosapo.bandcamp.com/album/oquadro',
          a_string: 'OQuadro by OQuadro',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 7, 13, 19, 25 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 5, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3433381281/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://anthonywilson.bandcamp.com/album/campo-belo',
          a_string: 'Campo Belo by Anthony Wilson',
          rule: {
            "monday": [ 5, 11, 17, 23 ],
            "tuesday": [ 9, 15, 21, 27 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 7, 13, 19, 25 ],
            "saturday": [ 6, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3926834623/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tropicaltwistarecords.bandcamp.com/album/ibu-selva-ngo-bo-sontg-pa-ttr019',
          a_string: 'Ibu Selva - Ngo-bo Sontg-pa (TTR019) by Tropical Twista Records',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 5, 11, 17, 23 ],
            "wednesday": [ 9, 15, 21, 27 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=219486560/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/na-boca-dos-outros',
          a_string: '&quot;na boca dos outros&quot; by KIKO DINUCCI',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 6, 12, 18, 24 ],
            "wednesday": [ 5, 11, 17, 23 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 8, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=49193070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/m-takara-h-diaz-vs-leila',
          a_string: 'M.TAKARA &amp; H.DIAZ vs LEILA by DESMONTA',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 6, 13, 19, 25 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 10, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1478386499/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://godsandpunks.bandcamp.com/album/into-the-dunes-of-doom',
          a_string: 'Into the Dunes of Doom by Gods &amp; Punks',
          rule: {
            "monday": [ 10, 16, 22, 28 ],
            "tuesday": [ 9, 15, 21, 27 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 6, 13, 19, 25 ],
            "saturday": [ 6, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3177769465/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://voodoohop.bandcamp.com/album/voodoohop-entropia-coletiva-i',
          a_string: 'Voodoohop: Entropia Coletiva I by voodoohop',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 10, 16, 22, 28 ],
            "wednesday": [ 9, 15, 21, 27 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 6, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3859908011/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theblogthatcelebratesitself.bandcamp.com/album/highwire-days-the-psychedelic-furs-reverence',
          a_string: 'Highwire Days, The Psychedelic Furs´ Reverence by TBTCI',
          rule: {
            "monday": [ 6, 13, 19, 25 ],
            "tuesday": [ 6, 12, 18, 24 ],
            "wednesday": [ 10, 16, 22, 28 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 8, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('december_musics_id_seq', (SELECT MAX(id) FROM december_musics));");
    });
};
