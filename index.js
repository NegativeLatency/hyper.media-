window.onload = () => {
    const dp = new DPlayer({
        container: document.getElementById('player'),
        live: true,
        video: {
            quality: [
                {
                    name: 'HLS',
                    url: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
                    type: 'hls',
                },
                {
                    name: 'dash',
                    url: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
                    type: 'dash',
                },
                {
                    name: 'rtmp',
                    url: 'demo.mp4',
                    type: 'normal',
                },
                {
                    name: 'rtmp-h2',
                    url: 'demo.mp4',
                    type: 'normal',
                },
                {
                    name: 'rtmp-h3',
                    url: 'demo.mp4',
                    type: 'normal',
                },
                
            ],
            defaultQuality: 0
        },
    });


    const {MDCSelect} = mdc.select

    const select = new MDCSelect(document.querySelector('.mdc-select'));

    select.listen('MDCSelect:change', () => {
    //    console.log(select.value)
    //    console.log(select)
    //    console.log(select.foundation_.selectedIndex_)
       //dp.switchVideo()
       dp.switchQuality(select.foundation_.selectedIndex_)
    });
}