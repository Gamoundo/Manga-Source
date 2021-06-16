import React from 'react';

class Manga extends React.Component {
    state={
        mangas: [
            {
                name: "Rurouni Kenshin",
                genres: ["action", "historical"],
                summary: "A story about a man trying to move on from his past, but like his shadow, he can go nowhere without it."
            }
        ]

    }

    
    displayMangas = (array) => {
      const  displayGenres =(genres) => {
          console.log(genres)
            return (genres.map((genre) => {
               return(
                <div>
                    <p>{genre}</p>
                </div>
               ) 
            }
            ))
        }
        return (array.map((element) => {
            return(
                <div className="project">
                    <h3> {element.name}</h3>
                    {displayGenres(element.genres)}
                    <p> {element.summary}</p>
                    
                </div>
            )
        }
        )
    
        )
    }
    render() {
        return (
            <div>
                {this.displayMangas(this.state.mangas)}
            </div>

        )
    }
}

export default Manga;