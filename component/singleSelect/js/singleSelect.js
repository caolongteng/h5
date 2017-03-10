;(function (global, factory) {
	if (typeof module === "object" && typeof module.exports === "object") {
		module.exports = factory(global);
	} else {
		factory(global);
	}
})(typeof window !== "undefined" ? window : this, function (window) {

	var _sSelect = {
		//初始化数据
		initialize: function(option){
			$.extend(this, option);
			this.renderContainer();
		},
		//渲染弹出层
		renderContainer: function(){
			$(document.body).find('.singleSelect').remove();
			var box = '<div class="single_select">\
					<div class="single_select_mask"></div>\
					<ul class="single_select_list"></ul>\
				</div>';
			this.box = $(box);
			this.mask = this.box.find(".single_select_mask");
			this.select = this.box.find("ul");
			//渲染数据
			var me=this,slist = '';
			$.each(this.data, function(sid, sdata){
				var span = me.curSelectId==sid?'<span class="select_right show"><i></i></span>':'<span class="select_right"><i></i></span>';
				slist += '<li data-id="'+sid+'">'+sdata.name+span+'</li>';
			});
			this.select.append(slist);

			//mask点击移除控件
			this.mask.on("click", function(){
				me.box.removeClass("b_translate").on("transitionend, webkitTransitionEnd", function(){
					me.box.off("transitionend, webkitTransitionEnd").remove();
				});
			});
			//子菜单点击事件
			this.select.on('click', 'li', function(){
				var self = $(this);
				me.curSelectId = self.data("id");
				//首先显示对勾
				me.select.find('.select_right').hide();
				self.find('.select_right').show();
				if(me.onSelect && typeof me.onSelect == 'function'){
					me.onSelect();
				}
				requestAnimationFrame(function(){
					me.box.removeClass("b_translate").on("transitionend, webkitTransitionEnd", function(){
						me.box.off("transitionend, webkitTransitionEnd").remove();
					});
				});
			});
			$(document.body).append(this.box);
			requestAnimationFrame(function(){
				me.box.addClass("b_translate");
			})
		}
	}

	return window.singleSelect = _sSelect;
});