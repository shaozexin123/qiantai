$(function() {
for(var k = 1; k <= 3; k++) {
				$("#bottom_2").append("<tr><a>" + k + "</a></tr>");
			    }
	$.ajax({


		url: "http://localhost:8080/BusinessProduct_web/view/cart?operation=2&pageno=1&pagesize=6",
		type: "GET",
		dataType: "jsonp", //数据格式设置为jsonp
		jsonp: "callback", //Jquery生成验证参数的名称
		jsonpCallback: "success_jsonpCallback",
		success: function(data) { //成功的回调函数
			var data1 = data.data;
			var _totalprice = 0;
			$.each(data1, function(i, element) {
					var _obj = data1[i];
					_totalprice = _totalprice + _obj.totalprice;
					$("#table").append("<tr>" +
						"<td><input  type=\"checkbox\" /></td>" +
						"<td>" + _obj.id + "</td>" +
						"<td>" + _obj.product.id + "</td>" +
						"<td width='250px'><a href=\"http://localhost:8080/BusinessProduct_web/view/cart?operation=3&id=" + _obj.id + "&productprice=" + _obj.productprice + "&productNum=" + (_obj.productNum - 1) + "\"><span class='jia'>-</span></a><input id=\"txt\" size=\"5\" type=\'text\' value=\"" + _obj.productNum + "\" /><a href=\"http://localhost:8080/BusinessProduct_web/view/cart?operation=3&id=" + _obj.id + "&productprice=" + _obj.productprice + "&productNum=" + (_obj.productNum + 1) + "\"><span class='jia'>+</span></a></td>" +
						"<td>" + _obj.productprice + "</td>" +
						"<td>" + _obj.totalprice + "</td>" +
						"<td><a href=\"http://localhost:8080/BusinessProduct_web/view/cart?operation=4&id=" + _obj.id + "\">删除</a>" +
						//						"   <a id=\"xiugai\" >修改</a>" +

						"</td>" +
						"</tr>")
					console.log(_obj.productNum - 1)
				}),
//				for(var k = 1; k <= data.totalPage; k++) {
//				$("#bottom_2").append("<tr><a>" + k + "</a></tr>");
//			    }

				$("#bottom_3").append("<div id=\"bottom_3_1\">" +
					"<a href=\"index.html\">继续购物</a>" +
					"</div>" +
					"<div id=\"bottom_3_2\">" +
					"	<span>合计：" + _totalprice + "元</span>" +
					"</div>" +
					"<div id=\"bottom_3_3\">" +
					"	<form action=\"\">" +
					"  <a href=\"http://localhost:8080/BusinessProduct_web/view/order?operation=1&totalprice=" + _totalprice + "\">" +
					"		<input type=\"button\" value=\"下单\" /></a>" +
					"	</form>" +
					"</div>")
			//			$("#jian").click(function() {
			//				$.ajax({
			//					type: "get",
			//					url: "http://localhost:8080/BusinessProduct_web/view/cart?operation=3&id=" + _obj.product + "&productprice=" + _obj.productprice + "&productNum=" + (_obj.productNum - 1),
			//					dataType: "jsonp", //数据格式设置为jsonp
			//					jsonp: "callback", //Jquery生成验证参数的名称
			//					jsonpCallback: "success_jsonpCallback",
			//					success: function(data) {
			//						alert("666")
			//					}
			//				});
			//			})

		},
	});

})