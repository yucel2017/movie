import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../theme';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/Loading';
import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/MovieList';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {

  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const [trending, setTrending] = useState(
    [
      {
        "adult": false,
        "backdrop_path": "/dZbLqRjjiiNCpTYzhzL2NMvz4J0.jpg",
        "id": 951491,
        "title": "Saw X",
        "original_language": "en",
        "original_title": "Saw X",
        "overview": "Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.",
        "poster_path": "/b16RAVwj2QN6RAs752UJNzQ9Of0.jpg",
        "media_type": "movie",
        "genre_ids": [
          27,
          53
        ],
        "popularity": 1049.412,
        "release_date": "2023-09-26",
        "video": false,
        "vote_average": 7.276,
        "vote_count": 248
      },
      {
        "adult": false,
        "backdrop_path": "/8G50Gbincsi1WYJXTyqsFuXNyK.jpg",
        "id": 987917,
        "title": "Old Dads",
        "original_language": "en",
        "original_title": "Old Dads",
        "overview": "A cranky middle-aged dad and his two best friends find themselves out of step in a changing world of millennial CEOs and powerful preschool principals.",
        "poster_path": "/ax1rpxHCcXVwwfn0zSte1udoJwV.jpg",
        "media_type": "movie",
        "genre_ids": [
          35
        ],
        "popularity": 74.988,
        "release_date": "2023-10-20",
        "video": false,
        "vote_average": 6.769,
        "vote_count": 26
      },
      {
        "adult": false,
        "backdrop_path": "/ns45HPpeYlu7iCH34wysV5Xc8CQ.jpg",
        "id": 912916,
        "title": "The Other Zoey",
        "original_language": "en",
        "original_title": "The Other Zoey",
        "overview": "Zoey Miller, a super smart computer major uninterested in romantic love, has her life turned upside down when Zack, the school’s soccer star, gets amnesia and mistakes Zoey for his girlfriend.",
        "poster_path": "/rh9fwqA98ufdx9vP7V6lLhfpfk1.jpg",
        "media_type": "movie",
        "genre_ids": [
          10749,
          18,
          35
        ],
        "popularity": 105.207,
        "release_date": "2023-10-19",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 29
      },
      {
        "adult": false,
        "backdrop_path": "/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
        "id": 466420,
        "title": "Killers of the Flower Moon",
        "original_language": "en",
        "original_title": "Killers of the Flower Moon",
        "overview": "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
        "poster_path": "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
        "media_type": "movie",
        "genre_ids": [
          80,
          18,
          53
        ],
        "popularity": 662.235,
        "release_date": "2023-10-18",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 203
      },
      {
        "adult": false,
        "backdrop_path": "/cHNqobjzfLj88lpIYqkZpecwQEC.jpg",
        "id": 926393,
        "title": "The Equalizer 3",
        "original_language": "en",
        "original_title": "The Equalizer 3",
        "overview": "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
        "poster_path": "/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          53,
          80
        ],
        "popularity": 1965.688,
        "release_date": "2023-08-30",
        "video": false,
        "vote_average": 7.25,
        "vote_count": 1001
      },
      {
        "adult": false,
        "backdrop_path": "/wl4NWiZwpzZH67HiDgpDImLyds9.jpg",
        "id": 299054,
        "title": "Expend4bles",
        "original_language": "en",
        "original_title": "Expend4bles",
        "overview": "Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world’s last line of defense and the team that gets called when all other options are off the table. But new team members with new styles and tactics are going to give “new blood” a whole new meaning.",
        "poster_path": "/mOX5O6JjCUWtlYp5D8wajuQRVgy.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          12,
          53
        ],
        "popularity": 4086.981,
        "release_date": "2023-09-15",
        "video": false,
        "vote_average": 6.38,
        "vote_count": 353
      },
      {
        "adult": false,
        "backdrop_path": "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
        "id": 575264,
        "title": "Mission: Impossible - Dead Reckoning Part One",
        "original_language": "en",
        "original_title": "Mission: Impossible - Dead Reckoning Part One",
        "overview": "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
        "poster_path": "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          53
        ],
        "popularity": 2568.301,
        "release_date": "2023-07-08",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 1777
      },
      {
        "adult": false,
        "backdrop_path": "/t6lNETZp4pYdrwdQyb97t1U1jAC.jpg",
        "id": 850880,
        "title": "Sayen: Desert Road",
        "original_language": "es",
        "original_title": "Sayen: La ruta seca",
        "overview": "Sayen follows a lead to the picturesque desolation of the Atacama Desert. There, she reluctantly teams up with a young Atacameño girl, Quimal, looking to clear her father’s name and save her town from becoming an arid wasteland due to Acteon’s exploitative water usage.",
        "poster_path": "/2mQd4twCtANzQGlPNJ7aKued7a4.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          53
        ],
        "popularity": 64.268,
        "release_date": "2023-10-19",
        "video": false,
        "vote_average": 5.3,
        "vote_count": 3
      },
      {
        "adult": false,
        "backdrop_path": "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
        "id": 346698,
        "title": "Barbie",
        "original_language": "en",
        "original_title": "Barbie",
        "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
        "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
        "media_type": "movie",
        "genre_ids": [
          35,
          12,
          14
        ],
        "popularity": 685.62,
        "release_date": "2023-07-19",
        "video": false,
        "vote_average": 7.235,
        "vote_count": 5527
      },
      {
        "adult": false,
        "backdrop_path": "/pfAZP7JvTTxqgq7n6A1OYgkAdEW.jpg",
        "id": 894205,
        "title": "Werewolf by Night",
        "original_language": "en",
        "original_title": "Werewolf by Night",
        "overview": "On a dark and somber night, a secret cabal of monster hunters emerge from the shadows and gather at the foreboding Bloodstone Temple following the death of their leader. In a strange and macabre memorial to the leader’s life, the attendees are thrust into a mysterious and deadly competition for a powerful relic—a hunt that will ultimately bring them face to face with a dangerous monster.",
        "poster_path": "/jmv7EbqBuEk4V1U7OoSBaxkwawO.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          14,
          27
        ],
        "popularity": 51.148,
        "release_date": "2022-09-25",
        "video": false,
        "vote_average": 7.019,
        "vote_count": 1054
      },
      {
        "adult": false,
        "backdrop_path": "/7x7qw0zG3x4ffy3HEAvA7aklUUD.jpg",
        "id": 1191885,
        "title": "Flashback",
        "original_language": "en",
        "original_title": "Flashback",
        "overview": "A yoga instructor, after a violent attack at her home, sees flashbacks of her life and begins a frantic race through her past to try to save her boyfriend.",
        "poster_path": "/xjkKGWdR5z4jPbj0LJ5omi2m9CX.jpg",
        "media_type": "movie",
        "genre_ids": [
          14,
          10749
        ],
        "popularity": 10.543,
        "release_date": "2023-10-20",
        "video": false,
        "vote_average": 4.5,
        "vote_count": 5
      },
      {
        "adult": false,
        "backdrop_path": "/DO8hv826sNyll2pW7lW6aShREE.jpg",
        "id": 1171989,
        "title": "The Devil on Trial",
        "original_language": "en",
        "original_title": "The Devil on Trial",
        "overview": "Explore the first – and only – time “demonic possession” has officially been used as a defense in a U.S. murder trial. Including firsthand accounts of alleged devil possession and a shocking murder, this extraordinary story forces reflection on our fear of the unknown.",
        "poster_path": "/qqPIhVKPHePyGqQxbo4gpznsJsA.jpg",
        "media_type": "movie",
        "genre_ids": [
          99
        ],
        "popularity": 136.9,
        "release_date": "2023-10-17",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 20
      },
      {
        "adult": false,
        "backdrop_path": "/aOI3o06xhCgLmA6Bcpm4KRDeMXF.jpg",
        "id": 763165,
        "title": "The Burial",
        "original_language": "en",
        "original_title": "The Burial",
        "overview": "When a handshake deal goes sour, funeral home owner Jeremiah O'Keefe enlists charismatic, smooth-talking attorney Willie E. Gary to save his family business. Tempers flare and laughter ensues as the unlikely pair bond while exposing corporate corruption and racial injustice.",
        "poster_path": "/9ssNSfNKpzZwhbFsnW3wa82m2sG.jpg",
        "media_type": "movie",
        "genre_ids": [
          35,
          18
        ],
        "popularity": 155.888,
        "release_date": "2023-10-06",
        "video": false,
        "vote_average": 7.402,
        "vote_count": 122
      },
      {
        "adult": false,
        "backdrop_path": "/49RghzJWD9iiLnYWy29pJI9aavw.jpg",
        "id": 777847,
        "title": "If You Were the Last",
        "original_language": "en",
        "original_title": "If You Were the Last",
        "overview": "Two astronauts who think they’ve been lost in space forever fall in love, becoming content with their isolated lives, only to suddenly have to return to Earth.",
        "poster_path": "/2lH4CUWR6KseRMPXLzeOqiehbLr.jpg",
        "media_type": "movie",
        "genre_ids": [
          878,
          10749,
          35
        ],
        "popularity": 6.731,
        "release_date": "2023-03-11",
        "video": false,
        "vote_average": 7.75,
        "vote_count": 4
      },
      {
        "adult": false,
        "backdrop_path": "/ivJb1R88Ejf9iswZAYP3kQBf9ba.jpg",
        "id": 1139087,
        "title": "Once Upon a Studio",
        "original_language": "en",
        "original_title": "Once Upon a Studio",
        "overview": "Created for Disney's 100th anniversary, the short sees Mickey Mouse corralling a gallery of legendary Disney characters for a group photo.",
        "poster_path": "/hr8ZtwdbtjBquxlTCrczr685K5T.jpg",
        "media_type": "movie",
        "genre_ids": [
          10751,
          16,
          14,
          35
        ],
        "popularity": 224.448,
        "release_date": "2023-09-24",
        "video": false,
        "vote_average": 9.032,
        "vote_count": 110
      },
      {
        "adult": false,
        "backdrop_path": "/rG7VjJsHcmLF7XhEQlwaceo5wxN.jpg",
        "id": 1181538,
        "title": "Crypto Boy",
        "original_language": "nl",
        "original_title": "Crypto Boy",
        "overview": "Following a dispute with his father, a young man falls prey to cryptocurrency's allure and an entrepreneur's audacious promises of financial freedom.",
        "poster_path": "/ejL0MUET2LJRdEgL6JO0erxmDcZ.jpg",
        "media_type": "movie",
        "genre_ids": [
          18
        ],
        "popularity": 70.304,
        "release_date": "2023-10-19",
        "video": false,
        "vote_average": 7,
        "vote_count": 2
      },
      {
        "adult": false,
        "backdrop_path": "/53z2fXEKfnNg2uSOPss2unPBGX1.jpg",
        "id": 968051,
        "title": "The Nun II",
        "original_language": "en",
        "original_title": "The Nun II",
        "overview": "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
        "poster_path": "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
        "media_type": "movie",
        "genre_ids": [
          27,
          9648,
          53
        ],
        "popularity": 1696.62,
        "release_date": "2023-09-06",
        "video": false,
        "vote_average": 7.002,
        "vote_count": 1075
      },
      {
        "adult": false,
        "backdrop_path": "/mzlZAMjE2yk2sW3f9HTeBM3B3jw.jpg",
        "id": 616747,
        "title": "Haunted Mansion",
        "original_language": "en",
        "original_title": "Haunted Mansion",
        "overview": "A woman and her son enlist a motley crew of so-called spiritual experts to help rid their home of supernatural squatters.",
        "poster_path": "/8Im6DknDVxRiGXc5t8rVOJyzuNx.jpg",
        "media_type": "movie",
        "genre_ids": [
          14,
          35,
          27,
          10751
        ],
        "popularity": 462.649,
        "release_date": "2023-07-26",
        "video": false,
        "vote_average": 6.691,
        "vote_count": 517
      },
      {
        "adult": false,
        "backdrop_path": "/ec1yA7FoHltRHxxFS7cBvOarbvc.jpg",
        "id": 1160003,
        "title": "Night of the Hunted",
        "original_language": "en",
        "original_title": "Night of the Hunted",
        "overview": "When an unsuspecting woman stops at a remote gas station in the dead of night, she's made the plaything of a sociopath sniper with a secret vendetta. To survive, she must not only dodge his bullets and fight for her life, but also figure out who wants her dead and why.",
        "poster_path": "/2Qp56VFCXiVJNNUstPc0BOqLfko.jpg",
        "media_type": "movie",
        "genre_ids": [
          9648,
          27,
          53
        ],
        "popularity": 19.111,
        "release_date": "2023-10-12",
        "video": false,
        "vote_average": 6.85,
        "vote_count": 10
      }
    ],
  );

  const [upComing, setUpComing] = useState(
    [
      {
        "adult": false,
        "backdrop_path": "/dZbLqRjjiiNCpTYzhzL2NMvz4J0.jpg",
        "genre_ids": [
          27,
          53
        ],
        "id": 951491,
        "original_language": "en",
        "original_title": "Saw X",
        "overview": "Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.",
        "popularity": 2056.848,
        "poster_path": "/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
        "release_date": "2023-09-26",
        "title": "Saw X",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 322
      },
      {
        "adult": false,
        "backdrop_path": "/pA3vdhadJPxF5GA1uo8OPTiNQDT.jpg",
        "genre_ids": [
          28,
          18
        ],
        "id": 678512,
        "original_language": "en",
        "original_title": "Sound of Freedom",
        "overview": "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
        "popularity": 835.923,
        "poster_path": "/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg",
        "release_date": "2023-07-03",
        "title": "Sound of Freedom",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 982
      },
      {
        "adult": false,
        "backdrop_path": "/gIchV01EUHd1zNBeql92L63kmHU.jpg",
        "genre_ids": [
          16,
          10751,
          28,
          878
        ],
        "id": 893723,
        "original_language": "en",
        "original_title": "PAW Patrol: The Mighty Movie",
        "overview": "A magical meteor crash-lands in Adventure City, gives the PAW Patrol pups superpowers, and transforms them into The Mighty Pups. When the Patrol's archrival Humdinger breaks out of jail and teams up with mad scientist Victoria Vance to steal the powers for themselves, the Mighty Pups must save Adventure City and stop the supervillains before it's too late.",
        "popularity": 799.71,
        "poster_path": "/aTvePCU7exLepwg5hWySjwxojQK.jpg",
        "release_date": "2023-09-21",
        "title": "PAW Patrol: The Mighty Movie",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 61
      },
      {
        "adult": false,
        "backdrop_path": "/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg",
        "genre_ids": [
          28,
          53,
          80
        ],
        "id": 762430,
        "original_language": "en",
        "original_title": "Retribution",
        "overview": "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks. With his kids trapped in the back seat and a bomb that will explode if they get out of the car, a normal commute becomes a twisted game of life or death as Matt follows the stranger's increasingly dangerous instructions in a race against time to save his family.",
        "popularity": 918.477,
        "poster_path": "/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg",
        "release_date": "2023-08-23",
        "title": "Retribution",
        "video": false,
        "vote_average": 7,
        "vote_count": 458
      },
      {
        "adult": false,
        "backdrop_path": "/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg",
        "genre_ids": [
          27,
          53
        ],
        "id": 1008042,
        "original_language": "en",
        "original_title": "Talk to Me",
        "overview": "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
        "popularity": 571.405,
        "poster_path": "/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
        "release_date": "2023-07-26",
        "title": "Talk to Me",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 1536
      },
      {
        "adult": false,
        "backdrop_path": "/xHqTnPtpd9Qd7R0fVtoqxZYM67Q.jpg",
        "genre_ids": [
          80,
          53,
          28
        ],
        "id": 958006,
        "original_language": "en",
        "original_title": "The Kill Room",
        "overview": "A hitman, his boss, an art dealer and a money-laundering scheme that accidentally turns the assassin into an overnight avant-garde sensation, one that forces her to play the art world against the underworld.",
        "popularity": 694.837,
        "poster_path": "/qKpdy7N6zX05eisopvvviiTwPxb.jpg",
        "release_date": "2023-09-14",
        "title": "The Kill Room",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 27
      },
      {
        "adult": false,
        "backdrop_path": "/uvsL5Q5Juf8ivqBnlr4nFVUwVoa.jpg",
        "genre_ids": [
          80,
          18,
          53
        ],
        "id": 466420,
        "original_language": "en",
        "original_title": "Killers of the Flower Moon",
        "overview": "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
        "popularity": 672.125,
        "poster_path": "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
        "release_date": "2023-10-18",
        "title": "Killers of the Flower Moon",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 296
      },
      {
        "adult": false,
        "backdrop_path": "/whB2PJfxrDWwwksprliJTjYbcZJ.jpg",
        "genre_ids": [
          27,
          53
        ],
        "id": 507089,
        "original_language": "en",
        "original_title": "Five Nights at Freddy's",
        "overview": "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
        "popularity": 481.852,
        "poster_path": "/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg",
        "release_date": "2023-10-25",
        "title": "Five Nights at Freddy's",
        "video": false,
        "vote_average": 9,
        "vote_count": 11
      },
      {
        "adult": false,
        "backdrop_path": "/oP03EF9eYWqvycFGN5TeEo3nN7l.jpg",
        "genre_ids": [
          27,
          9648
        ],
        "id": 1024773,
        "original_language": "en",
        "original_title": "It Lives Inside",
        "overview": "Desperate to fit in at school, Sam rejects her East Indian culture and family to be like everyone else. However, when a mythological demonic spirit latches onto her former best friend, she must come to terms with her heritage to defeat it.",
        "popularity": 269.68,
        "poster_path": "/73gIfV8gDwkVgUrFDzt4TfZC9Zc.jpg",
        "release_date": "2023-09-06",
        "title": "It Lives Inside",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 45
      },
      {
        "adult": false,
        "backdrop_path": "/nCiqQYXJdaw3SqY6XZFx4r1IZTI.jpg",
        "genre_ids": [
          16,
          12
        ],
        "id": 502345,
        "original_language": "en",
        "original_title": "Scarygirl",
        "overview": "As her world is shrouded in darkness, a young girl must overcome her fears and travel to a mysterious city of light, save her father from a dangerous scientist and prevent the destruction of her planet.",
        "popularity": 385.699,
        "poster_path": "/1tcLXVaXFG9OObnCN3a5KrymrQG.jpg",
        "release_date": "2023-10-05",
        "title": "Scarygirl",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 19
      },
      {
        "adult": false,
        "backdrop_path": "/gB5guf07SD8wVqxrx4Scp4LFBq4.jpg",
        "genre_ids": [
          18
        ],
        "id": 1058694,
        "original_language": "en",
        "original_title": "Radical",
        "overview": "In a Mexican border town plagued by neglect, corruption, and violence, a frustrated teacher tries a radical new method to break through his students’ apathy and unlock their curiosity, their potential… and maybe even their genius.",
        "popularity": 317.638,
        "poster_path": "/zwcmjn3qKhP7kUmpgNT0f61xzU3.jpg",
        "release_date": "2023-10-19",
        "title": "Radical",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
        "genre_ids": [
          10751,
          16,
          14,
          10402,
          35,
          12
        ],
        "id": 354912,
        "original_language": "en",
        "original_title": "Coco",
        "overview": "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
        "popularity": 354.513,
        "poster_path": "/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
        "release_date": "2017-10-27",
        "title": "Coco",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 17872
      },
      {
        "adult": false,
        "backdrop_path": "/1HzL603WOer58xtnrRYdSIL5K04.jpg",
        "genre_ids": [
          35,
          12
        ],
        "id": 912908,
        "original_language": "en",
        "original_title": "Strays",
        "overview": "When Reggie is abandoned on the mean city streets by his lowlife owner, Doug, Reggie is certain that his beloved owner would never leave him on purpose. But once Reggie falls in with Bug, a fast-talking, foul-mouthed stray who loves his freedom and believes that owners are for suckers, Reggie finally realizes he was in a toxic relationship and begins to see Doug for the heartless sleazeball that he is.",
        "popularity": 277.273,
        "poster_path": "/muDaKftykz9Nj1mhRheMdbuNI9Z.jpg",
        "release_date": "2023-08-17",
        "title": "Strays",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 457
      },
      {
        "adult": false,
        "backdrop_path": "/iEFuHjqrE059SmflBva1JzDJutE.jpg",
        "genre_ids": [
          16,
          10751,
          28,
          14,
          10749
        ],
        "id": 496450,
        "original_language": "fr",
        "original_title": "Miraculous - le film",
        "overview": "A life of an ordinary Parisian teenager Marinette goes superhuman when she becomes Ladybug. Bestowed with magical powers of creation, Ladybug must unite with her opposite, Cat Noir, to save Paris as a new villain unleashes chaos unto the city.",
        "popularity": 240.34,
        "poster_path": "/bBON9XO9Ek0DjRwMBnJNCwC96Cd.jpg",
        "release_date": "2023-07-05",
        "title": "Miraculous: Ladybug & Cat Noir, The Movie",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 613
      },
      {
        "adult": false,
        "backdrop_path": "/vT17lPUglrAzjEqMwjPpIDe49ty.jpg",
        "genre_ids": [
          16,
          12,
          10751,
          14
        ],
        "id": 459003,
        "original_language": "uk",
        "original_title": "Мавка: Лісова пісня",
        "overview": "Mavka — a Soul of the Forest and its Warden — faces an impossible choice between love and her duty as guardian to the Heart of the Forest, when she falls in love with a human — the talented young musician Lukas.",
        "popularity": 231.431,
        "poster_path": "/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg",
        "release_date": "2023-03-02",
        "title": "Mavka: The Forest Song",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 421
      },
      {
        "adult": false,
        "backdrop_path": "/pBdQ4iorzRV2G38mdS6rzrmUfMA.jpg",
        "genre_ids": [
          28,
          10752
        ],
        "id": 840326,
        "original_language": "fi",
        "original_title": "Sisu",
        "overview": "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.",
        "popularity": 219.115,
        "poster_path": "/ygO9lowFMXWymATCrhoQXd6gCEh.jpg",
        "release_date": "2023-01-27",
        "title": "Sisu",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 1393
      },
      {
        "adult": false,
        "backdrop_path": "/uRizG2pUwHNjmTLrUvqdi3pWK1n.jpg",
        "genre_ids": [
          18,
          36,
          10752
        ],
        "id": 680133,
        "original_language": "bn",
        "original_title": "মুজিব: একটি জাতির রূপকার",
        "overview": "Biopic on the father of the nation of Bangladesh, Sheikh Mujibur Rahman. The film will showcase his growing up as a child to his standing up against all injustice in his youth to fighting for the independence of his country. How he led a country to it's independence with his inspirational presence and fight for the justice.",
        "popularity": 251.418,
        "poster_path": "/bnIJ5lK66cfnvJ0A1D6FLp4NZzJ.jpg",
        "release_date": "2023-10-27",
        "title": "Mujib: The Making of a Nation",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/8FhKnPpql374qyyHAkZDld93IUw.jpg",
        "genre_ids": [
          28,
          9648,
          53,
          878
        ],
        "id": 536437,
        "original_language": "en",
        "original_title": "Hypnotic",
        "overview": "A detective becomes entangled in a mystery involving his missing daughter and a secret government program while investigating a string of reality-bending crimes.",
        "popularity": 206.351,
        "poster_path": "/3IhGkkalwXguTlceGSl8XUJZOVI.jpg",
        "release_date": "2023-05-11",
        "title": "Hypnotic",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 667
      },
      {
        "adult": false,
        "backdrop_path": "/zZnsfR6BRqtxyLyAhsi2TMukEBx.jpg",
        "genre_ids": [
          16,
          28,
          80,
          9648
        ],
        "id": 1047041,
        "original_language": "ja",
        "original_title": "名探偵コナン 黒鉄の魚影（サブマリン）",
        "overview": "The 26th movie entry in the “Detective Conan” franchise.",
        "popularity": 192.498,
        "poster_path": "/hKefTFkTFK90xEDchURKPp3S3gN.jpg",
        "release_date": "2023-04-14",
        "title": "Detective Conan: Black Iron Submarine",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 43
      },
      {
        "adult": false,
        "backdrop_path": "/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg",
        "genre_ids": [
          53,
          27
        ],
        "id": 635910,
        "original_language": "en",
        "original_title": "The Last Voyage of the Demeter",
        "overview": "The crew of the merchant ship Demeter attempts to survive the ocean voyage from Carpathia to London as they are stalked each night by a merciless presence onboard the ship.",
        "popularity": 154.809,
        "poster_path": "/nrtbv6Cew7qC7k9GsYSf5uSmuKh.jpg",
        "release_date": "2023-08-09",
        "title": "The Last Voyage of the Demeter",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 808
      }
    ],
  )

  const [topRated, setTopRated] = useState(
    [
      {
        "adult": false,
        "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
        "genre_ids": [
          18,
          80
        ],
        "id": 238,
        "original_language": "en",
        "original_title": "The Godfather",
        "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
        "popularity": 116.429,
        "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "release_date": "1972-03-14",
        "title": "The Godfather",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 18805
      },
      {
        "adult": false,
        "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
        "genre_ids": [
          18,
          80
        ],
        "id": 278,
        "original_language": "en",
        "original_title": "The Shawshank Redemption",
        "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
        "popularity": 105.427,
        "poster_path": "/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
        "release_date": "1994-09-23",
        "title": "The Shawshank Redemption",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 24783
      },
      {
        "adult": false,
        "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
        "genre_ids": [
          18,
          80
        ],
        "id": 240,
        "original_language": "en",
        "original_title": "The Godfather Part II",
        "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
        "popularity": 68.6,
        "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
        "release_date": "1974-12-20",
        "title": "The Godfather Part II",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 11367
      },
      {
        "adult": false,
        "backdrop_path": "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
        "genre_ids": [
          18,
          36,
          10752
        ],
        "id": 424,
        "original_language": "en",
        "original_title": "Schindler's List",
        "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
        "popularity": 72.058,
        "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
        "release_date": "1993-12-15",
        "title": "Schindler's List",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 14686
      },
      {
        "adult": false,
        "backdrop_path": "/vI3aUGTuRRdM7J78KIdW98LdxE5.jpg",
        "genre_ids": [
          35,
          18,
          10749
        ],
        "id": 19404,
        "original_language": "hi",
        "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
        "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
        "popularity": 34.449,
        "poster_path": "/ktejodbcdCPXbMMdnpI9BUxW6O8.jpg",
        "release_date": "1995-10-20",
        "title": "Dilwale Dulhania Le Jayenge",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 4266
      },
      {
        "adult": false,
        "backdrop_path": "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
        "genre_ids": [
          18
        ],
        "id": 389,
        "original_language": "en",
        "original_title": "12 Angry Men",
        "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
        "popularity": 44.858,
        "poster_path": "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
        "release_date": "1957-04-10",
        "title": "12 Angry Men",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 7725
      },
      {
        "adult": false,
        "backdrop_path": "/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
        "genre_ids": [
          16,
          10751,
          14
        ],
        "id": 129,
        "original_language": "ja",
        "original_title": "千と千尋の神隠し",
        "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
        "popularity": 90.38,
        "poster_path": "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        "release_date": "2001-07-20",
        "title": "Spirited Away",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 14997
      },
      {
        "adult": false,
        "backdrop_path": "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
        "genre_ids": [
          35,
          53,
          18
        ],
        "id": 496243,
        "original_language": "ko",
        "original_title": "기생충",
        "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        "popularity": 73.582,
        "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        "release_date": "2019-05-30",
        "title": "Parasite",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 16538
      },
      {
        "adult": false,
        "backdrop_path": "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
        "genre_ids": [
          10749,
          16,
          18
        ],
        "id": 372058,
        "original_language": "ja",
        "original_title": "君の名は。",
        "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
        "popularity": 92.212,
        "poster_path": "/q719jXXEzOoYaps6babgKnONONX.jpg",
        "release_date": "2016-08-26",
        "title": "Your Name.",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 10378
      },
      {
        "adult": false,
        "backdrop_path": "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
        "genre_ids": [
          18,
          28,
          80,
          53
        ],
        "id": 155,
        "original_language": "en",
        "original_title": "The Dark Knight",
        "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
        "popularity": 112.333,
        "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "release_date": "2008-07-16",
        "title": "The Dark Knight",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 30776
      },
      {
        "adult": false,
        "backdrop_path": "/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg",
        "genre_ids": [
          14,
          18,
          80
        ],
        "id": 497,
        "original_language": "en",
        "original_title": "The Green Mile",
        "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
        "popularity": 80.648,
        "poster_path": "/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
        "release_date": "1999-12-10",
        "title": "The Green Mile",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 16037
      },
      {
        "adult": false,
        "backdrop_path": "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
        "genre_ids": [
          53,
          80
        ],
        "id": 680,
        "original_language": "en",
        "original_title": "Pulp Fiction",
        "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
        "popularity": 80.319,
        "poster_path": "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "release_date": "1994-09-10",
        "title": "Pulp Fiction",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 26025
      },
      {
        "adult": false,
        "backdrop_path": "/qdIMHd4sEfJSckfVJfKQvisL02a.jpg",
        "genre_ids": [
          35,
          18,
          10749
        ],
        "id": 13,
        "original_language": "en",
        "original_title": "Forrest Gump",
        "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
        "popularity": 84.723,
        "poster_path": "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        "release_date": "1994-06-23",
        "title": "Forrest Gump",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 25542
      },
      {
        "adult": false,
        "backdrop_path": "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
        "genre_ids": [
          12,
          14,
          28
        ],
        "id": 122,
        "original_language": "en",
        "original_title": "The Lord of the Rings: The Return of the King",
        "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
        "popularity": 95.199,
        "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        "release_date": "2003-12-01",
        "title": "The Lord of the Rings: The Return of the King",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 22461
      },
      {
        "adult": false,
        "backdrop_path": "/eoCSp75lxatmIa6aGqfnzwtbttd.jpg",
        "genre_ids": [
          37
        ],
        "id": 429,
        "original_language": "it",
        "original_title": "Il buono, il brutto, il cattivo",
        "overview": "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
        "popularity": 58.333,
        "poster_path": "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
        "release_date": "1966-12-23",
        "title": "The Good, the Bad and the Ugly",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 7815
      },
      {
        "adult": false,
        "backdrop_path": "/sw7mordbZxgITU877yTpZCud90M.jpg",
        "genre_ids": [
          18,
          80
        ],
        "id": 769,
        "original_language": "en",
        "original_title": "GoodFellas",
        "overview": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
        "popularity": 68.037,
        "poster_path": "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
        "release_date": "1990-09-12",
        "title": "GoodFellas",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 11811
      },
      {
        "adult": false,
        "backdrop_path": "/gavyCu1UaTaTNPsVaGXT6pe5u24.jpg",
        "genre_ids": [
          35,
          18
        ],
        "id": 637,
        "original_language": "it",
        "original_title": "La vita è bella",
        "overview": "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
        "popularity": 47.355,
        "poster_path": "/mfnkSeeVOBVheuyn2lo4tfmOPQb.jpg",
        "release_date": "1997-12-20",
        "title": "Life Is Beautiful",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 12286
      },
      {
        "adult": false,
        "backdrop_path": "/gwj4R8Uy1GwejKqfofREKI9Jh7L.jpg",
        "genre_ids": [
          16,
          18,
          10752
        ],
        "id": 12477,
        "original_language": "ja",
        "original_title": "火垂るの墓",
        "overview": "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
        "popularity": 0.6,
        "poster_path": "/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
        "release_date": "1988-04-16",
        "title": "Grave of the Fireflies",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 4901
      },
      {
        "adult": false,
        "backdrop_path": "/zoVeIgKzGJzpdG6Gwnr7iOYfIMU.jpg",
        "genre_ids": [
          18,
          10749
        ],
        "id": 11216,
        "original_language": "it",
        "original_title": "Nuovo Cinema Paradiso",
        "overview": "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
        "popularity": 31.252,
        "poster_path": "/8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg",
        "release_date": "1988-11-17",
        "title": "Cinema Paradiso",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 3989
      },
      {
        "adult": false,
        "backdrop_path": "/qvZ91FwMq6O47VViAr8vZNQz3WI.jpg",
        "genre_ids": [
          28,
          18
        ],
        "id": 346,
        "original_language": "ja",
        "original_title": "七人の侍",
        "overview": "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.",
        "popularity": 35.5,
        "poster_path": "/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg",
        "release_date": "1954-04-26",
        "title": "Seven Samurai",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 3261
      }
    ],
  )

  return (

    <View className="flex-1 bg-white" >
      <SafeAreaView>
        <View className="flex-row justify-between items-center mx-4 " >
          <Text className="text-neutral-800 text-3xl font-bold  " >
            <Text style={styles.text} >Mv</Text>-App
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Search')} >
            <Text>Ara</Text>
          </TouchableOpacity>
        </View>
        {loading ? (
          <Loading />
        ) : (
          <ScrollView>
            <TrendingMovies data={trending} />
            <MovieList data={upComing} title={'upComing'} />
            <MovieList data={topRated} title={'topRated'} />
          </ScrollView>
        )}
      </SafeAreaView>
    </View>

  )
}

