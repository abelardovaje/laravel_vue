webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _home = __webpack_require__(21);

	var _home2 = _interopRequireDefault(_home);

	var _contactForm = __webpack_require__(33);

	var _contactForm2 = _interopRequireDefault(_contactForm);

	var _store = __webpack_require__(41);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.component('contact-form', _contactForm2.default);
	new _vue2.default({
	  el: '#app',
	  store: _store2.default,
	  render: function render(createEl) {
	    return createEl(_home2.default);
	  }
	});

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(13),
	  /* template */
	  __webpack_require__(14),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\Users\\5200012\\Desktop\\vue-app-laravel\\resources\\assets\\src\\components\\layouts\\header.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] header.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-28eb54d4", Component.options)
	  } else {
	    hotAPI.reload("data-v-28eb54d4", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		data: function data() {
			return {
				title: 'header'
			};
		}
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h1', [_vm._v("Header")]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "to": "/"
	    }
	  }, [_vm._v("Home")]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "to": "/users"
	    }
	  }, [_vm._v("User")])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-28eb54d4", module.exports)
	  }
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(16),
	  /* template */
	  __webpack_require__(17),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\Users\\5200012\\Desktop\\vue-app-laravel\\resources\\assets\\src\\components\\layouts\\footer.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] footer.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6b501cb8", Component.options)
	  } else {
	    hotAPI.reload("data-v-6b501cb8", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//


	exports.default = {
		data: function data() {
			return {};
		}
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('h1', [_vm._v("Footer")])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6b501cb8", module.exports)
	  }
	}

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(22)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(31),
	  /* template */
	  __webpack_require__(32),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\Users\\5200012\\Desktop\\vue-app-laravel\\resources\\assets\\src\\components\\home\\home.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5adddec8", Component.options)
	  } else {
	    hotAPI.reload("data-v-5adddec8", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(29)("b115c0ba", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5adddec8\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue", function() {
	     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5adddec8\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(24)(undefined);
	// imports


	// module
	exports.push([module.id, "\n.message {\r\n  color: blue;\n}\r\n", ""]);

	// exports


/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _header = __webpack_require__(12);

	var _header2 = _interopRequireDefault(_header);

	var _footer = __webpack_require__(15);

	var _footer2 = _interopRequireDefault(_footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//


	exports.default = {
	  data: function data() {
	    return {
	      title: 'Home pages'
	    };
	  },

	  components: {
	    'app-header': _header2.default,
	    'app-footer': _footer2.default

	  }
	};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "home-container"
	  }, [_c('app-header'), _vm._v(" "), _c('contact-form'), _vm._v(" "), _c('app-footer')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5adddec8", module.exports)
	  }
	}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(34)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(36),
	  /* template */
	  __webpack_require__(40),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\Users\\5200012\\Desktop\\vue-app-laravel\\resources\\assets\\src\\components\\home\\contact-form.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] contact-form.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0b8b87e4", Component.options)
	  } else {
	    hotAPI.reload("data-v-0b8b87e4", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(29)("925bd2ae", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0b8b87e4\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./contact-form.vue", function() {
	     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0b8b87e4\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./contact-form.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(24)(undefined);
	// imports


	// module
	exports.push([module.id, "\n.message {\r\n  color: blue;\n}\r\n", ""]);

	// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _contactTable = __webpack_require__(37);

	var _contactTable2 = _interopRequireDefault(_contactTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      title: 'Contacts',
	      name: '',
	      address: '',
	      email: '',
	      id: 0,
	      inputs: '',
	      toggleFormAction: true,
	      rowData: {}

	    };
	  },

	  components: {
	    'contact-table': _contactTable2.default
	  },
	  methods: {
	    addContact: function addContact() {

	      var data = {
	        name: this.name,
	        address: this.address,
	        email: this.email,
	        id: this.id ? this.id : ''
	      };

	      if (!this.toggleFormAction) {
	        //show add contact button on the form
	        this.toggleFormAction = !this.toggleFormAction;
	        this.name = "";
	        this.address = "";
	        this.email = "";
	        this.$store.commit('editData', data);
	        return;
	      }

	      this.$store.state.users.push(data);
	    },
	    onToggleFormAction: function onToggleFormAction(data) {

	      //set row data on the form inputs
	      this.name = data.name;
	      this.address = data.address;
	      this.email = data.email;
	      this.id = data.id;

	      //show save button on the form
	      this.toggleFormAction = !this.toggleFormAction;
	    }
	  }

	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(38),
	  /* template */
	  __webpack_require__(39),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\Users\\5200012\\Desktop\\vue-app-laravel\\resources\\assets\\src\\components\\home\\contact-table.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] contact-table.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6d48aef4", Component.options)
	  } else {
	    hotAPI.reload("data-v-6d48aef4", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//


	var _data = {
		contacts: [],
		key: undefined,
		searchText: ''
	};

	var methods = {
		addContact: function addContact(data) {
			if (data) {

				if (this.contacts.length == 0) {
					data.id = 1;
					this.contacts.push(data);
					return;
				}

				data.id = this.contacts[this.contacts.length - 1].id + 1;
				this.contacts.push(data);
			}
		},
		deleteContact: function deleteContact(key) {
			this.$store.state.users.splice(key, 1);
		},
		editContact: function editContact(id) {

			var _self = this;
			this.$store.state.users.filter(function (item) {
				if (item.id === id) {
					_self.$emit('toggleFormAction', item);
				}
			})[0];
		},
		contactsData: function contactsData(c) {
			var self = this;

			return c.filter(function (item) {

				if (!self.searchText) {
					return item;
				}

				for (var x in item) {
					if (item[x].toString().includes(self.searchText)) {
						return item;
					}
				}
			});
		}
	};

	exports.default = {
		data: function data() {
			return _data;
		},

		methods: methods,
		watch: {
			searchText: function searchText() {
				this.contactsData(this.$store.state.users);
			}
		},
		computed: {
			users: function users() {
				console.log(this.$store.getters.usersList);
				return this.$store.getters.usersList;
			}
		},
		created: function created() {}
	};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.searchText),
	      expression: "searchText"
	    }],
	    attrs: {
	      "type": "text",
	      "placeholder": "Search"
	    },
	    domProps: {
	      "value": (_vm.searchText)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.searchText = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('table', {
	    staticClass: "table table-hover"
	  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.contactsData(_vm.users)), function(value, key) {
	    return _c('tr', [_c('td', [_vm._v(_vm._s(value.id))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value.address))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value.email))]), _vm._v(" "), _c('td', [_c('button', {
	      on: {
	        "click": function($event) {
	          _vm.deleteContact(key)
	        }
	      }
	    }, [_vm._v("Delete")]), _vm._v(" "), _c('button', {
	      on: {
	        "click": function($event) {
	          _vm.editContact(value.id)
	        }
	      }
	    }, [_vm._v("Edit")])])])
	  }))])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('thead', [_c('tr', [_c('th', [_vm._v("ID")]), _vm._v(" "), _c('th', [_vm._v("NAME")]), _vm._v(" "), _c('th', [_vm._v("ADDRESS")]), _vm._v(" "), _c('th', [_vm._v("EMAIL")]), _vm._v(" "), _c('th', [_vm._v("ACTION")])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6d48aef4", module.exports)
	  }
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h4', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('form', {
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.addContact($event)
	      }
	    }
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.name),
	      expression: "name"
	    }],
	    attrs: {
	      "type": "text",
	      "placeholder": "Name"
	    },
	    domProps: {
	      "value": (_vm.name)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.name = $event.target.value
	      }
	    }
	  }), _c('br'), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.address),
	      expression: "address"
	    }],
	    attrs: {
	      "type": "text",
	      "placeholder": "Address"
	    },
	    domProps: {
	      "value": (_vm.address)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.address = $event.target.value
	      }
	    }
	  }), _c('br'), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.email),
	      expression: "email"
	    }],
	    attrs: {
	      "type": "text",
	      "placeholder": "Email"
	    },
	    domProps: {
	      "value": (_vm.email)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.email = $event.target.value
	      }
	    }
	  }), _c('br'), _vm._v(" "), (_vm.toggleFormAction) ? _c('button', [_vm._v("Add contact")]) : _vm._e(), _vm._v(" "), (!_vm.toggleFormAction) ? _c('button', [_vm._v("Save")]) : _vm._e()]), _vm._v(" "), _c('contact-table', {
	    on: {
	      "toggleFormAction": _vm.onToggleFormAction
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0b8b87e4", module.exports)
	  }
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuex = __webpack_require__(42);

	var _vuex2 = _interopRequireDefault(_vuex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vuex2.default);

	var store = new _vuex2.default.Store({
		state: {
			users: [{
				id: 1,
				name: 'abel',
				address: 'cavite',
				email: 'abel@gmail.com'
			}],
			formData: {
				name: '',
				email: '',
				address: ''
			}
		},
		getters: {
			usersList: function usersList(state) {
				return state.users;
			}
		},
		mutations: {
			editData: function editData(state, user) {
				var _self = this;

				state.users.filter(function (item) {
					if (item.id === user.id) {
						for (var x in item) {

							item[x] = user[x];
						}
					}
				});
			},
			addUser: function addUser(state, data) {
				var index = _.findLastIndex(state.users, 'id');
				data.id = state.users[index].id + 1;
				state.users.push(data);
				state.formData = {};
			},
			deleteUser: function deleteUser(state, key) {

				state.users.splice(key, 1);
			},
			updateUser: function updateUser(state, data) {

				for (var x in state.users[data.key]) {
					state.users[data.key][x] = data.payload[x];
				}

				state.formData = {};
			},
			setFormData: function setFormData(state, data) {
				state.formData = data;
			}
		},
		actions: {
			addUser: function addUser(context, payload) {
				context.commit('addUser', payload);
			}
		}
	});

	exports.default = store;

/***/ })
]);