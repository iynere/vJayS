/* code review notes */

const eventForwarder = (listeningEvent, broadcastEvent) => playerSocket.on(listeningEvent, video => playerSocket.broadcast.emit(broadcastEvent, video))

/* add rooms or namespaces;
currently, if multiple dj's are performing, any audience interaction will affect all performances;
or wrap all sockets stuff in a function that takes a variable unique to that performance and returns socket functions using that variable */

/* move youtube playlist fetch to an action-creator / thunk, with loadYoutubePlaylist as a 'receive'-type action */

/* organize route tree as three separate apps—dj, output, audience/live—with conditionals for which gets rendered;
can each have their own redux store */