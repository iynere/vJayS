# vJayS

vJayS is a web performance app for video artists and DJs, with live video effects and audience interactivity

![screenshot](https://68.media.tumblr.com/f9724048ae3503836df83a0bac82a1be/tumblr_onn8otjARF1w86khxo1_1280.png)

## Works

Log in with a Google account. Import one of your YouTube playlists (limited to first 50 playlist items by the YouTube API—tracks are evenly distributed between your left and right queue). Add videos via YouTube search. Rearrange playback order via drag-and-drop within/between your queues. Remove a video from your queue or play it immediately using buttons on each queue item. Adjust huge, inversion, and saturation for each individual video. Ajust audio/video balance between videos using the balance sliders. Skip tracks and play/pause both tracks at once. View all tracks played so far, clear your queue, submit screenshots, view all sets, etc., via the navbar buttons. Output button takes you to the performance view, which integrates both videos as well as all effects.

## Needs work

Syncing between the DJ and performance view is not perfect. Could be nice to integrate a tagging system for sets, as well as set descriptions, à la Mixcloud/SoundCloud, and eventually a User view with some social features (following people to see when they add new sets, etc.). Build out audience controls so they can do more. Integrate livestreaming via YouTube or Facebook. Need to introduce Rooms features for all the Socket.io functionality—currently any user's WebSocket signals will trigger changes for any other user (fun and strange but not ideal).

## Inspiration

There have been a bunch of great YouTube crossfaders over the years, but most of them haven't kept up with changes to YouTube's API & none of them have incorporated crossfading video in addition to audio. To name a few:

- http://turntubelist.com
- http://twotu.be
- http://twoyoutubevideosandamotherfuckingcrossfader.com
- http://videocrossfader.com
- http://yourtubemix.com
- http://youtubedoubler.com

---

*built by [Anna Pamela Calinawan](https://github.com/annapamma), [Ari Israel](https://github.com/ariisrael), [Rose Kaplan-Bomberg](https://github.com/isar0se), and [Ariane Joy Nova](https://github.com/arinova) as a graduation project for the [Grace Hopper Program](http://gracehopper.com) at [Fullstack Academy](http://fullstackacademy.com)*
