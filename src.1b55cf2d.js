parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"VoHJ":[function(require,module,exports) {
"use strict";function t(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=e(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,u=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw u}}}}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var u=function(){function e(t){var n=this;r(this,e),this.root=document.querySelector(t),this.root.innerHTML=e.html(),this.root.querySelector(".new-entry").addEventListener("click",function(){n.onNewEntryBtnClick()}),this.load()}return a(e,[{key:"load",value:function(){var e,n=t(JSON.parse(localStorage.getItem("budget-tracker-entries-dev")||"[]"));try{for(n.s();!(e=n.n()).done;){var r=e.value;this.addEntry(r)}}catch(o){n.e(o)}finally{n.f()}this.updateSummary()}},{key:"updateSummary",value:function(){var t=this.getEntryRows().reduce(function(t,e){return t+e.querySelector(".input-amount").value*("expense"===e.querySelector(".input-type").value?-1:1)},0),e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t);this.root.querySelector(".total").textContent=e}},{key:"save",value:function(){var t=this.getEntryRows().map(function(t){return{date:t.querySelector(".input-date").value,description:t.querySelector(".input-description").value,type:t.querySelector(".input-type").value,amount:parseFloat(t.querySelector(".input-amount").value)}});localStorage.setItem("budget-tracker-entries-dev",JSON.stringify(t)),this.updateSummary()}},{key:"addEntry",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.root.querySelector(".entries").insertAdjacentHTML("beforeend",e.entryHtml());var r=this.root.querySelector(".entries tr:last-of-type");r.querySelector(".input-date").value=n.date||(new Date).toISOString().replace(/T.*/,""),r.querySelector(".input-description").value=n.description||"",r.querySelector(".input-type").value=n.type||"income",r.querySelector(".input-amount").value=n.amount||0,r.querySelector(".delete-entry").addEventListener("click",function(e){t.onDeleteEntryBtnClick(e)}),r.querySelectorAll(".input").forEach(function(e){e.addEventListener("change",function(){return t.save()})})}},{key:"getEntryRows",value:function(){return Array.from(this.root.querySelectorAll(".entries tr"))}},{key:"onNewEntryBtnClick",value:function(){this.addEntry()}},{key:"onDeleteEntryBtnClick",value:function(t){t.target.closest("tr").remove(),this.save()}}],[{key:"html",value:function(){return'\n          <table class="budget-tracker">\n              <thead>\n                  <tr>\n                      <th>Date</th>\n                      <th>Description</th>\n                      <th>Type</th>\n                      <th>Amount</th>\n                      <th></th>\n                  </tr>\n              </thead>\n              <tbody class="entries"></tbody>\n              <tbody>\n                  <tr>\n                      <td colspan="5" class="controls">\n                          <button type="button" class="new-entry">New Entry</button>\n                      </td>\n                  </tr>\n              </tbody>\n              <tfoot>\n                  <tr>\n                      <td colspan="5" class="summary">\n                          <strong>Total:</strong>\n                          <span class="total">$0.00</span>\n                      </td>\n                  </tr>\n              </tfoot>\n          </table>\n      '}},{key:"entryHtml",value:function(){return'\n          <tr>\n              <td>\n                  <input class="input input-date" type="date">\n              </td>\n              <td>\n                  <input class="input input-description" type="text" placeholder="Add a Description (e.g. wages, bills, etc.)">\n              </td>\n              <td>\n                  <select class="input input-type">\n                      <option value="income">Income</option>\n                      <option value="expense">Expense</option>\n                  </select>\n              </td>\n              <td>\n                  <input type="number" class="input input-amount">\n              </td>\n              <td>\n                  <button type="button" class="delete-entry">&#10005;</button>\n              </td>\n          </tr>\n      '}}]),e}();exports.default=u;
},{}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var e=r(require("./BudgetTracker.js"));function r(e){return e&&e.__esModule?e:{default:e}}new e.default("#app");
},{"./styles.css":"D9Nj","./BudgetTracker.js":"VoHJ"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-cehui5/src.1b55cf2d.js.map