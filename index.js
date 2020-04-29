window.onload = () => {
    const dp = new DPlayer({
        container: document.getElementById('player'),
        video: {
            quality: [
                {
                    name: 'HLS',
                    url: 'demo.m3u8',
                    type: 'hls',
                },
                {
                    name: 'dash',
                    url: 'demo.mp4',
                    type: 'normal',
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
       console.log(select.value)
       //dp.switchVideo()
    });
}