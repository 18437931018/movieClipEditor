var fs = require('fs');
let rootDir = '';
function $(v) {
    return document.getElementById(v);
}
function regisstry() {
    const dragWrapper = $("drag_test");
    dragWrapper.addEventListener("drop", (e) => {
        e.preventDefault(); //阻止e的默认行为
        const files = e.dataTransfer.files;
        if (files && files.length >= 1) {
            const path = files[0].path;
            rootDir = path.replace('.json', '');
            console.log("file:", path);
            const content = fs.readFileSync(path);
            mapInfos = JSON.parse(content);
            creatSelect();
        }
    })
    //这个事件也需要屏蔽
    dragWrapper.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
};
regisstry();
function creatSelect() {
    var dataa = fs.readFileSync(rootDir + '.json', 'utf8');
    fs.readFile(rootDir + '.png', (err, data) => {
        var file = new File([data], 'AnyName.jpg', { type: 'image/png' });
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            var newUrl = this.result;
            drawToCanvs(dataa, newUrl)
        };
    });
}

let mc = null;
function drawToCanvs(data, newUrl) {

    let img = document.createElement("img");
    img.src = newUrl;
    img.onload = () => {
        let canvas = window['canvass'];
        mc && canvas.removeChild(mc);
        let texture = new egret.Texture();
        let bitmapdata = new egret.BitmapData(img);
        texture.bitmapData = bitmapdata;
        let d = JSON.parse(data);
        var mcFactory = new egret.MovieClipDataFactory(d, texture);
        let names = Object.keys(d.mc);
        var mc1 = new egret.MovieClip(mcFactory.generateMovieClipData(names[0]));
        canvas.addChild(mc1);
        mc = mc1;
        mc1.gotoAndPlay(1, -5);
        mc1.x = 380;
        mc1.y = 200;
    }
}