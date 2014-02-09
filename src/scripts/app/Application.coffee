class Application
	API_KEY = "AIzaSyAweWZureKJ8SD08Wk22-Sh-43XZjFSU8I"
	constructor:($) ->
		@.$dom = $ "#app"
		num = 40
		# num = 2
		step = 360/num
		do @.loadGoogleWebFontAPI
		
		$centerdom = $ "<div></div>"
		@.$dom.append $centerdom .css 
			"background":"red"
			"width":"10px"
			"height":"10px"
			"position":"absolute"
			"top":"50%"
			"left":"50%"
			"margin-left":"-5px"
			"margin-top":"-5px"

		while num--
			item = @.result.items[num]
			fontname = item.family
			fontfile = item.files["regular"]
			p = new TypoSample(fontname,fontfile)
			@.$dom.append p.$dom
			p.$dom.attr("class","typo_sample")
			# 	.css "width",(p.$p.width()+300)+"px"
			# p.translate(do p.width,0)
			# p.translate(100,0)
			p.rotate(num * step)
	loadGoogleWebFontAPI:()=>
		@.result = result

		# url = "https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&fields=items(family%2Cfiles%2Ckind)%2Ckind&key=#{API_KEY}"
		# $.get url , (result) -> @.result = result
	
class TypoSample
	constructor:(@name,@font)->
		@.$dom = $("<div></div>")
		@.$p = $("<p></p>")
		@.$p.text @.name
		@.$p.css("font-family",@.name)
		@.$dom.append @.$p
		# @.$dom.text "name"
		@.x = 0
		@.y = 0
		@.degree = 0
		do @.loadFont
	width:()=>
		do @.$dom.width
	loadFont:()=>
		# $("body").append $("<link href=#{@.font} rel='stylesheet' type='text/css'>")


		$("head").prepend("<style type=\"text/css\">" + "@font-face {\n" + "\tfont-family: \"#{@.name}\";\n" + "\tsrc: local('☺'), url(#{@.font}) format('opentype');\n" +  "}\n" + "\tp.myClass {\n" + "\tfont-family: myFont !important;\n" + "}\n" + "</style>");

	rotate:(@degree) =>
		@.updateTransform()
	translate:(@x,@y)=>
		@.updateTransform()
	updateTransform:()=>
		style =
			'-webkit-transform': 'rotate(' + @.degree + 'deg)'+' translate('+@.x+'px,'+@.y+'px'
			'-ms-transform': 'rotate(' + @.degree + 'deg)'+' translate('+@.x+'px,'+@.y+'px'+')'
			'transform': 'rotate(' + @.degree + 'deg)' + ' translate('+@.x+'px,'+@.y+'px'+')'
			'zoom': 1
		@.$dom.css style