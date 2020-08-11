import React, {useState} from "react"

//create object to store artist names and votes
const initialArtists = [
    { name: 'Taylor Swift', votes: 0 },
    { name: 'Eminem', votes: 0 },
    { name: 'Lady Gaga', votes: 0 },
    { name: 'Other', votes: 0 },
]

export default function Polls() {
    // use state hook to create artist and setArtists - initialized at initial artists
    const [artists, setArtists] = useState(initialArtists);

    //to determine vote count by taking artistName and map over artist. If artist name matches increment votes for given artist
    const vote = (artistName) => {
        setArtists(artists.map(artist => {
            if (artist.name === artistName) {
                artist.votes++;
            }

            return artist;
        }));
    }

    //reset votes back to 0
    const reset = () => {
        setArtists(artists.map(artist => {
            artist.votes = 0
            return artist;
        }))
    };

    return (
        <div>
            {artists.map(pollItem => (
                <div key={pollItem.name} style={{ paddingBottom: 20 }}>
                    {pollItem.name} - {pollItem.votes} votes
                    <button onClick={() => vote(pollItem.name)}>Vote for {pollItem.name}</button>
                    </div>
            ))}
            <button onClick={reset}>Reset</button>
        </div>
    )
}