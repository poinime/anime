var art = new Artplayer({
    container: '.artplayer-app',
    volume: 0.5,
    isLive: false,
    muted: false,
    autoplay: false,
    pip: true,
    autoSize: true,
    autoMini: true,
    screenshot: true,
    setting: true,
    loop: true,
    flip: true,
    playbackRate: true,
    aspectRatio: true,
    fullscreen: true,
    fullscreenWeb: true,
    subtitleOffset: true,
    miniProgressBar: true,
    localVideo: true,
    localSubtitle: true,
    networkMonitor: false,
    mutex: true,
    light: true,
    backdrop: true,
    theme: '#ffad00',
    lang: navigator.language.toLowerCase(),
    moreVideoAttr: {
        crossOrigin: 'anonymous',
    },
    contextmenu: [
        {
            html: 'Custom menu',
            click: function (contextmenu) {
                console.info('You clicked on the custom menu');
                contextmenu.show = false;
            },
        },
    ],
    controls: [
        {
            position: 'right',
            html: 'Control',
            click: function () {
                console.info('You clicked on the custom control');
            },
        },
    ],
    icons: {
        loading: '<img src="https://artplayer.org/assets/img/ploading.gif">',
        state: '<img src="https://artplayer.org/assets/img/state.png">',
    },
});
