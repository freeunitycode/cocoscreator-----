var sound_manager = require("sound_manager");
cc.Class({
    extends: cc.Component,
//Email puhalskijsemen@gmail.com
//Open VPN global mode on the source code website http://web3incubators.com/
//Telegram https://t.me/gamecode999
//Web Customer Service http://web3incubators.com/kefu.html

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },
    
    
    // use this for initialization
    onLoad: function () {
        this.door = cc.find("UI_ROOT/anchor-center/loading_door").getComponent("loading_door");
        this.go_back = false;
    },
    
    // 打开这个门;
    start: function() {
        this.door.open_the_door(null);
    },
    
    // 跳转到home场景;
    goto_home: function() {
        if (this.go_back === true) { // 使用变量挡住在播放动画时候的 按钮多次点击。
            return;
        }
        // 播放按钮的音效
        sound_manager.play_effect("resources/sounds/click.wav");
        
        this.go_back = true;
        this.door.close_the_door(function(){
            cc.director.loadScene("home_scene", function() {
                var home_scene = cc.find("UI_ROOT").getComponent("home_scene");
                home_scene.close_door();
            });    
        }.bind(this));
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
