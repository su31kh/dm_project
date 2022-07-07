var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$("#home-top").headroom(),$("img.lazy").lazyload({effect:"fadeIn"}),$("a.new-window, .footer-list a").click(function(){return $(this).target="_blank",window.open($(this).prop("href")),!1}),$("#notes a").click(function(){return $(this).target="_blank",window.open($(this).prop("href")),!1}),$("a.email-lnk").each(function(){var o=$(this),t=o.attr("href").split("||");o.attr("href","mailto:"+t[1]+t[0])}),$(window).scroll(function(){var o=$(window).scrollTop();o>=5?$("header").removeClass("nav-root"):6>=o&&$("header").addClass("nav-root")});

}
