/*!
* Launchframe v1.0.0 by @Whiteboardis dev team
* Copyright 2014 Whiteboard
*
* Designed and built for developers by developers.
*/
if (!jQuery) { throw new Error("LaunchFrame requires jQuery") }

/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function() {
	var container, button, menu;

	container = document.getElementById( 'site-navigation' );
	if ( ! container )
		return;

	button = container.getElementsByTagName( 'h1' )[0];
	if ( 'undefined' === typeof button )
		return;

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	if ( -1 === menu.className.indexOf( 'nav-menu' ) )
		menu.className += ' nav-menu';

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) )
			container.className = container.className.replace( ' toggled', '' );
		else
			container.className += ' toggled';
	};
} )();


( function() {
	var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
	    is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
	    is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

	if ( ( is_webkit || is_opera || is_ie ) && 'undefined' !== typeof( document.getElementById ) ) {
		var eventMethod = ( window.addEventListener ) ? 'addEventListener' : 'attachEvent';
		window[ eventMethod ]( 'hashchange', function() {
			var element = document.getElementById( location.hash.substring( 1 ) );

			if ( element ) {
				if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) )
					element.tabIndex = -1;

				element.focus();
			}
		}, false );
	}
})();



jQuery( document ).ready( function( $ ) {
	$( document ).keydown( function( e ) {
		var url = false;
		if ( e.which === 37 ) {  // Left arrow key code
			url = $( '.nav-previous a' ).attr( 'href' );
		}
		else if ( e.which === 39 ) {  // Right arrow key code
			url = $( '.entry-attachment a' ).attr( 'href' );
		}
		if ( url && ( !$( 'textarea, input' ).is( ':focus' ) ) ) {
			window.location = url;
		}
	} );
} );

/* Chosen v1.0.0 | (c) 2011-2013 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
!function(){var a,AbstractChosen,Chosen,SelectParser,b,c={}.hasOwnProperty,d=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};SelectParser=function(){function SelectParser(){this.options_index=0,this.parsed=[]}return SelectParser.prototype.add_node=function(a){return"OPTGROUP"===a.nodeName.toUpperCase()?this.add_group(a):this.add_option(a)},SelectParser.prototype.add_group=function(a){var b,c,d,e,f,g;for(b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:this.escapeExpression(a.label),children:0,disabled:a.disabled}),f=a.childNodes,g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},SelectParser.prototype.add_option=function(a,b,c){return"OPTION"===a.nodeName.toUpperCase()?(""!==a.text?(null!=b&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1):void 0},SelectParser.prototype.escapeExpression=function(a){var b,c;return null==a||a===!1?"":/[\&\<\>\"\'\`]/.test(a)?(b={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c=/&(?!\w+;)|[\<\>\"\'\`]/g,a.replace(c,function(a){return b[a]||"&amp;"})):a},SelectParser}(),SelectParser.select_to_array=function(a){var b,c,d,e,f;for(c=new SelectParser,f=a.childNodes,d=0,e=f.length;e>d;d++)b=f[d],c.add_node(b);return c.parsed},AbstractChosen=function(){function AbstractChosen(a,b){this.form_field=a,this.options=null!=b?b:{},AbstractChosen.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers())}return AbstractChosen.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b)},this.activate_action=function(b){return a.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.result_single_selected=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null!=this.options.enable_split_word_search?this.options.enable_split_word_search:!0,this.group_search=null!=this.options.group_search?this.options.group_search:!0,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null!=this.options.single_backstroke_delete?this.options.single_backstroke_delete:!0,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null!=this.options.display_selected_options?this.options.display_selected_options:!0,this.display_disabled_options=null!=this.options.display_disabled_options?this.options.display_disabled_options:!0},AbstractChosen.prototype.set_default_text=function(){return this.default_text=this.form_field.getAttribute("data-placeholder")?this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.options.placeholder_text_multiple||this.options.placeholder_text||AbstractChosen.default_multiple_text:this.options.placeholder_text_single||this.options.placeholder_text||AbstractChosen.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||AbstractChosen.default_no_result_text},AbstractChosen.prototype.mouse_enter=function(){return this.mouse_on_container=!0},AbstractChosen.prototype.mouse_leave=function(){return this.mouse_on_container=!1},AbstractChosen.prototype.input_focus=function(){var a=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return a.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},AbstractChosen.prototype.input_blur=function(){var a=this;return this.mouse_on_container?void 0:(this.active_field=!1,setTimeout(function(){return a.blur_test()},100))},AbstractChosen.prototype.results_option_build=function(a){var b,c,d,e,f;for(b="",f=this.results_data,d=0,e=f.length;e>d;d++)c=f[d],b+=c.group?this.result_add_group(c):this.result_add_option(c),(null!=a?a.first:void 0)&&(c.selected&&this.is_multiple?this.choice_build(c):c.selected&&!this.is_multiple&&this.single_set_selected_text(c.text));return b},AbstractChosen.prototype.result_add_option=function(a){var b,c;return a.search_match?this.include_option_in_results(a)?(b=[],a.disabled||a.selected&&this.is_multiple||b.push("active-result"),!a.disabled||a.selected&&this.is_multiple||b.push("disabled-result"),a.selected&&b.push("result-selected"),null!=a.group_array_index&&b.push("group-option"),""!==a.classes&&b.push(a.classes),c=""!==a.style.cssText?' style="'+a.style+'"':"",'<li class="'+b.join(" ")+'"'+c+' data-option-array-index="'+a.array_index+'">'+a.search_text+"</li>"):"":""},AbstractChosen.prototype.result_add_group=function(a){return a.search_match||a.group_match?a.active_options>0?'<li class="group-result">'+a.search_text+"</li>":"":""},AbstractChosen.prototype.results_update_field=function(){return this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.result_single_selected=null,this.results_build(),this.results_showing?this.winnow_results():void 0},AbstractChosen.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},AbstractChosen.prototype.results_search=function(){return this.results_showing?this.winnow_results():this.results_show()},AbstractChosen.prototype.winnow_results=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m;for(this.no_results_clear(),e=0,g=this.get_search_text(),a=g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),d=this.search_contains?"":"^",c=new RegExp(d+a,"i"),j=new RegExp(a,"i"),m=this.results_data,k=0,l=m.length;l>k;k++)b=m[k],b.search_match=!1,f=null,this.include_option_in_results(b)&&(b.group&&(b.group_match=!1,b.active_options=0),null!=b.group_array_index&&this.results_data[b.group_array_index]&&(f=this.results_data[b.group_array_index],0===f.active_options&&f.search_match&&(e+=1),f.active_options+=1),(!b.group||this.group_search)&&(b.search_text=b.group?b.label:b.html,b.search_match=this.search_string_match(b.search_text,c),b.search_match&&!b.group&&(e+=1),b.search_match?(g.length&&(h=b.search_text.search(j),i=b.search_text.substr(0,h+g.length)+"</em>"+b.search_text.substr(h+g.length),b.search_text=i.substr(0,h)+"<em>"+i.substr(h)),null!=f&&(f.group_match=!0)):null!=b.group_array_index&&this.results_data[b.group_array_index].search_match&&(b.search_match=!0)));return this.result_clear_highlight(),1>e&&g.length?(this.update_results_content(""),this.no_results(g)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},AbstractChosen.prototype.search_string_match=function(a,b){var c,d,e,f;if(b.test(a))return!0;if(this.enable_split_word_search&&(a.indexOf(" ")>=0||0===a.indexOf("["))&&(d=a.replace(/\[|\]/g,"").split(" "),d.length))for(e=0,f=d.length;f>e;e++)if(c=d[e],b.test(c))return!0},AbstractChosen.prototype.choices_count=function(){var a,b,c,d;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,d=this.form_field.options,b=0,c=d.length;c>b;b++)a=d[b],a.selected&&(this.selected_option_count+=1);return this.selected_option_count},AbstractChosen.prototype.choices_click=function(a){return a.preventDefault(),this.results_showing||this.is_disabled?void 0:this.results_show()},AbstractChosen.prototype.keyup_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(a.preventDefault(),this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},AbstractChosen.prototype.container_width=function(){return null!=this.options.width?this.options.width:""+this.form_field.offsetWidth+"px"},AbstractChosen.prototype.include_option_in_results=function(a){return this.is_multiple&&!this.display_selected_options&&a.selected?!1:!this.display_disabled_options&&a.disabled?!1:a.empty?!1:!0},AbstractChosen.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:/iP(od|hone)/i.test(window.navigator.userAgent)?!1:/Android/i.test(window.navigator.userAgent)&&/Mobile/i.test(window.navigator.userAgent)?!1:!0},AbstractChosen.default_multiple_text="Select Some Options",AbstractChosen.default_single_text="Select an Option",AbstractChosen.default_no_result_text="No results match",AbstractChosen}(),a=jQuery,a.fn.extend({chosen:function(b){return AbstractChosen.browser_is_supported()?this.each(function(){var c,d;c=a(this),d=c.data("chosen"),"destroy"===b&&d?d.destroy():d||c.data("chosen",new Chosen(this,b))}):this}}),Chosen=function(c){function Chosen(){return b=Chosen.__super__.constructor.apply(this,arguments)}return d(Chosen,c),Chosen.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chosen-rtl")},Chosen.prototype.set_up_html=function(){var b,c;return b=["chosen-container"],b.push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&b.push(this.form_field.className),this.is_rtl&&b.push("chosen-rtl"),c={"class":b.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.form_field.id.length&&(c.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=a("<div />",c),this.is_multiple?this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>'):this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior(),this.form_field_jq.trigger("chosen:ready",{chosen:this})},Chosen.prototype.register_observers=function(){var a=this;return this.container.bind("mousedown.chosen",function(b){a.container_mousedown(b)}),this.container.bind("mouseup.chosen",function(b){a.container_mouseup(b)}),this.container.bind("mouseenter.chosen",function(b){a.mouse_enter(b)}),this.container.bind("mouseleave.chosen",function(b){a.mouse_leave(b)}),this.search_results.bind("mouseup.chosen",function(b){a.search_results_mouseup(b)}),this.search_results.bind("mouseover.chosen",function(b){a.search_results_mouseover(b)}),this.search_results.bind("mouseout.chosen",function(b){a.search_results_mouseout(b)}),this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(b){a.search_results_mousewheel(b)}),this.form_field_jq.bind("chosen:updated.chosen",function(b){a.results_update_field(b)}),this.form_field_jq.bind("chosen:activate.chosen",function(b){a.activate_field(b)}),this.form_field_jq.bind("chosen:open.chosen",function(b){a.container_mousedown(b)}),this.search_field.bind("blur.chosen",function(b){a.input_blur(b)}),this.search_field.bind("keyup.chosen",function(b){a.keyup_checker(b)}),this.search_field.bind("keydown.chosen",function(b){a.keydown_checker(b)}),this.search_field.bind("focus.chosen",function(b){a.input_focus(b)}),this.is_multiple?this.search_choices.bind("click.chosen",function(b){a.choices_click(b)}):this.container.bind("click.chosen",function(a){a.preventDefault()})},Chosen.prototype.destroy=function(){return a(document).unbind("click.chosen",this.click_test_action),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},Chosen.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field_jq[0].disabled,this.is_disabled?(this.container.addClass("chosen-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_action),this.close_field()):(this.container.removeClass("chosen-disabled"),this.search_field[0].disabled=!1,this.is_multiple?void 0:this.selected_item.bind("focus.chosen",this.activate_action))},Chosen.prototype.container_mousedown=function(b){return this.is_disabled||(b&&"mousedown"===b.type&&!this.results_showing&&b.preventDefault(),null!=b&&a(b.target).hasClass("search-choice-close"))?void 0:(this.active_field?this.is_multiple||!b||a(b.target)[0]!==this.selected_item[0]&&!a(b.target).parents("a.chosen-single").length||(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(document).bind("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},Chosen.prototype.container_mouseup=function(a){return"ABBR"!==a.target.nodeName||this.is_disabled?void 0:this.results_reset(a)},Chosen.prototype.search_results_mousewheel=function(a){var b,c,d;return b=-(null!=(c=a.originalEvent)?c.wheelDelta:void 0)||(null!=(d=a.originialEvent)?d.detail:void 0),null!=b?(a.preventDefault(),"DOMMouseScroll"===a.type&&(b=40*b),this.search_results.scrollTop(b+this.search_results.scrollTop())):void 0},Chosen.prototype.blur_test=function(){return!this.active_field&&this.container.hasClass("chosen-container-active")?this.close_field():void 0},Chosen.prototype.close_field=function(){return a(document).unbind("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},Chosen.prototype.activate_field=function(){return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},Chosen.prototype.test_active_click=function(b){return this.container.is(a(b.target).closest(".chosen-container"))?this.active_field=!0:this.close_field()},Chosen.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=SelectParser.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},Chosen.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){if(this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),b=c+this.result_highlight.outerHeight(),b>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(f>c)return this.search_results.scrollTop(c)}},Chosen.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},Chosen.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results())},Chosen.prototype.update_results_content=function(a){return this.search_results.html(a)},Chosen.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},Chosen.prototype.set_tab_index=function(){var a;return this.form_field.tabIndex?(a=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=a):void 0},Chosen.prototype.set_label_behavior=function(){var b=this;return this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=a("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0?this.form_field_label.bind("click.chosen",function(a){return b.is_multiple?b.container_mousedown(a):b.activate_field()}):void 0},Chosen.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},Chosen.prototype.search_results_mouseup=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c.length?(this.result_highlight=c,this.result_select(b),this.search_field.focus()):void 0},Chosen.prototype.search_results_mouseover=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c?this.result_do_highlight(c):void 0},Chosen.prototype.search_results_mouseout=function(b){return a(b.target).hasClass("active-result")?this.result_clear_highlight():void 0},Chosen.prototype.choice_build=function(b){var c,d,e=this;return c=a("<li />",{"class":"search-choice"}).html("<span>"+b.html+"</span>"),b.disabled?c.addClass("search-choice-disabled"):(d=a("<a />",{"class":"search-choice-close","data-option-array-index":b.array_index}),d.bind("click.chosen",function(a){return e.choice_destroy_link_click(a)}),c.append(d)),this.search_container.before(c)},Chosen.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),b.stopPropagation(),this.is_disabled?void 0:this.choice_destroy(a(b.target))},Chosen.prototype.choice_destroy=function(a){return this.result_deselect(a[0].getAttribute("data-option-array-index"))?(this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),a.parents("li").first().remove(),this.search_field_scale()):void 0},Chosen.prototype.results_reset=function(){return this.form_field.options[0].selected=!0,this.selected_option_count=null,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change"),this.active_field?this.results_hide():void 0},Chosen.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},Chosen.prototype.result_select=function(a){var b,c,d;return this.result_highlight?(b=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?b.removeClass("active-result"):(this.result_single_selected&&(this.result_single_selected.removeClass("result-selected"),d=this.result_single_selected[0].getAttribute("data-option-array-index"),this.results_data[d].selected=!1),this.result_single_selected=b),b.addClass("result-selected"),c=this.results_data[b[0].getAttribute("data-option-array-index")],c.selected=!0,this.form_field.options[c.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(c):this.single_set_selected_text(c.text),(a.metaKey||a.ctrlKey)&&this.is_multiple||this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[c.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,this.search_field_scale())):void 0},Chosen.prototype.single_set_selected_text=function(a){return null==a&&(a=this.default_text),a===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").text(a)},Chosen.prototype.result_deselect=function(a){var b;return b=this.results_data[a],this.form_field.options[b.options_index].disabled?!1:(b.selected=!1,this.form_field.options[b.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[b.options_index].value}),this.search_field_scale(),!0)},Chosen.prototype.single_deselect_control_build=function(){return this.allow_single_deselect?(this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")):void 0},Chosen.prototype.get_search_text=function(){return this.search_field.val()===this.default_text?"":a("<div/>").text(a.trim(this.search_field.val())).html()},Chosen.prototype.winnow_results_set_highlight=function(){var a,b;return b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first(),null!=a?this.result_do_highlight(a):void 0},Chosen.prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results.append(c)},Chosen.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},Chosen.prototype.keydown_arrow=function(){var a;return this.results_showing&&this.result_highlight?(a=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(a):void 0:this.results_show()},Chosen.prototype.keyup_arrow=function(){var a;return this.results_showing||this.is_multiple?this.result_highlight?(a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())):void 0:this.results_show()},Chosen.prototype.keydown_backstroke=function(){var a;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(a=this.search_container.siblings("li.search-choice").last(),a.length&&!a.hasClass("search-choice-disabled")?(this.pending_backstroke=a,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0)},Chosen.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},Chosen.prototype.keydown_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),8!==b&&this.pending_backstroke&&this.clear_backstroke(),b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:a.preventDefault(),this.keydown_arrow()}},Chosen.prototype.search_field_scale=function(){var b,c,d,e,f,g,h,i,j;if(this.is_multiple){for(d=0,h=0,f="position:absolute; left: -1000px; top: -1000px; display:none;",g=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],i=0,j=g.length;j>i;i++)e=g[i],f+=e+":"+this.search_field.css(e)+";";return b=a("<div />",{style:f}),b.text(this.search_field.val()),a("body").append(b),h=b.width()+25,b.remove(),c=this.container.outerWidth(),h>c-10&&(h=c-10),this.search_field.css({width:h+"px"})}},Chosen}(AbstractChosen)}.call(this);
(function($,w,undefined){

// Copyright 2013 Whiteboard Network LLC
// Written by @whiteboardis (@taylorleejones)
	var $w = $(window), 
		$b = $("body"), 
		sTop, 
		pagewrap = $('#page'),
		resized = false,
		rt,
		abouttop,
		whytop,
		navtop,
		homevid = $('.home-landing').find('video').get(0),
		homebottomvid = $('.home-register').find('video').get(0),
		hbvplay,
		hbottom,
		homevidp = true,
		touch = Modernizr.touch,
		clickEvt = (touch ? "touchstart" : "click");

	var wb = {

		getsizes : function () {
			$w.h = $w.height();
			$w.w = $w.width();
			if ($('.home-about').length) {
				navtop = $('.front-end-header').offset().top;
				abouttop = $('.home-about').offset().top;
				whytop = $('.home-register').offset().top;
			}
			if ($('.page-header').length) {
				hbottom = $('.page-header').offset().top + $('.page-header').height();
			}
		},


		setsizes : function () {
			$('.fillscreen').css({
				'min-height' : $w.h
			})
		},

		scroller : function () {

			var scrolling = true;
			var t;
			var b = $('body');

			$(window).scroll(function(){
				b.addClass('scrolling');
				clearTimeout(t);
				t = setTimeout(function(){
				  b.removeClass("scrolling");
				}, 50);

				if (scrolling === true) {
					scrolling = false;
					scrolldis = $w.scrollTop();

					setTimeout(function(){
						scrolling = true;
						wb.scrollfunc();
					},1);

				}
			});

		},

		scrollfunc : function(e){
			// e = scroll event

			sTop = $w.scrollTop();

			$('.delay-long, .delay-short').addClass('visible');
			$('body').addClass('delay-finished');

			if (sTop > 90){
				$b.not(".scrolled,.whitespace").addClass("scrolled").removeClass("at-top");
				// $(".nav-social").hide();
			} else {
				wb.resize();
				$b.not(".at-top,.whitespace").addClass("at-top").removeClass("scrolled");
				// $(".nav-social").show();
			}

			// if (sTop < hbottom) { 
			// 	$('.page-header .bg-image').css({top : (Math.round(sTop) * 0.5)});
			// }

			if (sTop >= 50) {
				$('.front-end-header').addClass('fixed');
			} else {
				$('.front-end-header').removeClass('fixed');
			}

		},

		hiliter : function(el){
			if (el) {
				$(el).find('.hiliter').each(function(){
					var h = $(this).html();
					var newh = "<span>" + h.split(" ").join("</span> <span>") + "</span>";
					$(this).html(newh);
				});
			} else {
				$(".hiliter").each(function(){
					var h = $(this).html();
					var newh = "<span>" + h.split(" ").join("</span> <span>") + "</span>";
					$(this).html(newh);
				});
			}
		},

		showhiliter : function () {
			var t = 0;
			$('.hiliter span').each(function(i,e){
				setTimeout(function(){
					$(e).css('opacity',1);
				},t);
				t = t+100;
			});
		},

		mnav : function () {
			$b.on(clickEvt,'.front-end-beginn',function(event){
				event.preventDefault();
				$b.toggleClass('mnav-open');
			});
			$b.on(clickEvt,'.parent-hub-tab',function(event){
				event.preventDefault();
				$b.toggleClass('phub-open');
			});
		},

		blogsearch : function () {
			$('.widget_search').on("click", function(e) {
				event.preventDefault();
				$(this).addClass('focused columns eight offset-by-two').removeClass('.columns.two');
				$('.categories_list').addClass('hide');
			});
			//close search
			$(document).mouseup(function (e){
				var container = $('.widget_search');
				var catlist = $('.categories_list');

				if (!container.is(e.target) // if the target of the click isn't the container...
					&& container.has(e.target).length === 0) // ... nor a descendant of the container
				{
					container.removeClass('focused columns eight offset-by-two').addClass('columns two');
					catlist.removeClass('hide');
				}
			});
		},

		blogfilter : function () {
			var category = $('.cat-item');
				var parents = $('.category-parents');
				var parentscat = $('.cat-item-8, .cat-item-33, .cat-item-26');
				var campers = $('.category-campers');
				var camperscat = $('.cat-item-9, .cat-item-34, .cat-item-27');
				var fun = $('.category-fun');
				var funcat = $('.cat-item-10, .cat-item-35, .cat-item-28');
				var faith = $('.category-faith');
				var faithcat = $('.cat-item-11, .cat-item-36, .cat-item-29');
				var updates = $('.category-updates');
				var updatescat = $('.cat-item-12, .cat-item-37, .cat-item-30');

			//on hover, add class of hover to same category
			$(parentscat).on('mouseenter',function(){
				$(parents).addClass('yellow');	
			});
			$(camperscat).on('mouseenter',function(){
				$(campers).addClass('orange');	
			});
			$(funcat).on('mouseenter',function(){
				$(fun).addClass('darkblue');	
			});
			$(faithcat).on('mouseenter',function(){
				$(faith).addClass('blue');	
			});
			$(updatescat).on('mouseenter',function(){
				$(updates).addClass('red');	
			});

			//on mouseout, remove hover. Boom boom.
			$(category).on('mouseleave',function(){
				$('.post').removeClass('hover');	
			});
			$(camperscat).on('mouseleave',function(){
				$(campers).removeClass('orange');	
			});
			$(faithcat).on('mouseleave',function(){
				$(faith).removeClass('blue');	
			});
			$(parentscat).on('mouseleave',function(){
				$(parents).removeClass('yellow');	
			});
			$(funcat).on('mouseleave',function(){
				$(fun).removeClass('darkblue');	
			});
			$(updatescat).on('mouseleave',function(){
				$(updates).removeClass('red');	
			});


			//click to filter further
			//var allposts = $('.post.type-post');

			//$(category).on("click", function() {
			//	event.preventDefault();
			//});
			//specificity
			//$(parentscat).on('click',function(){
			//	$(allposts).not(parents).addClass('hide-cat');
			//});
			//$(camperscat).on('click',function(){
			//	$(allposts).not(campers).addClass('hide-cat');	
			//});
			//$(funcat).on('click',function(){
			//	$(allposts).not(fun).addClass('hide-cat');	
			//});
			//$(faithcat).on('click',function(){
			//	$(allposts).not(faith).addClass('hide-cat');	
			//});
			//$(updatescat).on('click',function(){
			//	$(allposts).not(updates).addClass('hide-cat');	
			//});

		},
			
		responsiveimages : function(){
			// this function replaces image paths on images & elements with background images based on screen widht using a small, medium, large pattern
			// depends on wb.getsizes(), whichs gets window width as $w.w
			// gets called on the throttled resize event

			var wsmall = 600,
				wmedium = 1000,
				wlarge = 1280;

			$('[data-image-small]').each(function(i,e){

				e.sm = $(this).data('image-small');
				e.med = $(this).data('image-medium');
				e.lg = $(this).data('image-large');

				if ($(this).is('img')) {
					// if it's an img element
					if ($w.w < wlarge && e.lg) {
						$(e).attr('src',$(this).attr('data-image-large'));
					} else if ($w.w < wmedium && e.med) {
						$(e).attr('src',$(this).attr('data-image-medium'));
					} else {
						$(e).attr('src',$(this).attr('data-image-small'));
					}

				} else {
					// if it's any other kind of element, set the background-image property
					if ($w.w < wlarge && e.lg) {
						$(e).css('background-image','url('+ $(this).attr('data-image-large') + ')');
					} else if ($w.w < wmedium && e.med) {
						$(e).css('background-image','url('+ $(this).attr('data-image-medium') + ')');
					} else {
						$(e).css('background-image','url('+ $(this).attr('data-image-small') + ')');
					}
				}
			});

		},

		delayer : function () {

			if ($('body').hasClass('home')) {
				setTimeout(function(){
					$('.delay-short').addClass('visible');
				},100);

				setTimeout(function(){
					$('.delay-long').addClass('visible');
					$('body').addClass('delay-finished');
				},5000);
			} else {
				$('.delay-long, .delay-short').addClass('visible');
				$('body').addClass('delay-finished');
			}

			

		},

		positionvids : function () {

			if ($w.w <= 1000){
				$('.video-container').css({
					"width" : "100%",
					"height" : "100%",
					left: 0,
					top: 0,
					paddingBottom: 0
				});
			} else {
				$('.video-container').each(function(i,e){
					e.container = $(this).parent();
					e.ratio = e.container.outerWidth() / e.container.outerHeight();
					e.threshold = 16/9;
					e.pad = 9/16;
					if (e.ratio <= e.threshold) {
						e.coeff = Math.round(100*(e.threshold-e.ratio)/e.ratio)/100+ 1.04;
						$(e).css({
							'width' :			(e.coeff*100) + '%',
							'height' :			'104%',
							'left' :			-1 * (e.coeff / 2) + '%',
							'top' :				'-2%',
							'padding-bottom':'0'
						});
					} else {
						e.coeff = Math.round(100*(e.ratio-e.threshold)/e.threshold)/100 + 1;
						$(e).css({
							'width':			'100%',
							'height':			(e.coeff*100) + '%',
							'left' :			'0',
							'top' :				-1 * (((e.coeff*100)-100)/2) + '%',
							'padding-bottom':	'0'
						});
					}
				});
			}

		},

		testimonialsslider : function () {
			$('.testimonials-slider').each(function(i,e){
				var $e = $(e);
				var q = $e.find('.quote');
				var qt = q.find('.quote-content');
				var cpic = $e.find('.slide-current .avatar');
				var prev = $e.find('.slide-previous');
				var next = $e.find('.slide-next');
				var cname = $e.find('.current-name');
				var cdesc = $e.find('.current-desc');
				var count = $e.find('.slide').length;

				// var aindex = $(e).find('.slide.active').index();				

				function changeSlide(dir) {

					$(e).addClass('transitioning');

					var cslide = $(e).find('.slide.active');
					var i = cslide.index();

					if (dir === 'next' && i !== (count-1)) {
						i++;
					} else if (dir === 'next' && i === (count-1)) {
						i = 0;
					} else if (dir === 'prev' && i !== 0) {
						i--;
					} else if (dir === 'prev' && i === 0) {
						i = count-1;
					}

					var aslide = $(e).find('.slide').eq(i);
					var atext = aslide.attr('data-quote');
					var aname = aslide.attr('data-author');
					var adesc = aslide.attr('data-author-desc');
					var apic = aslide.attr('data-author-img');
					var npic, ppic, anext, aprev;

					if ((i+1) === count) {
						aprev = $(e).find('.slide').eq(i-0);
						anext = $(e).find('.slide').eq(0);
						// npic = $(e).find('.slide').eq(0).attr('data-author-img');
						// ppic = $(e).find('.slide').eq(i-1).attr('data-author-img');
					} else if (i === 0) {
						aprev = $(e).find('.slide').eq(count-1);
						anext = $(e).find('.slide').eq(i+1);
						// npic = $(e).find('.slide').eq(i+1).attr('data-author-img');
						// ppic = $(e).find('.slide').eq(count).attr('data-author-img');
					} else {
						aprev = $(e).find('.slide').eq(i-1);
						anext = $(e).find('.slide').eq(i+1);
						// npic = $(e).find('.slide').eq(i+1).attr('data-author-img');
						// ppic = $(e).find('.slide').eq(i-1).attr('data-author-img');
					}
					npic = anext.attr('data-author-img');
					ppic = aprev.attr('data-author-img');

					setTimeout(function(){
						$(e).find('.slide').removeClass('active');
						aslide.addClass('active');
						cpic.css({'background-image':'url('+apic+')'});
						// prev.css('background-image','url('+ppic+')');
						// next.css('background-image','url('+npic+')');
						cname.text(aname);
						cdesc.text(adesc);
						qt.text('"' + atext + '"');
						wb.hiliter(e);
						$(e).removeClass('transitioning');
					},350);

				}
				changeSlide();

				$(e).on('click','.slide-next',function(e){
					e.preventDefault();
					changeSlide('next');
				});

				$(e).on('click','.slide-previous',function(e){
					e.preventDefault();
					changeSlide('prev');
				});

			});
		},

		tracksOnClick : function() {
			$(document).on("click", ".tracks", function(e){

				e.preventDefault();
				$(this).children('.hidden-blob').toggle();

			}).on("click", ".day-camps-location", function(e) {
				
				e.preventDefault();
				var myvalue = $(this).data("address");
				$('#indiv-camps-location').val(myvalue);
				
			}).on("click", ".link-container a", function(e){
			  
				e.preventDefault();
				var index = $(this).index() + 1;
				$(this).addClass("current").siblings().removeClass("current");
				$("#square").removeClass().addClass("move"+index);

				var targetClass = $(this).attr("id").replace("-trigger", "");
				var targetEl = $("."+targetClass);
				targetEl.show().siblings().hide();
				targetClass.siblings().hide();
			});
		},

		testimonial_heights : function(){
			clearTimeout(wb.testimonial_height_timeout);
			wb.testimonial_height_timeout = setTimeout(function(){
				$(".testimonials .row").each(function(i,el){
					var h = 0,
					columns = $(el).find(".testimonial-wrap");
					columns.each(function(){
						h = Math.max(h, $(this).outerHeight());
					});
					columns.css("height",h);

				});
			}, 300);
		},

		homevids : function () {

			$(document).on('mouseenter','.camp-block',function(event){
				$(this).find('video').get(0).play();
			});

			$(document).on('mouseenter','.camp-block.overnight-camps',function(event){
				$('.camp-block.day-camps').find('video').get(0).pause();
			});

			$(document).on('mouseenter','.camp-block.day-camps',function(event){
				$('.camp-block.overnight-camps').find('video').get(0).pause();
			});

			$(document).on('mouseenter','.home-about, .home-why',function(event){
				$('.home-camps video').each(function(i,e){
					$(this).get(0).pause();
				});
			});

			$('.home-camps .camp-block').each(function(i,e){
				var t = Math.round(Math.random()*1000) + 1000;
				var el = $(e).find('.curtain');
				setInterval(function(){
					if (el.hasClass('v2')) {
						el.removeClass('v2').addClass('v1');
					} else {
						el.removeClass('v1').addClass('v2');
					}
				},t);
			});

			setTimeout(function(){
				$('.home-landing .curtain').addClass('visible');
			},1500);

		},

		directions_map : {

			init : function(){
				wb.directions_map.directionsService = new google.maps.DirectionsService();
				wb.directions_map.directionsDisplay = new google.maps.DirectionsRenderer();
				wb.directions_map.map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
				$(".directions_map_form").on("submit", function(){
					var from = $(this).find("input[name='start-point']");
					var to = $(this).find("input[name='end-point']");
					wb.directions_map.get_directions(from, to);
				});
			},

			get_directions: function(from, to){
			  var request = {
			    origin: from,
			    destination: to,
			    travelMode: google.maps.TravelMode.DRIVING
			  };
			  console.log(request);
			  wb.directions_map.directionsService.route(request, function(result, status) {
			  console.log(result);
			    if (status == google.maps.DirectionsStatus.OK) {
						wb.directions_map.display_directions(result);
			    }
			  });
			},

			display_directions: function(result){
				wb.directions_map.directionsDisplay.setDirections(result);
			}

		},

		homeslider : function () {
			$('.landing-inside').on('click','.left-trigger',function(event){
				event.preventDefault();
				$('body').addClass('landing-left').removeClass('landing-right');
			});

			$('.landing-inside').on('click','.right-trigger',function(event){
				event.preventDefault();
				$('body').addClass('landing-right').removeClass('landing-left');
			});

			$('.big-nav').on('mouseenter','a',function(e){
				var num = $(this).index();
				clearTimeout(t);
				var t = setTimeout(function(){
					$('.bg-image').removeClass('active');
					$('.bg-images .bg-image').eq(num).addClass('active');
				},500);
			});

			$('.big-nav').on('mouseleave',function(e){
				$('.bg-image').removeClass('active');
			});
		},

		videolauncher : {
			test : function () {
				return $('.video-player-start').length
			},
			run : function () {

				$('body').append('<div class="video-player"><div class="player-container"><div class="player-inner-wrap"><div class="iframe-wrapper"><div class="close-btn"></div></div></div></div></div>');

				var vp = $('.video-player'),
					bgvid = $('#big-video-wrap');
				$('body').on('click','.video-player-start',function(event){
					event.preventDefault();
					bgvid.fadeOut(300);
					var url = $(this).attr('href');
					$('body').addClass('video-on');
					vp.css('display','block');
					setTimeout(function(){
						vp.css('opacity','1');
						vp.addClass('zoomed');
						setTimeout(function(){
							vp.find('.iframe-wrapper').append('<iframe src="'+url+'?autoplay=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
						},500);
					},50);
				});
				vp.on('click','.close-btn',function(event){
					event.preventDefault();
					vp.css('opacity','0').removeClass('zoomed');
					$('body').removeClass('video-on');
					bgvid.fadeIn(300);
					setTimeout(function(){
						vp.css('display','none');
						vp.find('iframe').remove();
					},500);
				})
			}
		},

		testimonialsloader : function () {
			$('body').append('<div class="testimonials-loader"><div class="pos-absolute w100 h100"><div class="display-table"><div class="display-table-cell v-middle"><div class="testimonial-content"><div class="close-btn"><i class="fa fa-times"></i></div><div class="content"></div></div></div></div></div></div>')
			$('body').on('click', '.testimonial-wrap .more',function(event){
				event.preventDefault();
				var container = $('.testimonials-loader .testimonial-content');
				var testwrap = $(this).parent('.testimonial-wrap');
				var content = testwrap.attr('data-full-quote');
				var name = testwrap.find('.name').text();
				var age = testwrap.find('.age').text();
				var img = testwrap.find('.circle-img').prop('outerHTML');
				if (img === undefined) { img = ''; }
				container.find('.content').html('<div class="quote">'+content+'</div>'+img+'<div class="name">'+name+'</div><div class="desc">'+age+'</div>');
				$('.testimonials-loader').addClass('show');
				$('.testimonials-loader .close-btn').on('click',function(event){
					event.preventDefault();
					$('.testimonials-loader').removeClass('show');
				});
			});
		},


		resize : function () {
			wb.getsizes();
			wb.setsizes();
			wb.responsiveimages();
			wb.positionvids();
			wb.testimonial_heights();
		},

		init : function(){
			// must call first

			wb.tracksOnClick();
			wb.resize();
			wb.mnav();
			wb.blogsearch();
			wb.blogfilter();
			wb.hiliter();
			wb.delayer();
			wb.positionvids();
			wb.homevids();
			wb.testimonialsslider();
			wb.homeslider();
			wb.videolauncher.run();

			if ($('.testimonial-wrap').length) {
				wb.testimonialsloader();
			}

			wb.testimonial_heights();
			
			if (!touch) {
				wb.scroller();
				$w.on("scroll", wb.scroll);
			}

			$(window).resize(function(){
				clearTimeout(rt);
				resized = true;
				rt = setTimeout(function(){
					if (resized === true) {
						wb.resize();
						resized = false;
					}
				},46);
			});

		}
	};

	// get the party started already!
	wb.init();

}(jQuery, window));

