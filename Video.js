var art = new Artplayer({
    url: 'https://artplayer.org/assets/sample/video.mp4',
    title: 'One More Time One More Chance',
    poster: 'https://artplayer.org/assets/sample/poster.jpg',
    layers: [
        {
            html: `<img style="width: 100px" src="https://artplayer.org/assets/sample/layer.png">`,
            click: function () {
                console.info('You clicked on the custom layer');
            },
            style: {
                position: 'absolute',
                top: '20px',
                right: '20px',
                opacity: '.9',
            },
        },
    ],
    quality: [
        {
            default: true,
            name: 'SD 480P',
            url: 'https://artplayer.org/assets/sample/video.mp4',
        },
        {
            name: 'HD 720P',
            url: 'https://artplayer.org/assets/sample/video.mp4',
        },
    ],
    thumbnails: {
        url: 'https://artplayer.org/assets/sample/thumbnails.png',
        number: 100,
        width: 160,
        height: 90,
        column: 10,
    },
    subtitle: {
        url: 'https://artplayer.org/assets/sample/subtitle.srt',
        style: {
            color: '#03A9F4',
        },
    },
    highlight: [
        {
            time: 60,
            text: 'One more chance',
        },
        {
            time: 120,
            text: '谁でもいいはずなのに',
        },
        {
            time: 180,
            text: '夏の想い出がまわる',
        },
        {
            time: 240,
            text: 'こんなとこにあるはずもないのに',
        },
        {
            time: 300,
            text: '终わり',
        },
    ],
});
