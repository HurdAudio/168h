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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
          theme: 'Brazil & Pan-South American',
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
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3292168400/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://frentebolivarista.bandcamp.com/album/yeahman-transborda',
          a_string: 'YEAHMAN - Transborda by YEAHMAN',
          rule: {
            "monday": [ 8, 14, 20, 26 ],
            "tuesday": [ 6, 13, 19, 25 ],
            "wednesday": [ 6, 12, 18, 24 ],
            "thursday": [ 10, 16, 22, 28 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3395021422/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chicodub.bandcamp.com/album/hy-brazil-vol-10-new-music-from-brazil-2016',
          a_string: 'Hy Brazil Vol 10: New Music From Brazil 2016 by Chico Dub',
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
          id: 27,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=305968330/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lealmeida.bandcamp.com/album/paraleloplasmos',
          a_string: 'Paraleloplasmos by Lê Almeida',
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
          id: 28,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3665504977/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ayarecords.bandcamp.com/album/el-viejo-hombre-de-los-andes',
          a_string: 'El Viejo Hombre de los Andes by EVHA',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 11, 17, 23, 29 ],
            "wednesday": [ 10, 16, 22, 28 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 7, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=324600694/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://frentebolivarista.bandcamp.com/album/el-b-ho-cumbias-de-oro',
          a_string: 'El Búho - Cumbias de Oro by Frente Edits III',
          rule: {
            "monday": [ 7, 14, 20, 26 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 11, 17, 23, 29 ],
            "thursday": [ 10, 16, 22, 28 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1918340155/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ayarecords.bandcamp.com/album/marimba-del-pacifico',
          a_string: 'Marimba Del Pacifico by Rio Mira',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 7, 14, 20, 26 ],
            "wednesday": [ 7, 13, 19, 25 ],
            "thursday": [ 11, 17, 23, 29 ],
            "saturday": [ 10, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1707231046/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tiredofpeople.bandcamp.com/album/we-can-get-along-zzz02',
          a_string: 'We Can Get Along [ZZZ02] by SonoTWS',
          rule: {
            "monday": [ 10, 16, 22, 28 ],
            "tuesday": [ 9, 15, 21, 27 ],
            "wednesday": [ 7, 14, 20, 26 ],
            "thursday": [ 7, 13, 19, 25 ],
            "saturday": [ 11, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3601625332/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deafkidspunx.bandcamp.com/album/over-the-days-somewhat-damaged-ep',
          a_string: 'Over The Days... Somewhat Damaged EP by DEAFKIDS',
          rule: {
            "monday": [ 11, 17, 23, 29 ],
            "tuesday": [ 10, 16, 22, 28 ],
            "wednesday": [ 9, 15, 21, 27 ],
            "thursday": [ 7, 14, 20, 26 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=604321203/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yantrayantra.bandcamp.com/album/drones-e-excurs-es-de-guitarras-rumo-ao-desconhecido',
          a_string: 'Drones e Excursões de Guitarras Rumo ao Desconhecido by YANTRA',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 11, 17, 23, 29 ],
            "wednesday": [ 10, 16, 22, 28 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 7, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1050637797/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://artolindsay.bandcamp.com/album/encyclopedia-of-arto-2',
          a_string: 'Encyclopedia Of Arto by Arto lindsay',
          rule: {
            "monday": [ 7, 14, 20, 26 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 11, 17, 23, 29 ],
            "thursday": [ 10, 16, 22, 28 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=974602156/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fusca.bandcamp.com/album/fusca',
          a_string: 'Fusca by Fusca',
          rule: {
            "monday": [ 10, 16, 22, 28 ],
            "tuesday": [ 8, 15, 21, 27 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 12, 18, 24, 30 ],
            "saturday": [ 11, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=964486644/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomn.bandcamp.com/album/t-mn',
          a_string: 'TŌMN by Tōmn',
          rule: {
            "monday": [ 11, 17, 23, 29 ],
            "tuesday": [ 10, 16, 22, 28 ],
            "wednesday": [ 8, 15, 21, 27 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 12, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1157765245/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sonidotrpico.bandcamp.com/album/sonido-tr-pico-vol-i',
          a_string: 'Sonido Trópico Vol. I by Sonido Trópico',
          rule: {
            "monday": [ 12, 18, 24, 30 ],
            "tuesday": [ 11, 17, 23, 29 ],
            "wednesday": [ 10, 16, 22, 28 ],
            "thursday": [ 8, 15, 21, 27 ],
            "saturday": [ 8, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1176199692/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tropicaltwistarecords.bandcamp.com/album/kurup-maca-ba-ttr003',
          a_string: 'Kurup - Macaúba (TTR003) by Kurup',
          rule: {
            "monday": [ 8, 14, 20, 26 ],
            "tuesday": [ 12, 18, 24, 30 ],
            "wednesday": [ 11, 17, 23, 29 ],
            "thursday": [ 10, 16, 22, 28 ],
            "saturday": [ 8, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=598875439/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tropicaltwistarecords.bandcamp.com/album/v-a-hystereof-nica-vol-1-ttr021',
          a_string: 'V/A - Hystereofônica Vol. 1 (TTR021) by Tropical Twista Records',
          rule: {
            "monday": [ 8, 15, 21, 27 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 12, 18, 24, 30 ],
            "thursday": [ 11, 17, 23, 29 ],
            "saturday": [ 10, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1581814353/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/pessoas-n-o-2',
          a_string: 'pessoas não by HAB',
          rule: {
            "monday": [ 10, 16, 22, 28 ],
            "tuesday": [ 8, 15, 21, 27 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 12, 18, 24, 30 ],
            "saturday": [ 11, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1162580739/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/gua-pedra',
          a_string: 'água pedra by VALÉRIO',
          rule: {
            "monday": [ 11, 17, 23, 29 ],
            "tuesday": [ 10, 16, 22, 28 ],
            "wednesday": [ 8, 15, 21, 27 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 12, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1224343038/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/m-takara-3-1',
          a_string: 'M.TAKARA 3 + 1 by DESMONTA',
          rule: {
            "monday": [ 13, 19, 25, 31 ],
            "tuesday": [ 12, 18, 24, 30 ],
            "wednesday": [ 11, 17, 23, 29 ],
            "thursday": [ 9, 16, 22, 28 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2759140048/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rkzrecs.bandcamp.com/album/undergraduated-music',
          a_string: 'Undergraduated Music by Aquiles Guimarães',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 13, 19, 25, 31 ],
            "wednesday": [ 12, 18, 24, 30 ],
            "thursday": [ 11, 17, 23, 29 ],
            "saturday": [ 9, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1748905093/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/split-10-hab-m-takara',
          a_string: 'split 10&quot; [hab​/​m​.​takara] by DESMONTA',
          rule: {
            "monday": [ 9, 16, 22, 28 ],
            "tuesday": [ 9, 15, 21, 27 ],
            "wednesday": [ 13, 19, 25, 31 ],
            "thursday": [ 12, 18, 24, 30 ],
            "saturday": [ 11, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=594839715/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/rec-loop',
          a_string: 'rec/loop by PSILOSAMPLES',
          rule: {
            "monday": [ 11, 17, 23, 29 ],
            "tuesday": [ 9, 16, 22, 28 ],
            "wednesday": [ 9, 15, 21, 27 ],
            "thursday": [ 13, 19, 25, 31 ],
            "saturday": [ 12, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4027940168/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tigersmilkrecords.bandcamp.com/album/andina-huayno-carnaval-and-cumbia-the-sound-of-the-peruvian-andes-1968-1978-5',
          a_string: 'ANDINA: Huayno, Carnaval and Cumbia - The Sound of the Peruvian Andes 1968​-​1978 by Tigers Milk Records',
          rule: {
            "monday": [ 12, 18, 24, 30 ],
            "tuesday": [ 11, 17, 23, 29 ],
            "wednesday": [ 9, 16, 22, 28 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 13, 19, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=518360247/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gatitxdiscos.bandcamp.com/album/uno',
          a_string: 'UNO by Varios',
          rule: {
            "monday": [ 13, 19, 25, 31 ],
            "tuesday": [ 12, 18, 24, 30 ],
            "wednesday": [ 11, 17, 23, 29 ],
            "thursday": [ 9, 16, 22, 28 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=4248090408/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuallimusic.com/album/birds-of-bliss',
          a_string: 'Birds of Bliss by Cualli',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 13, 19, 25, 31 ],
            "wednesday": [ 12, 18, 24, 30 ],
            "thursday": [ 11, 17, 23, 29 ],
            "saturday": [ 9, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2572456482/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://riotseasonrecords.bandcamp.com/album/familia-de-lobos',
          a_string: 'Familia De Lobos by FAMILIA DE LOBOS',
          rule: {
            "monday": [ 10, 17, 23, 29 ],
            "tuesday": [ 10, 16, 22, 28 ],
            "wednesday": [ 14, 20, 26, 1 ],
            "thursday": [ 13, 19, 25, 31 ],
            "saturday": [ 12, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2621324398/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fuzzkrank.bandcamp.com/album/fuzzkrank',
          a_string: 'Fuzzkrank by Fuzzkrank',
          rule: {
            "monday": [ 12, 18, 24, 30 ],
            "tuesday": [ 10, 17, 23, 29 ],
            "wednesday": [ 10, 16, 22, 28 ],
            "thursday": [ 14, 20, 26, 1 ],
            "saturday": [ 13, 19, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2202146747/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fuzzclub.bandcamp.com/album/temporal',
          a_string: 'Temporal by Las Cobras',
          rule: {
            "monday": [ 13, 19, 25, 31 ],
            "tuesday": [ 12, 18, 24, 30 ],
            "wednesday": [ 10, 17, 23, 29 ],
            "thursday": [ 10, 16, 22, 28 ],
            "saturday": [ 14, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3539298468/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://novomundo-france.bandcamp.com/album/glue-trip-2',
          a_string: 'Glue trip by NOVOMUNDO',
          rule: {
            "monday": [ 14, 20, 26, 1 ],
            "tuesday": [ 13, 19, 25, 31 ],
            "wednesday": [ 12, 18, 24, 30 ],
            "thursday": [ 10, 17, 23, 29 ],
            "saturday": [ 10, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1136062252/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://raphaelracor.bandcamp.com/album/raphael-racor-today',
          a_string: 'Raphael Racor - Today by Raphael Racor',
          rule: {
            "monday": [ 10, 16, 22, 28 ],
            "tuesday": [ 14, 20, 26, 1 ],
            "wednesday": [ 13, 19, 25, 31 ],
            "thursday": [ 12, 18, 24, 30 ],
            "saturday": [ 10, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1671738285/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://radiojuicy.bandcamp.com/album/rio',
          a_string: 'rio by wun two',
          rule: {
            "monday": [ 10, 17, 23, 29 ],
            "tuesday": [ 10, 16, 22, 28 ],
            "wednesday": [ 14, 20, 26, 1 ],
            "thursday": [ 13, 19, 25, 31 ],
            "saturday": [ 12, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2273252392/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gatitxdiscos.bandcamp.com/album/poder-fantasma-poder-fantasma-ep',
          a_string: 'Poder Fantasma - Poder Fantasma ep by Poder Fantasma',
          rule: {
            "monday": [ 12, 18, 24, 30 ],
            "tuesday": [ 10, 17, 23, 29 ],
            "wednesday": [ 10, 16, 22, 28 ],
            "thursday": [ 14, 20, 26, 1 ],
            "saturday": [ 13, 19, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1385786064/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gatitxdiscos.bandcamp.com/album/las-olas-canciones-para-mis-amigxs',
          a_string: 'Las Olas - Canciones para mis amigxs by Las Olas',
          rule: {
            "monday": [ 14, 20, 26, 1 ],
            "tuesday": [ 13, 19, 25, 31 ],
            "wednesday": [ 11, 18, 24, 30 ],
            "thursday": [ 11, 17, 23, 29 ],
            "saturday": [ 15, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3803632707/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gatitxdiscos.bandcamp.com/album/paracaidistas-paracaidistas-ep',
          a_string: 'Paracaidistas  - Paracaidistas ep by Paracaidistas',
          rule: {
            "monday": [ 15, 21, 27, 2 ],
            "tuesday": [ 14, 20, 26, 1 ],
            "wednesday": [ 13, 19, 25, 31 ],
            "thursday": [ 11, 18, 24, 30 ],
            "saturday": [ 11, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3794687900/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juanamolina.bandcamp.com/album/halo',
          a_string: 'Halo by Juana Molina',
          rule: {
            "monday": [ 11, 17, 23, 29 ],
            "tuesday": [ 15, 21, 27, 2 ],
            "wednesday": [ 14, 20, 26, 1 ],
            "thursday": [ 13, 19, 25, 31 ],
            "saturday": [ 11, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2992457317/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://edmoonrec.bandcamp.com/album/latin-american-tech',
          a_string: 'Latin American Tech by Lascive Dopamine',
          rule: {
            "monday": [ 11, 18, 24, 30 ],
            "tuesday": [ 11, 17, 23, 29 ],
            "wednesday": [ 15, 21, 27, 2 ],
            "thursday": [ 14, 20, 26, 1 ],
            "saturday": [ 13, 19, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=329788858/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://quixosis.bandcamp.com/album/de-fi-cher',
          a_string: 'De Fiúcher by Quixosis',
          rule: {
            "monday": [ 13, 19, 25, 31 ],
            "tuesday": [ 11, 18, 24, 30 ],
            "wednesday": [ 11, 17, 23, 29 ],
            "thursday": [ 15, 21, 27, 2 ],
            "saturday": [ 14, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2609284185/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eruditestoner.bandcamp.com/album/erudite-stoner',
          a_string: 'Erudite Stoner by Erudite Stoner',
          rule: {
            "monday": [ 14, 20, 26, 1 ],
            "tuesday": [ 13, 19, 25, 31 ],
            "wednesday": [ 11, 18, 24, 30 ],
            "thursday": [ 11, 17, 23, 29 ],
            "saturday": [ 15, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2327432102/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dirtygrave.bandcamp.com/album/evil-desire',
          a_string: 'Evil Desire by Dirty Grave',
          rule: {
            "monday": [ 15, 21, 27, 2 ],
            "tuesday": [ 14, 20, 26, 1 ],
            "wednesday": [ 13, 19, 25, 31 ],
            "thursday": [ 11, 18, 24, 30 ],
            "saturday": [ 11, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2966963653/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://uroborosrecords.bandcamp.com/album/dystopic-future',
          a_string: 'Dystopic Future by Uroboros Records',
          rule: {
            "monday": [ 12, 18, 24, 30 ],
            "tuesday": [ 16, 22, 28, 3 ],
            "wednesday": [ 15, 21, 27, 2 ],
            "thursday": [ 14, 20, 26, 1 ],
            "saturday": [ 12, 19, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2684299125/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://supressor666.bandcamp.com/album/supressor',
          a_string: 'Supressor by Supressor',
          rule: {
            "monday": [ 12, 19, 25, 31 ],
            "tuesday": [ 12, 18, 24, 30 ],
            "wednesday": [ 16, 22, 28, 3 ],
            "thursday": [ 15, 21, 27, 2 ],
            "saturday": [ 14, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3585167401/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://andeantriberecords.bandcamp.com/album/v-a-andean-spirits-cd-1',
          a_string: 'V.A. ANDEAN SPIRITS - cd 1 by ANDEAN TRIBE RECORDS',
          rule: {
            "monday": [ 14, 20, 26, 1 ],
            "tuesday": [ 12, 19, 25, 31 ],
            "wednesday": [ 12, 18, 24, 30 ],
            "thursday": [ 16, 22, 28, 3 ],
            "saturday": [ 15, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=190178628/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://snumusic.bandcamp.com/album/post-vida',
          a_string: 'Post-Vida by snu',
          rule: {
            "monday": [ 15, 21, 27, 2 ],
            "tuesday": [ 14, 20, 26, 1 ],
            "wednesday": [ 12, 19, 25, 31 ],
            "thursday": [ 12, 18, 24, 30 ],
            "saturday": [ 16, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3955389533/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://selomundomelhor.bandcamp.com/album/percuss-o-experimental-brasileira',
          a_string: 'Percussão Experimental Brasileira by Batucajé',
          rule: {
            "monday": [ 16, 22, 28, 3 ],
            "tuesday": [ 15, 21, 27, 2 ],
            "wednesday": [ 14, 20, 26, 1 ],
            "thursday": [ 12, 19, 25, 31 ],
            "saturday": [ 12, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1692594616/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://selomundomelhor.bandcamp.com/album/nos-quintais-do-mundo-2010',
          a_string: 'Nos quintais do Mundo - 2010 by DJ Tudo e  sua gente de todo lugar',
          rule: {
            "monday": [ 12, 18, 24, 30 ],
            "tuesday": [ 16, 22, 28, 3 ],
            "wednesday": [ 15, 21, 27, 2 ],
            "thursday": [ 14, 20, 26, 1 ],
            "saturday": [ 12, 19, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2263023513/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://selomundomelhor.bandcamp.com/album/pra-iemanj',
          a_string: 'Pra Iemanjá by DJ Tudo e sua gente de todo lugar',
          rule: {
            "monday": [ 12, 19, 25, 31 ],
            "tuesday": [ 12, 18, 24, 30 ],
            "wednesday": [ 16, 22, 28, 3 ],
            "thursday": [ 15, 21, 27, 2 ],
            "saturday": [ 14, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=969446742/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ceumusic.bandcamp.com/album/tropix',
          a_string: 'Tropix by Céu',
          rule: {
            "monday": [ 15, 21, 27, 2 ],
            "tuesday": [ 13, 20, 26, 1 ],
            "wednesday": [ 13, 19, 25, 31 ],
            "thursday": [ 17, 23, 29, 4 ],
            "saturday": [ 16, 22, 28, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3301125778/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://victoire-oberkampf.bandcamp.com/album/spiritual',
          a_string: 'Spiritual by Victoire Oberkampf',
          rule: {
            "monday": [ 16, 22, 28, 2 ],
            "tuesday": [ 15, 21, 27, 2 ],
            "wednesday": [ 13, 20, 26, 1 ],
            "thursday": [ 13, 19, 25, 31 ],
            "saturday": [ 17, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2253018215/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blasthrash.bandcamp.com/album/violence-just-for-fun',
          a_string: 'Violence Just For Fun by Blasthrash',
          rule: {
            "monday": [ 17, 23, 29, 4 ],
            "tuesday": [ 16, 22, 28, 2 ],
            "wednesday": [ 15, 21, 27, 2 ],
            "thursday": [ 13, 20, 26, 1 ],
            "saturday": [ 13, 19, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1381661475/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pakapirecords.bandcamp.com/album/la-psicotropia',
          a_string: 'La Psicotropia by Various Artists',
          rule: {
            "monday": [ 13, 19, 25, 31 ],
            "tuesday": [ 17, 23, 29, 4 ],
            "wednesday": [ 16, 22, 28, 2 ],
            "thursday": [ 15, 21, 27, 2 ],
            "saturday": [ 13, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2208855485/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pakapirecords.bandcamp.com/album/german-army-bloque-del-sur',
          a_string: 'German Army &amp; Bloque del Sur by Pakapi Records',
          rule: {
            "monday": [ 13, 20, 26, 1 ],
            "tuesday": [ 13, 19, 25, 31 ],
            "wednesday": [ 17, 23, 29, 4 ],
            "thursday": [ 16, 22, 28, 2 ],
            "saturday": [ 15, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2153211590/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pakapirecords.bandcamp.com/album/popolus-ajeno-yn-gmc',
          a_string: 'Popolus Ajeno (Ø+yn &amp; GMC) by Ø+yn &amp; GMC',
          rule: {
            "monday": [ 15, 21, 27, 2 ],
            "tuesday": [ 13, 20, 26, 1 ],
            "wednesday": [ 13, 19, 25, 31 ],
            "thursday": [ 17, 23, 29, 4 ],
            "saturday": [ 16, 22, 28, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3201825692/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://domlanenamusic.bandcamp.com/album/cantando-ep',
          a_string: 'Cantando EP by Dom La Nena',
          rule: {
            "monday": [ 16, 22, 28, 2 ],
            "tuesday": [ 15, 21, 27, 2 ],
            "wednesday": [ 13, 20, 26, 1 ],
            "thursday": [ 13, 19, 25, 31 ],
            "saturday": [ 17, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2057778744/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kafundrecords.bandcamp.com/album/kafund-vol-5-afro-brazilian-roots-and-wires',
          a_string: 'Kafundó Vol. 5;  Afro-Brazilian Roots and Wires by Kafundó Records',
          rule: {
            "monday": [ 18, 24, 30, 5 ],
            "tuesday": [ 17, 23, 29, 3 ],
            "wednesday": [ 16, 22, 28, 3 ],
            "thursday": [ 13, 21, 27, 2 ],
            "saturday": [ 14, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1774175615/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sibu.bandcamp.com/album/nosy-be',
          a_string: 'Nosy Be by Sibu',
          rule: {
            "monday": [ 14, 20, 26, 1 ],
            "tuesday": [ 18, 24, 30, 5 ],
            "wednesday": [ 17, 23, 29, 3 ],
            "thursday": [ 16, 22, 28, 3 ],
            "saturday": [ 13, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1379604130/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomze.bandcamp.com/album/com-defeito-de-fabrica-o-fabrication-defect',
          a_string: 'Com Defeito de Fabricação: Fabrication Defect by Tom Ze',
          rule: {
            "monday": [ 13, 21, 27, 2 ],
            "tuesday": [ 14, 20, 26, 1 ],
            "wednesday": [ 18, 24, 30, 5 ],
            "thursday": [ 17, 23, 29, 3 ],
            "saturday": [ 16, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=51595156/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://luakabop.bandcamp.com/album/brazil-classics-7-what-s-happening-in-pernambuco-new-sounds-of-the-brazilian-northeast',
          a_string: 'Brazil Classics 7: What’s Happening In Pernambuco: New Sounds of the Brazilian Northeast by Luaka Bop',
          rule: {
            "monday": [ 16, 22, 28, 3 ],
            "tuesday": [ 13, 21, 27, 2 ],
            "wednesday": [ 14, 20, 26, 1 ],
            "thursday": [ 18, 24, 30, 5 ],
            "saturday": [ 17, 23, 29, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3614230905/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://luakabop.bandcamp.com/album/brazil-classics-1-beleza-tropical',
          a_string: 'Brazil Classics 1: Beleza Tropical by Luaka Bop',
          rule: {
            "monday": [ 17, 23, 29, 3 ],
            "tuesday": [ 16, 22, 28, 3 ],
            "wednesday": [ 13, 21, 27, 2 ],
            "thursday": [ 14, 20, 26, 1 ],
            "saturday": [ 18, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3585145624/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theevildm.bandcamp.com/album/the-evil',
          a_string: 'THE EVIL by The Evil',
          rule: {
            "monday": [ 18, 24, 30, 5 ],
            "tuesday": [ 17, 23, 29, 3 ],
            "wednesday": [ 16, 22, 28, 3 ],
            "thursday": [ 13, 21, 27, 2 ],
            "saturday": [ 14, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4234132083/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/siria',
          a_string: 'Siriá by Mestre Cupijó e Seu Ritmo (The mythical sound of northern Brasil)',
          rule: {
            "monday": [ 14, 20, 26, 1 ],
            "tuesday": [ 18, 24, 30, 5 ],
            "wednesday": [ 17, 23, 29, 3 ],
            "thursday": [ 16, 22, 28, 3 ],
            "saturday": [ 13, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=461963248/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/hamad-kalkaba-and-the-golden-sounds-1974-1975',
          a_string: 'Hamad Kalkaba and The Golden Sounds 1974-1975 by Hamad Kalkaba',
          rule: {
            "monday": [ 14, 22, 28, 3 ],
            "tuesday": [ 15, 21, 27, 2 ],
            "wednesday": [ 19, 25, 31, 6 ],
            "thursday": [ 18, 24, 30, 4 ],
            "saturday": [ 17, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2737887252/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music-from-memory.bandcamp.com/album/outro-tempo-electronic-and-contemporary-music-from-brazil-1978-1992',
          a_string: 'Outro Tempo: Electronic And Contemporary Music From Brazil 1978-1992 by Music From Memory',
          rule: {
            "monday": [ 17, 23, 29, 4 ],
            "tuesday": [ 14, 22, 28, 3 ],
            "wednesday": [ 15, 21, 27, 2 ],
            "thursday": [ 19, 25, 31, 6 ],
            "saturday": [ 18, 24, 30, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1856667815/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joycemoreno.bandcamp.com/album/tardes-cariocas',
          a_string: 'Tardes Cariocas by Joyce Moreno',
          rule: {
            "monday": [ 18, 24, 30, 4 ],
            "tuesday": [ 17, 23, 29, 4 ],
            "wednesday": [ 14, 22, 28, 3 ],
            "thursday": [ 15, 21, 27, 2 ],
            "saturday": [ 19, 25, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2512859284/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joycemoreno.bandcamp.com/album/cool',
          a_string: 'Cool by Joyce Moreno',
          rule: {
            "monday": [ 19, 25, 31, 6 ],
            "tuesday": [ 18, 24, 30, 4 ],
            "wednesday": [ 17, 23, 29, 4 ],
            "thursday": [ 14, 22, 28, 3 ],
            "saturday": [ 15, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=877748168/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/cantos-invisiveis',
          a_string: 'Cantos Invisiveis by Sao Paulo Underground',
          rule: {
            "monday": [ 15, 21, 27, 2 ],
            "tuesday": [ 19, 25, 31, 6 ],
            "wednesday": [ 18, 24, 30, 4 ],
            "thursday": [ 17, 23, 29, 4 ],
            "saturday": [ 14, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1033402898/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://babeterror.bandcamp.com/album/ancient-mocean-2017',
          a_string: 'Ancient M&#39;ocean (2017) by Babe, Terror',
          rule: {
            "monday": [ 14, 22, 28, 3 ],
            "tuesday": [ 15, 21, 27, 2 ],
            "wednesday": [ 19, 25, 31, 6 ],
            "thursday": [ 18, 24, 30, 4 ],
            "saturday": [ 17, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2844917765/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ironlungpv.bandcamp.com/album/iii-lp-lungs-086',
          a_string: 'III LP (LUNGS-086) by RAKTA',
          rule: {
            "monday": [ 17, 23, 29, 4 ],
            "tuesday": [ 14, 22, 28, 3 ],
            "wednesday": [ 15, 21, 27, 2 ],
            "thursday": [ 19, 25, 31, 6 ],
            "saturday": [ 18, 24, 30, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3496206896/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vagosagrado.bandcamp.com/album/vol-ii',
          a_string: 'Vol. II by Vago Sagrado',
          rule: {
            "monday": [ 19, 25, 31, 5 ],
            "tuesday": [ 18, 24, 30, 5 ],
            "wednesday": [ 15, 23, 29, 4 ],
            "thursday": [ 16, 22, 28, 3 ],
            "saturday": [ 20, 26, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2079704059/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vagosagrado.bandcamp.com/album/alea-iacta-est',
          a_string: 'Alea Iacta Est by Vago Sagrado',
          rule: {
            "monday": [ 20, 26, 1, 7 ],
            "tuesday": [ 19, 25, 31, 5 ],
            "wednesday": [ 18, 24, 30, 5 ],
            "thursday": [ 15, 23, 29, 4 ],
            "saturday": [ 16, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1183433253/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vagosagrado.bandcamp.com/album/vago-sagrado',
          a_string: 'Vago Sagrado by Vago Sagrado',
          rule: {
            "monday": [ 16, 22, 28, 3 ],
            "tuesday": [ 20, 26, 1, 7 ],
            "wednesday": [ 19, 25, 31, 5 ],
            "thursday": [ 18, 24, 30, 5 ],
            "saturday": [ 15, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1977208599/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://crookedtreerecords.bandcamp.com/album/softspoken',
          a_string: 'Softspoken by The Sorry Shop',
          rule: {
            "monday": [ 15, 23, 29, 4 ],
            "tuesday": [ 16, 22, 28, 3 ],
            "wednesday": [ 20, 26, 1, 7 ],
            "thursday": [ 19, 25, 31, 5 ],
            "saturday": [ 18, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1496544705/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deathraybam.bandcamp.com/album/blackk-mirror',
          a_string: 'Blackk Mirror by Deathray Bam!',
          rule: {
            "monday": [ 18, 24, 30, 5 ],
            "tuesday": [ 15, 23, 29, 4 ],
            "wednesday": [ 16, 22, 28, 3 ],
            "thursday": [ 20, 26, 1, 7 ],
            "saturday": [ 19, 25, 31, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1470380704/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wanderwildner.bandcamp.com/album/wanclub-3',
          a_string: 'Wanclub by Wander Wildner y sus Comancheros',
          rule: {
            "monday": [ 19, 25, 31, 5 ],
            "tuesday": [ 18, 24, 30, 5 ],
            "wednesday": [ 15, 23, 29, 4 ],
            "thursday": [ 16, 22, 28, 3 ],
            "saturday": [ 20, 26, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=292221390/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://luakabop.bandcamp.com/album/brazil-classics-2-o-samba',
          a_string: 'Brazil Classics 2: O Samba by Luaka Bop',
          rule: {
            "monday": [ 20, 26, 1, 7 ],
            "tuesday": [ 19, 25, 31, 5 ],
            "wednesday": [ 18, 24, 30, 5 ],
            "thursday": [ 15, 23, 29, 4 ],
            "saturday": [ 16, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4281459110/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://luakabop.bandcamp.com/album/brazil-classics-3-forr-etc-music-of-the-brazilian-northeast',
          a_string: 'Brazil Classics 3: Forró etc.: Music of the Brazilian Northeast by Luaka Bop',
          rule: {
            "monday": [ 17, 23, 29, 4 ],
            "tuesday": [ 21, 27, 2, 8 ],
            "wednesday": [ 20, 26, 1, 6 ],
            "thursday": [ 19, 25, 31, 6 ],
            "saturday": [ 16, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=454619853/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomze.bandcamp.com/album/brazil-classics-4-the-best-of-tom-z',
          a_string: 'Brazil Classics 4: The Best of Tom Zé by Tom Ze',
          rule: {
            "monday": [ 16, 24, 30, 5 ],
            "tuesday": [ 17, 23, 29, 4 ],
            "wednesday": [ 21, 27, 2, 8 ],
            "thursday": [ 20, 26, 1, 6 ],
            "saturday": [ 19, 25, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2504248903/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://somosconvoy.bandcamp.com/album/convoy',
          a_string: 'Convoy by Convoy',
          rule: {
            "monday": [ 19, 25, 31, 6 ],
            "tuesday": [ 16, 24, 30, 5 ],
            "wednesday": [ 17, 23, 29, 4 ],
            "thursday": [ 21, 27, 2, 8 ],
            "saturday": [ 20, 26, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3349957760/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://maskedsynthwave.bandcamp.com/album/the-dying-cult',
          a_string: 'The Dying Cult by Masked',
          rule: {
            "monday": [ 20, 26, 1, 6 ],
            "tuesday": [ 19, 25, 31, 6 ],
            "wednesday": [ 16, 24, 30, 5 ],
            "thursday": [ 17, 23, 29, 4 ],
            "saturday": [ 21, 27, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2621167700/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://willowispmusic.bandcamp.com/album/puzzle-symphony',
          a_string: 'Puzzle Symphony by Will O Wisp',
          rule: {
            "monday": [ 21, 27, 2, 8 ],
            "tuesday": [ 20, 26, 1, 6 ],
            "wednesday": [ 19, 25, 31, 6 ],
            "thursday": [ 16, 24, 30, 5 ],
            "saturday": [ 17, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=673453486/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://andeantriberecords.bandcamp.com/album/naga-baba-forbidden-fruit',
          a_string: 'NAGA BABA - Forbidden Fruit by ANDEAN TRIBE RECORDS',
          rule: {
            "monday": [ 17, 23, 29, 4 ],
            "tuesday": [ 21, 27, 2, 8 ],
            "wednesday": [ 20, 26, 1, 6 ],
            "thursday": [ 19, 25, 31, 6 ],
            "saturday": [ 16, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=677932872/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://museumofpastartifacts.bandcamp.com/album/melancholy-city',
          a_string: 'Melancholy City by Museum Of Past Artifacts',
          rule: {
            "monday": [ 16, 24, 30, 5 ],
            "tuesday": [ 17, 23, 29, 4 ],
            "wednesday": [ 21, 27, 2, 8 ],
            "thursday": [ 20, 26, 1, 6 ],
            "saturday": [ 19, 25, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3550845600/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://laperseguidora.bandcamp.com/album/ponyfever',
          a_string: 'PonyFever by LA PERSEGUIDORA',
          rule: {
            "monday": [ 20, 26, 1, 7 ],
            "tuesday": [ 17, 25, 31, 6 ],
            "wednesday": [ 18, 24, 30, 5 ],
            "thursday": [ 22, 28, 3, 9 ],
            "saturday": [ 21, 27, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1774588430/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://redsuncult.bandcamp.com/album/red-sun-cult',
          a_string: 'Red Sun Cult by Red Sun Cult',
          rule: {
            "monday": [ 21, 27, 2, 7 ],
            "tuesday": [ 20, 26, 1, 7 ],
            "wednesday": [ 17, 25, 31, 6 ],
            "thursday": [ 18, 24, 30, 5 ],
            "saturday": [ 22, 28, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3689425113/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://redsuncult.bandcamp.com/album/void-traveler',
          a_string: 'Void Traveler by Red Sun Cult',
          rule: {
            "monday": [ 22, 28, 3, 9 ],
            "tuesday": [ 21, 27, 2, 7 ],
            "wednesday": [ 20, 26, 1, 7 ],
            "thursday": [ 17, 25, 31, 6 ],
            "saturday": [ 18, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4132066929/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://necronomicon.bandcamp.com/album/adiante',
          a_string: 'Adiante by Necro',
          rule: {
            "monday": [ 18, 24, 30, 5 ],
            "tuesday": [ 22, 28, 3, 9 ],
            "wednesday": [ 21, 27, 2, 7 ],
            "thursday": [ 20, 26, 1, 7 ],
            "saturday": [ 17, 25, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=518899257/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zzkrecords.bandcamp.com/album/selva',
          a_string: 'Selva by El Remolon',
          rule: {
            "monday": [ 17, 25, 31, 6 ],
            "tuesday": [ 18, 24, 30, 5 ],
            "wednesday": [ 22, 28, 3, 9 ],
            "thursday": [ 21, 27, 2, 7 ],
            "saturday": [ 20, 26, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=874343302/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zzkrecords.bandcamp.com/album/en-son-de-paz',
          a_string: 'En Son de Paz by Frikstailers',
          rule: {
            "monday": [ 20, 26, 1, 7 ],
            "tuesday": [ 17, 25, 31, 6 ],
            "wednesday": [ 18, 24, 30, 5 ],
            "thursday": [ 22, 28, 3, 9 ],
            "saturday": [ 21, 27, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=381872142/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zzkrecords.bandcamp.com/album/cosmus',
          a_string: 'Cosmus by MITÚ',
          rule: {
            "monday": [ 21, 27, 2, 7 ],
            "tuesday": [ 20, 26, 1, 7 ],
            "wednesday": [ 17, 25, 31, 6 ],
            "thursday": [ 18, 24, 30, 5 ],
            "saturday": [ 22, 28, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=899788126/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tropicaltwistarecords.bandcamp.com/album/v-a-mvndivagante-vol-1-ttr035',
          a_string: 'V/A - MVNDIVAGANTE Vol.1 (TTR035) by Tropical Twista Records',
          rule: {
            "monday": [ 23, 29, 4, 10 ],
            "tuesday": [ 22, 28, 3, 8 ],
            "wednesday": [ 21, 27, 2, 8 ],
            "thursday": [ 18, 26, 1, 7 ],
            "saturday": [ 19, 25, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3723800367/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://testgrind.bandcamp.com/album/arabe-macabre',
          a_string: 'Arabe Macabre by Test',
          rule: {
            "monday": [ 19, 25, 31, 6 ],
            "tuesday": [ 23, 29, 4, 10 ],
            "wednesday": [ 22, 28, 3, 8 ],
            "thursday": [ 21, 27, 2, 8 ],
            "saturday": [ 18, 26, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4220303382/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dillonzky.bandcamp.com/album/kind',
          a_string: 'Kind by Dillon',
          rule: {
            "monday": [ 18, 26, 1, 7 ],
            "tuesday": [ 19, 25, 31, 6 ],
            "wednesday": [ 23, 29, 4, 10 ],
            "thursday": [ 22, 28, 3, 8 ],
            "saturday": [ 21, 27, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1596054815/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://suertecampeon.bandcamp.com/album/este-es-el-comienzo-de-todo-lo-que-no-quieres-ep',
          a_string: 'Este es el comienzo de todo lo que no quieres (EP) by Suerte Campeón',
          rule: {
            "monday": [ 21, 27, 2, 8 ],
            "tuesday": [ 18, 26, 1, 7 ],
            "wednesday": [ 19, 25, 31, 6 ],
            "thursday": [ 23, 29, 4, 10 ],
            "saturday": [ 22, 28, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4043186328/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://maneeshdemoor.bandcamp.com/album/songs-from-the-tree-of-light',
          a_string: 'SONGS FROM THE TREE OF LIGHT by Maneesh de Moor',
          rule: {
            "monday": [ 22, 28, 3, 8 ],
            "tuesday": [ 21, 27, 2, 8 ],
            "wednesday": [ 18, 26, 1, 7 ],
            "thursday": [ 19, 25, 31, 6 ],
            "saturday": [ 23, 29, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2088685879/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://comitepokoflo.bandcamp.com/album/dedos-estamos-hartos',
          a_string: 'Dedos - Estamos Hartos by Comité Pokofló',
          rule: {
            "monday": [ 23, 29, 4, 10 ],
            "tuesday": [ 22, 28, 3, 8 ],
            "wednesday": [ 21, 27, 2, 8 ],
            "thursday": [ 18, 26, 1, 7 ],
            "saturday": [ 19, 25, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1126519492/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arthuri.bandcamp.com/album/coelho-branco',
          a_string: 'Coelho Branco by Arthuri',
          rule: {
            "monday": [ 19, 25, 31, 6 ],
            "tuesday": [ 23, 29, 4, 10 ],
            "wednesday": [ 22, 28, 3, 8 ],
            "thursday": [ 21, 27, 2, 8 ],
            "saturday": [ 18, 26, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3077687890/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arthuri.bandcamp.com/album/coelho-branco-vol-2',
          a_string: 'Coelho Branco Vol 2 by Arthuri',
          rule: {
            "monday": [ 19, 27, 2, 8 ],
            "tuesday": [ 20, 26, 1, 7 ],
            "wednesday": [ 24, 30, 5, 11 ],
            "thursday": [ 23, 29, 4, 9 ],
            "saturday": [ 22, 28, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2497221679/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://camaronesorquestraguitarristica.bandcamp.com/album/feeexta',
          a_string: 'Feeexta by Camarones Orquestra Guitarrística',
          rule: {
            "monday": [ 22, 28, 3, 9 ],
            "tuesday": [ 19, 27, 2, 8 ],
            "wednesday": [ 20, 26, 1, 7 ],
            "thursday": [ 24, 30, 5, 11 ],
            "saturday": [ 23, 29, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=196147334/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orangemilkrecords.bandcamp.com/album/breakeadito',
          a_string: 'Breakeadito by El Murki',
          rule: {
            "monday": [ 23, 29, 4, 9 ],
            "tuesday": [ 22, 28, 3, 9 ],
            "wednesday": [ 19, 27, 2, 8 ],
            "thursday": [ 20, 26, 1, 7 ],
            "saturday": [ 24, 30, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3964698224/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jvlian.bandcamp.com/album/crisis',
          a_string: 'CRISIS by JVLIAN',
          rule: {
            "monday": [ 24, 30, 5, 11 ],
            "tuesday": [ 23, 29, 4, 9 ],
            "wednesday": [ 22, 28, 3, 9 ],
            "thursday": [ 19, 27, 2, 8 ],
            "saturday": [ 20, 26, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=59501599/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juanamolina.bandcamp.com/album/wed-21',
          a_string: 'Wed 21 by Juana Molina',
          rule: {
            "monday": [ 20, 26, 1, 7 ],
            "tuesday": [ 24, 30, 5, 11 ],
            "wednesday": [ 23, 29, 4, 9 ],
            "thursday": [ 22, 28, 3, 9 ],
            "saturday": [ 19, 27, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3660299472/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juanamolina.bandcamp.com/album/un-d-a',
          a_string: 'Un Día by Juana Molina',
          rule: {
            "monday": [ 19, 27, 2, 8 ],
            "tuesday": [ 20, 26, 1, 7 ],
            "wednesday": [ 24, 30, 5, 11 ],
            "thursday": [ 23, 29, 4, 9 ],
            "saturday": [ 22, 28, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=534324451/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juanamolina.bandcamp.com/album/son',
          a_string: 'Son by Juana Molina',
          rule: {
            "monday": [ 22, 28, 3, 9 ],
            "tuesday": [ 19, 27, 2, 8 ],
            "wednesday": [ 20, 26, 1, 7 ],
            "thursday": [ 24, 30, 5, 11 ],
            "saturday": [ 23, 29, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3007114881/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juanamolina.bandcamp.com/album/tres-cosas',
          a_string: 'Tres Cosas by Juana Molina',
          rule: {
            "monday": [ 24, 30, 5, 10 ],
            "tuesday": [ 23, 29, 4, 10 ],
            "wednesday": [ 20, 28, 3, 9 ],
            "thursday": [ 21, 27, 2, 8 ],
            "saturday": [ 25, 31, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2454936573/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/cogumelo-panda',
          a_string: '&quot;cogumelo panda&quot; by COGUMELO PANDA',
          rule: {
            "monday": [ 25, 31, 6, 12 ],
            "tuesday": [ 24, 30, 5, 10 ],
            "wednesday": [ 23, 29, 4, 10 ],
            "thursday": [ 20, 28, 3, 9 ],
            "saturday": [ 21, 27, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=595881051/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/metal-metal',
          a_string: '&quot;metal metal&quot; by METÁ METÁ',
          rule: {
            "monday": [ 21, 27, 2, 8 ],
            "tuesday": [ 25, 31, 6, 12 ],
            "wednesday": [ 24, 30, 5, 10 ],
            "thursday": [ 23, 29, 4, 10 ],
            "saturday": [ 20, 28, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3609443598/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://responsepirituba.bandcamp.com/album/response-pirituba',
          a_string: 'response pirituba by DESMONTA',
          rule: {
            "monday": [ 20, 28, 3, 9 ],
            "tuesday": [ 21, 27, 2, 8 ],
            "wednesday": [ 25, 31, 6, 12 ],
            "thursday": [ 24, 30, 5, 10 ],
            "saturday": [ 23, 29, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2933140707/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://noproblematapes.bandcamp.com/album/crystalline-city',
          a_string: 'Crystalline City by Vagrant',
          rule: {
            "monday": [ 23, 29, 4, 10 ],
            "tuesday": [ 20, 28, 3, 9 ],
            "wednesday": [ 21, 27, 2, 8 ],
            "thursday": [ 25, 31, 6, 12 ],
            "saturday": [ 24, 30, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1406714306/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://infinitoaudio.bandcamp.com/album/black-ring-tunes',
          a_string: 'Black Ring Tunes by Alejandro Palacios',
          rule: {
            "monday": [ 24, 30, 5, 10 ],
            "tuesday": [ 23, 29, 4, 10 ],
            "wednesday": [ 20, 28, 3, 9 ],
            "thursday": [ 21, 27, 2, 8 ],
            "saturday": [ 25, 31, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4241321842/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lunartapes.bandcamp.com/album/lunar-tapes-compilado-1',
          a_string: 'Lunar Tapes Compilado 1 by Various Artists',
          rule: {
            "monday": [ 25, 31, 6, 12 ],
            "tuesday": [ 24, 30, 5, 10 ],
            "wednesday": [ 23, 29, 4, 10 ],
            "thursday": [ 20, 28, 3, 9 ],
            "saturday": [ 21, 27, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2663500550/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://artesyoficios.bandcamp.com/album/leidan-ep',
          a_string: 'Leidan EP by Leidan',
          rule: {
            "monday": [ 22, 28, 3, 9 ],
            "tuesday": [ 26, 1, 7, 13 ],
            "wednesday": [ 25, 31, 6, 11 ],
            "thursday": [ 24, 30, 5, 11 ],
            "saturday": [ 21, 29, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2309034914/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xqrsns.bandcamp.com/album/lo-fi-beats-un-collage-impresionista',
          a_string: 'Lo-Fi Beats: Un Collage Impresionista by Flakodiablo',
          rule: {
            "monday": [ 21, 29, 4, 10 ],
            "tuesday": [ 22, 28, 3, 9 ],
            "wednesday": [ 26, 1, 7, 13 ],
            "thursday": [ 25, 31, 6, 11 ],
            "saturday": [ 24, 30, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3100280079/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://panalrecords.bandcamp.com/album/kamila-govorcin-vibraciones-ep-pnl03',
          a_string: 'Kamila Govorcin - Vibraciones EP #PNL03 by Kamila Govorcin',
          rule: {
            "monday": [ 24, 30, 5, 11 ],
            "tuesday": [ 21, 29, 4, 10 ],
            "wednesday": [ 22, 28, 3, 9 ],
            "thursday": [ 26, 1, 7, 13 ],
            "saturday": [ 25, 31, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1595616171/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://uroborosrecords.bandcamp.com/album/oscillation-frequency',
          a_string: 'Oscillation Frequency by Uroboros Records',
          rule: {
            "monday": [ 25, 31, 6, 11 ],
            "tuesday": [ 24, 30, 5, 11 ],
            "wednesday": [ 21, 29, 4, 10 ],
            "thursday": [ 22, 28, 3, 9 ],
            "saturday": [ 26, 1, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3689999342/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theblogthatcelebratesitself.bandcamp.com/album/u-f-o-stories-a-tribute-to-the-flaming-lips',
          a_string: 'U.F.O. Stories, A Tribute To The Flaming Lips by TBTCI',
          rule: {
            "monday": [ 26, 1, 7, 13 ],
            "tuesday": [ 25, 31, 6, 11 ],
            "wednesday": [ 24, 30, 5, 11 ],
            "thursday": [ 21, 29, 4, 10 ],
            "saturday": [ 22, 28, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=36313533/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theblogthatcelebratesitself.bandcamp.com/album/a-tribute-to-cocteau-twins',
          a_string: 'A Tribute To Cocteau Twins by The Blog That Celebrates Itself Records',
          rule: {
            "monday": [ 22, 28, 3, 9 ],
            "tuesday": [ 26, 1, 7, 13 ],
            "wednesday": [ 25, 31, 6, 11 ],
            "thursday": [ 24, 30, 5, 11 ],
            "saturday": [ 21, 29, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3341103596/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/o-retrato-do-artista-quando-pede',
          a_string: '&quot;o retrato do artista quando pede&quot; by DUO MOVIOLA',
          rule: {
            "monday": [ 21, 29, 4, 10 ],
            "tuesday": [ 22, 28, 3, 9 ],
            "wednesday": [ 26, 1, 7, 13 ],
            "thursday": [ 25, 31, 6, 11 ],
            "saturday": [ 24, 30, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1509591694/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/pastiche-nag',
          a_string: '&quot;pastiche nagô&quot; by KIKO DINUCCI e BANDO AFROMACARRÔNICO',
          rule: {
            "monday": [ 25, 31, 6, 12 ],
            "tuesday": [ 22, 30, 5, 11 ],
            "wednesday": [ 23, 29, 4, 10 ],
            "thursday": [ 27, 2, 8, 14 ],
            "saturday": [ 26, 1, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2059871308/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bruno-fleming.bandcamp.com/album/bruno-fleming-cama-mole',
          a_string: 'bruno fleming &quot;cama mole&quot; by DESMONTA',
          rule: {
            "monday": [ 26, 1, 7, 12 ],
            "tuesday": [ 25, 31, 6, 12 ],
            "wednesday": [ 22, 30, 5, 11 ],
            "thursday": [ 23, 29, 4, 10 ],
            "saturday": [ 27, 2, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=312535481/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomze.bandcamp.com/album/postmodern-platos',
          a_string: 'Postmodern Platos by Tom Ze',
          rule: {
            "monday": [ 27, 2, 8, 14 ],
            "tuesday": [ 26, 1, 7, 12 ],
            "wednesday": [ 25, 31, 6, 12 ],
            "thursday": [ 22, 30, 5, 11 ],
            "saturday": [ 23, 29, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=420687349/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomze.bandcamp.com/album/estudando-a-bossa-nordeste-plaza',
          a_string: 'Estudando a Bossa (Nordeste Plaza) by Tom Ze',
          rule: {
            "monday": [ 23, 29, 4, 10 ],
            "tuesday": [ 27, 2, 8, 14 ],
            "wednesday": [ 26, 1, 7, 12 ],
            "thursday": [ 25, 31, 6, 12 ],
            "saturday": [ 22, 30, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4249545143/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomze.bandcamp.com/album/estudando-o-pagode',
          a_string: 'Estudando o Pagode by Tom Ze',
          rule: {
            "monday": [ 22, 30, 5, 11 ],
            "tuesday": [ 23, 29, 4, 10 ],
            "wednesday": [ 27, 2, 8, 14 ],
            "thursday": [ 26, 1, 7, 12 ],
            "saturday": [ 25, 31, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3890871436/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sonido-gallo-negro.bandcamp.com/album/mambo-c-smico',
          a_string: 'Mambo Cósmico by Sonido Gallo Negro',
          rule: {
            "monday": [ 25, 31, 6, 12 ],
            "tuesday": [ 22, 30, 5, 11 ],
            "wednesday": [ 23, 29, 4, 10 ],
            "thursday": [ 27, 2, 8, 14 ],
            "saturday": [ 26, 1, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3129067531/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sonido-gallo-negro.bandcamp.com/album/sendero-mistico',
          a_string: 'Sendero Mistico by Sonido Gallo Negro',
          rule: {
            "monday": [ 26, 1, 7, 12 ],
            "tuesday": [ 25, 31, 6, 12 ],
            "wednesday": [ 22, 30, 5, 11 ],
            "thursday": [ 23, 29, 4, 10 ],
            "saturday": [ 27, 2, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1413287566/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomze.bandcamp.com/album/brazil-classics-5-the-return-of-tom-z-the-hips-of-tradition',
          a_string: 'Brazil Classics 5: The Return of Tom Zé: The Hips of Tradition by Tom Ze',
          rule: {
            "monday": [ 28, 3, 9, 15 ],
            "tuesday": [ 27, 2, 8, 13 ],
            "wednesday": [ 26, 1, 7, 13 ],
            "thursday": [ 23, 31, 6, 12 ],
            "saturday": [ 24, 30, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=881052363/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firefriend.bandcamp.com/album/sulfur',
          a_string: 'Sulfur by Firefriend',
          rule: {
            "monday": [ 24, 30, 5, 11 ],
            "tuesday": [ 28, 3, 9, 15 ],
            "wednesday": [ 27, 2, 8, 13 ],
            "thursday": [ 26, 1, 7, 13 ],
            "saturday": [ 23, 31, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1408749183/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://windows96.bandcamp.com/album/nostalgi-gaius',
          a_string: 'Nostalgi Gaius by Gudang',
          rule: {
            "monday": [ 23, 31, 6, 12 ],
            "tuesday": [ 24, 30, 5, 11 ],
            "wednesday": [ 28, 3, 9, 15 ],
            "thursday": [ 27, 2, 8, 13 ],
            "saturday": [ 26, 1, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3651987928/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nomadeorquestra.bandcamp.com/album/entremundos',
          a_string: 'EntreMundos by Nomade Orquestra',
          rule: {
            "monday": [ 26, 1, 7, 13 ],
            "tuesday": [ 23, 31, 6, 12 ],
            "wednesday": [ 24, 30, 5, 11 ],
            "thursday": [ 28, 3, 9, 15 ],
            "saturday": [ 27, 2, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1586188723/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kafundrecords.bandcamp.com/album/kafund-vol-6-afrobeat-brazil',
          a_string: 'Kafundó Vol. 6;  Afrobeat Brazil by Kafundó Records',
          rule: {
            "monday": [ 27, 2, 8, 13 ],
            "tuesday": [ 26, 1, 7, 13 ],
            "wednesday": [ 23, 31, 6, 12 ],
            "thursday": [ 24, 30, 5, 11 ],
            "saturday": [ 28, 3, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1632714789/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kafundrecords.bandcamp.com/album/maga-bo-apresenta-samba-de-coco-ra-zes-de-arcoverde',
          a_string: 'Maga Bo Apresenta Samba de Coco Raízes de Arcoverde by Samba de Coco Raízes de Arcoverde',
          rule: {
            "monday": [ 28, 3, 9, 15 ],
            "tuesday": [ 27, 2, 8, 13 ],
            "wednesday": [ 26, 1, 7, 13 ],
            "thursday": [ 23, 31, 6, 12 ],
            "saturday": [ 24, 30, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2057778744/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kafundrecords.bandcamp.com/album/kafund-vol-5-afro-brazilian-roots-and-wires',
          a_string: 'Kafundó Vol. 5;  Afro-Brazilian Roots and Wires by Kafundó Records',
          rule: {
            "monday": [ 24, 30, 5, 11 ],
            "tuesday": [ 28, 3, 9, 15 ],
            "wednesday": [ 27, 2, 8, 13 ],
            "thursday": [ 26, 1, 7, 13 ],
            "saturday": [ 23, 31, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1353651176/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kafundrecords.bandcamp.com/album/kafund-vol-4-carimb-bai-o-and-beyond',
          a_string: 'Kafundó Vol. 4;  Carimbó, Baião and Beyond by Kafundó Records',
          rule: {
            "monday": [ 24, 1, 7, 13 ],
            "tuesday": [ 25, 31, 6, 12 ],
            "wednesday": [ 29, 4, 10, 16 ],
            "thursday": [ 28, 3, 9, 14 ],
            "saturday": [ 27, 2, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3645994535/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kafundrecords.bandcamp.com/album/kafund-vol-3-electronic-roots-from-n-e-brazil',
          a_string: 'Kafundó Vol. 3;  Electronic Roots from N/E Brazil by Various Artists',
          rule: {
            "monday":  [ 27, 2, 8, 14 ],
            "tuesday": [ 24, 1, 7, 13 ],
            "wednesday": [ 25, 31, 6, 12 ],
            "thursday": [ 29, 4, 10, 16 ],
            "saturday": [ 28, 3, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1868713184/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kafundrecords.bandcamp.com/album/kafund-vol-2-roots-and-bass-music-from-brazil',
          a_string: 'Kafundó Vol. 2;  Roots and Bass Music from Brazil by Various Artists',
          rule: {
            "monday": [ 28, 3, 9, 14 ],
            "tuesday":  [ 27, 2, 8, 14 ],
            "wednesday": [ 24, 1, 7, 13 ],
            "thursday": [ 25, 31, 6, 12 ],
            "saturday": [ 29, 4, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3852214307/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kafundrecords.bandcamp.com/album/kafund-vol-1-digital-roots-music-from-brazil',
          a_string: 'Kafundó Vol. 1;  Digital Roots Music from Brazil by Various Artists',
          rule: {
            "monday": [ 29, 4, 10, 16 ],
            "tuesday": [ 28, 3, 9, 14 ],
            "wednesday": [ 27, 2, 8, 14 ],
            "thursday": [ 24, 1, 7, 13 ],
            "saturday": [ 25, 31, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1980957318/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oituyo.bandcamp.com/album/pra-doer',
          a_string: 'Pra Doer by Tuyo',
          rule: {
            "monday": [ 25, 31, 6, 12 ],
            "tuesday": [ 29, 4, 10, 16 ],
            "wednesday": [ 28, 3, 9, 14 ],
            "thursday": [ 27, 2, 8, 14 ],
            "saturday": [ 24, 1, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Brazil & Pan-South American',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2213952639/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arcazas.bandcamp.com/album/felipe-arcazas-vintage-cucumber-split',
          a_string: 'Felipe Arcazas &amp; Vintage Cucumber Split by Felipe Arcazas &amp; Vintage Cucumber',
          rule: {
            "monday": [ 24, 1, 7, 13 ],
            "tuesday": [ 25, 31, 6, 12 ],
            "wednesday": [ 29, 4, 10, 16 ],
            "thursday": [ 28, 3, 9, 14 ],
            "saturday": [ 27, 2, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('december_musics_id_seq', (SELECT MAX(id) FROM december_musics));");
    });
};
