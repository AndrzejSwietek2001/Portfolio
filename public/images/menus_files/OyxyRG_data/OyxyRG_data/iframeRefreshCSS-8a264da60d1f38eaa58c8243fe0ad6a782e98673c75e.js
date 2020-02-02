window.HUB_EVENTS={ASSET_ADDED:"ASSET_ADDED",ASSET_DELETED:"ASSET_DELETED",ASSET_DESELECTED:"ASSET_DESELECTED",ASSET_SELECTED:"ASSET_SELECTED",ASSET_UPDATED:"ASSET_UPDATED",CONSOLE_CHANGE:"CONSOLE_CHANGE",CONSOLE_CLOSED:"CONSOLE_CLOSED",CONSOLE_EVENT:"CONSOLE_EVENT",CONSOLE_OPENED:"CONSOLE_OPENED",CONSOLE_RUN_COMMAND:"CONSOLE_RUN_COMMAND",CONSOLE_SERVER_CHANGE:"CONSOLE_SERVER_CHANGE",EMBED_ACTIVE_PEN_CHANGE:"EMBED_ACTIVE_PEN_CHANGE",EMBED_ACTIVE_THEME_CHANGE:"EMBED_ACTIVE_THEME_CHANGE",EMBED_ATTRIBUTE_CHANGE:"EMBED_ATTRIBUTE_CHANGE",EMBED_RESHOWN:"EMBED_RESHOWN",IFRAME_PREVIEW_RELOAD_CSS:"IFRAME_PREVIEW_RELOAD_CSS",IFRAME_PREVIEW_URL_CHANGE:"IFRAME_PREVIEW_URL_CHANGE",KEY_PRESS:"KEY_PRESS",PEN_CHANGE_SERVER:"PEN_CHANGE_SERVER",PEN_CHANGE:"PEN_CHANGE",PEN_EDITOR_CLOSE:"PEN_EDITOR_CLOSE",PEN_EDITOR_CODE_FOLD:"PEN_EDITOR_CODE_FOLD",PEN_EDITOR_ERRORS:"PEN_EDITOR_ERRORS",PEN_EDITOR_EXPAND:"PEN_EDITOR_EXPAND",PEN_EDITOR_FOLD_ALL:"PEN_EDITOR_FOLD_ALL",PEN_EDITOR_LOADED:"PEN_EDITOR_LOADED",PEN_EDITOR_REFRESH_REQUEST:"PEN_EDITOR_REFRESH_REQUEST",PEN_EDITOR_RESET_SIZES:"PEN_EDITOR_RESET_SIZES",PEN_EDITOR_SIZES_CHANGE:"PEN_EDITOR_SIZES_CHANGE",PEN_EDITOR_UI_CHANGE_SERVER:"PEN_EDITOR_UI_CHANGE_SERVER",PEN_EDITOR_UI_CHANGE:"PEN_EDITOR_UI_CHANGE",PEN_EDITOR_UI_DISABLE:"PEN_EDITOR_UI_DISABLE",PEN_EDITOR_UI_ENABLE:"PEN_EDITOR_UI_ENABLE",PEN_EDITOR_UNFOLD_ALL:"PEN_EDITOR_UNFOLD_ALL",PEN_ERROR_INFINITE_LOOP:"PEN_ERROR_INFINITE_LOOP",PEN_ERROR_RUNTIME:"PEN_ERROR_RUNTIME",PEN_ERRORS:"PEN_ERRORS",PEN_LIVE_CHANGE:"PEN_LIVE_CHANGE",PEN_LOGS:"PEN_LOGS",PEN_MANIFEST_CHANGE:"PEN_MANIFEST_CHANGE",PEN_MANIFEST_FULL:"PEN_MANIFEST_FULL",PEN_SAVED:"PEN_SAVED",POPUP_CLOSE:"POPUP_CLOSE",POPUP_OPEN:"POPUP_OPEN",POST_CHANGE:"POST_CHANGE",POST_SAVED:"POST_SAVED",PROCESSING_COMPLETE:"PROCESSING_COMPLETE",PROCESSING_STARTED:"PROCESSED_STARTED"},function(){const E=30,_=["css_pre_processor","css_prefix","css_starter","description","head","html_classes","html_pre_processor","js_pre_processor","dependencies","resources","title"],N={DEPENDENCIES:"DEPENDENCIES",IMPORTS:"IMPORTS"},S=["css_pre_processor","css_prefix","css_starter","css","dependencies","description","editor_settings","head","html_classes","html_pre_processor","html","id","js_pre_processor","js","newTags","parent","private","resources","slug_hash_private","slug_hash","tags","team_id","template","title","user_id"],e=["css_pre_processor","css_prefix","css_starter","css","dependencies","head","html_classes","html_pre_processor","html","js_pre_processor","js","resources"],T=["html","css","js"],O="INLINE_PEN_STYLESHEET_ID",R="INLINE_PEN_JS_ID",P=50;window.PEN_CONSTANTS={CANONICAL_IMPORTS:N,COLLAB_SYNC_ATTRIBUTES:_,DATA_ATTRIBUTES:S,INLINE_PEN_JS_ID:R,INLINE_PEN_STYLESHEET_ID:O,MAX_DEPENDENCIES:E,MAX_PACKAGE_VERSIONS:P,PREVIEW_ATTRIBUTES:e,TYPES:T}}(),function(){function E(E){const S=_(E),{action:e,css:T}=S;HUB_EVENTS.IFRAME_PREVIEW_RELOAD_CSS===e&&N(T)}function _(E){return"object"==typeof E.data?E.data:{}}function N(E){const _=e();S(E),_&&_.parentNode.removeChild(_),window.PrefixFree&&StyleFix.process()}function S(E){const _=document.createElement("style");_.type="text/css",_.className=PEN_CONSTANTS.INLINE_PEN_STYLESHEET_ID,_.styleSheet?_.styleSheet.cssText=E:_.appendChild(document.createTextNode(E)),T.appendChild(_)}function e(){const E=Array.from(document.getElementsByTagName("style"));return E.find(E=>PEN_CONSTANTS.INLINE_PEN_STYLESHEET_ID===E.className)}const T=document.head||document.getElementsByTagName("head")[0];window.addEventListener("message",E,!1)}();