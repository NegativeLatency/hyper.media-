import '../css/player.scss';
const sources = [
  {
    src: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
    type: 'application/x-mpegURL'
  }, {
    src: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd', 
    type: 'application/dash+xml'
  }, {
    src: 'rtmp://live.prod.im:8986/live/anpu',
    type: 'rtmp/flv'
  },
  "https://vjs.zencdn.net/v/oceans.mp4" // this is a mp4 video just for test
]
let options = {
  liveui: true,
  playbackRates: [1, 1.5, 2],
  techOrder: ['html5', 'flash'],
};

window.onload = () => {
  let player = videojs('my_video_1', options, function onPlayerReady() {
    videojs.log('Your player is ready!');
  
    // In this context, `this` is the player that was created by Video.js.
    // this.play();
    // How about an event listener?
    this.on('ended', function() {
      videojs.log('Awww...over so soon?!');
    });
  });

  const {MDCSelect} = mdc.select

  const select = new MDCSelect(document.querySelector('.mdc-select'));

  select.listen('MDCSelect:change', () => {
    //  console.log(select.value)
    //  console.log(select)
    // console.log(select.foundation_.selectedIndex_)
    player.pause();
    player.src(sources[select.foundation_.selectedIndex_]);
    player.play();
  });
}




// window.onload = () => {
//     const dp = new DPlayer({
//         container: document.getElementById('player'),
//         live: true,
//         video: {
//             quality: [
//                 {
//                     name: 'HLS',
//                     url: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
//                     type: 'hls',
//                 },
//                 {
//                     name: 'dash',
//                     url: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
//                     type: 'dash',
//                 },
//                 {
//                     name: 'rtmp',
//                     url: 'demo.mp4',
//                     type: 'normal',
//                 },
//                 {
//                     name: 'rtmp-h2',
//                     url: 'demo.mp4',
//                     type: 'normal',
//                 },
//                 {
//                     name: 'rtmp-h3',
//                     url: 'demo.mp4',
//                     type: 'normal',
//                 },
                
//             ],
//             defaultQuality: 0
//         },
//     });


//     const {MDCSelect} = mdc.select

//     const select = new MDCSelect(document.querySelector('.mdc-select'));

//     select.listen('MDCSelect:change', () => {
//     //    console.log(select.value)
//     //    console.log(select)
//     //    console.log(select.foundation_.selectedIndex_)
//        //dp.switchVideo()
//        dp.switchQuality(select.foundation_.selectedIndex_)
//     });
// }