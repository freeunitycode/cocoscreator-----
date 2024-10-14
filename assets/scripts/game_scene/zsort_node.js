cc.Class({
    extends: cc.Component,

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
        
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        var child = this.node.children;
        child.sort(function(lhs, rhs) {
            if (lhs.y > rhs.y) {
                return -1;
            }
            else if(lhs.y < rhs.y) {
                return 1;
            }
            
            return 0;
        });
        
        // y大的就会排在前面, y小的就会排在后面
        for(var i = 0; i < child.length; i ++) {
            // child[i].setLocalZOrder(1000 + i);
            child[i].zIndex = (1000 + i);
        }
        // end 
    },
});
