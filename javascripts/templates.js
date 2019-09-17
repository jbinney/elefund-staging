this["Elefund"] = this["Elefund"] || {};
this["Elefund"]["templates"] = this["Elefund"]["templates"] || {};
this["Elefund"]["templates"]["portfolio-details"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <a href=\""
    + container.escapeExpression(((helper = (helper = helpers.crunchbase_url || (depth0 != null ? depth0.crunchbase_url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"crunchbase_url","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">Crunchbase <i class=\"icomoon icon-arrow-right\"></i></a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal-backdrop\"></div>\n<div class=\"modal-container\">\n  <div class=\"modal-body\">\n    <button type=\"button\" class=\"modal-close icomoon icon-close\"></button>\n\n    <div class=\"company-head\">\n      <div class=\"company-logo brand-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        <img class=\"img\" src=\"/images/brands/"
    + alias4(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data}) : helper)))
    + "\" width=\"118\" alt=\""
    + alias4(((helper = (helper = helpers.company || (depth0 != null ? depth0.company : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"company","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n      <div class=\"company-info\">\n        <h2 class=\"company-name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n        <p class=\"lead\">"
    + alias4(((helper = (helper = helpers.sector || (depth0 != null ? depth0.sector : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sector","hash":{},"data":data}) : helper)))
    + "\n        <br>"
    + alias4(((helper = (helper = helpers.stage_info || (depth0 != null ? depth0.stage_info : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stage_info","hash":{},"data":data}) : helper)))
    + "</p>\n      </div>\n    </div>\n\n    <div class=\"company-body\">\n      "
    + ((stack1 = (helpers.breaklines || (depth0 && depth0.breaklines) || alias2).call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"breaklines","hash":{},"data":data})) != null ? stack1 : "")
    + "\n    </div>\n\n    <div class=\"company-footer\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.crunchbase_url : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      <a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias4(((helper = (helper = helpers.hostname || (depth0 != null ? depth0.hostname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hostname","hash":{},"data":data}) : helper)))
    + " <i class=\"icomoon icon-arrow-right\"></i></a>\n    </div>\n\n  </div>\n</div>\n";
},"useData":true});
this["Elefund"]["templates"]["portfolio-items"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <li class=\"portfolio-item\">\n    <a href=\"#"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"portfolio-link toggle-modal brand-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n      <img src=\"/images/brands/"
    + alias4(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data}) : helper)))
    + "\" class=\"portfolio-image\" alt=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    </a>\n  </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.companies : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});