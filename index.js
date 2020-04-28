window.onload = () => {
    const dp = new DPlayer({
        container: document.getElementById('player'),
        video: {
            url: 'demo.mp4',
        },
    });


    const {MDCSelect} = mdc.select

    const select = new MDCSelect(document.querySelector('.mdc-select'));

    select.listen('MDCSelect:change', () => {
       console.log(select.value)
       //dp.switchVideo()
    });
}