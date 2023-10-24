import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Image } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';


export default function TrendingMovies({
    data = [
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
}) {

    const navigation = useNavigation();

    const { width, height } = useWindowDimensions();

    const handleClick = () => {
        navigation.navigate('Movie')
    }

    return (

        <View>

            <Text>Trending</Text>

            <Carousel

                data={data}
                renderItem={({ item }) => (
                    <MovieCard item={item} handleClick={handleClick} />
                )}
                sliderWidth={width}
                itemWidth={width * 0.62}
            />

        </View>
    )
}

const MovieCard = ({ item, handleClick }) => {
    return (

        <TouchableWithoutFeedback onPress={() => handleClick(item)} >
            <Image
                source={{
                    uri: `https://wwww.themoviedb.org/t/p/w500/${item.poster_path}`,
                }}
                style={{ width: 200, height: 300 }}
            />
        </TouchableWithoutFeedback>

    )

}
