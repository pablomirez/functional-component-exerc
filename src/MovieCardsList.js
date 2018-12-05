/**
 * Created by Pablo Ramirez on 12/5/2018.
 */
import React from 'react';
import MovieCard from './MovieCard';


const MovieCardsList = props => {
    const { profiles, users, movies } = props;
    const usersByMovie = {};

    profiles.forEach(profile => {
        console.log(profile.favoriteMovieID);
        const movieID = profile.favoriteMovieID;

        if(usersByMovie[movieID]){
            usersByMovie[movieID].push(profile.userID);
        } else {
            usersByMovie[movieID] = [profile.userID];
        }
    });


    const movieCards = Object.keys(movies).map(id => (
       <MovieCard key={id} users={users} usersWhoLikedMovie={usersByMovie[id]} movieInfo={movies[id]} />
    ));

    return <ul>{movieCards}</ul>
};

export default MovieCardsList;