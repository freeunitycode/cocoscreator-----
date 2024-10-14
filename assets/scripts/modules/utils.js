var utils = {
    // [start, end] 范围内的整数
    random_int: function(start, end) {
        var num = start + Math.random() * (end - start + 1); // [0, 1]
        num = Math.floor(num);
        if (num > end) {
            num = end;
        }
        
        return num;
    },
    
    //Email puhalskijsemen@gmail.com
//Open VPN global mode on the source code website http://web3incubators.com/
//Telegram https://t.me/gamecode999
//Web Customer Service http://web3incubators.com/kefu.html

};

module.exports = utils;