// Generated by CoffeeScript 1.6.2
var Application, TypoSample,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Application = (function() {
  var API_KEY;

  API_KEY = "AIzaSyAweWZureKJ8SD08Wk22-Sh-43XZjFSU8I";

  function Application($) {
    this.loadGoogleWebFontAPI = __bind(this.loadGoogleWebFontAPI, this);
    var $centerdom, fontfile, fontname, item, num, p, step;

    this.$dom = $("#app");
    num = 40;
    step = 360 / num;
    this.loadGoogleWebFontAPI();
    $centerdom = $("<div></div>");
    this.$dom.append($centerdom.css({
      "background": "red",
      "width": "10px",
      "height": "10px",
      "position": "absolute",
      "top": "50%",
      "left": "50%",
      "margin-left": "-5px",
      "margin-top": "-5px"
    }));
    while (num--) {
      item = this.result.items[num];
      fontname = item.family;
      fontfile = item.files["regular"];
      p = new TypoSample(fontname, fontfile);
      this.$dom.append(p.$dom);
      p.$dom.attr("class", "typo_sample");
      p.rotate(num * step);
    }
  }

  Application.prototype.loadGoogleWebFontAPI = function() {
    return this.result = result;
  };

  return Application;

})();

TypoSample = (function() {
  function TypoSample(name, font) {
    this.name = name;
    this.font = font;
    this.updateTransform = __bind(this.updateTransform, this);
    this.translate = __bind(this.translate, this);
    this.rotate = __bind(this.rotate, this);
    this.loadFont = __bind(this.loadFont, this);
    this.width = __bind(this.width, this);
    this.$dom = $("<div></div>");
    this.$p = $("<p></p>");
    this.$p.text(this.name);
    this.$p.css("font-family", this.name);
    this.$dom.append(this.$p);
    this.x = 0;
    this.y = 0;
    this.degree = 0;
    this.loadFont();
  }

  TypoSample.prototype.width = function() {
    return this.$dom.width();
  };

  TypoSample.prototype.loadFont = function() {
    return $("head").prepend("<style type=\"text/css\">" + "@font-face {\n" + ("\tfont-family: \"" + this.name + "\";\n") + ("\tsrc: local('☺'), url(" + this.font + ") format('opentype');\n") + "}\n" + "\tp.myClass {\n" + "\tfont-family: myFont !important;\n" + "}\n" + "</style>");
  };

  TypoSample.prototype.rotate = function(degree) {
    this.degree = degree;
    return this.updateTransform();
  };

  TypoSample.prototype.translate = function(x, y) {
    this.x = x;
    this.y = y;
    return this.updateTransform();
  };

  TypoSample.prototype.updateTransform = function() {
    var style;

    style = {
      '-webkit-transform': 'rotate(' + this.degree + 'deg)' + ' translate(' + this.x + 'px,' + this.y + 'px',
      '-ms-transform': 'rotate(' + this.degree + 'deg)' + ' translate(' + this.x + 'px,' + this.y + 'px' + ')',
      'transform': 'rotate(' + this.degree + 'deg)' + ' translate(' + this.x + 'px,' + this.y + 'px' + ')',
      'zoom': 1
    };
    return this.$dom.css(style);
  };

  return TypoSample;

})();

/*
//@ sourceMappingURL=Application.map
*/
