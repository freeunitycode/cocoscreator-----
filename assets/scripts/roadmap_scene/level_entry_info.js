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
        star_num: 1, // test 
    },

    // use this for initialization
    onLoad: function () {
        this.star_set = [null, null, null];
        this.star_set[0] = this.node.getChildByName("star1").getChildByName("star");
        this.star_set[1] = this.node.getChildByName("star2").getChildByName("star");
        this.star_set[2] = this.node.getChildByName("star3").getChildByName("star");
        
        // test show_level_star_info
        this.show_level_star_info(this.star_num);
    },
    
    // 显示我们当前关卡的成绩，几颗星
    show_level_star_info: function(star_num) {
        if (star_num < 0 || star_num > 3) {
            return;
        }
        
        var i;
        for(i= 0; i < star_num; i ++) {
            this.star_set[i].active = true;    
        }
        
        for(; i < 3; i ++) {
            this.star_set[i].active = false;    
        }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
