/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 208);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(13);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(32);
var toPrimitive = __webpack_require__(24);
var dP = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(51);
var defined = __webpack_require__(15);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(22)('wks');
var uid = __webpack_require__(14);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(37);
var enumBugKeys = __webpack_require__(16);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(1);
var TAG = __webpack_require__(6)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(22)('keys');
var uid = __webpack_require__(14);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(9);
var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(12) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(9);
var LIBRARY = __webpack_require__(12);
var wksExt = __webpack_require__(26);
var defineProperty = __webpack_require__(4).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(6);


/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

//
// Extension messaging system.
//
//
// This module, when used, allows communication among any extension-related
// contexts (background script, content scripts, development tools scripts, any
// JS code running in extension-related HTML pages, such as popups, options,
// ...).
//
// To start using the system, one needs to invoke exported `init` function from
// background script (once), passing 'bg' as the name of the context, optionally
// providing message handling functions. This will install onConnect listener
// for incoming Port connections from all other context.
//
// Any other context (with arbitrary name and (optional) message handlers) also
// invokes the `init` function. In this case, Port is created and connected to
// background script.
//
// Note: due to bug https://code.google.com/p/chromium/issues/detail?id=356133
// we also have dedicated name for developer tools context: 'dt'. Once this bug
// is fixed, the only reserved context name will be 'bg' for background again.
//
// To avoid race conditions, make sure that your background script calls `init`
// function after it is started, so it doesn't miss any Port connections
// attempts.
//
// To be able to handle commands (or associated messages) in contexts (both
// background and non-background), one must pass message handling functions in
// `handlers` object when invoking respective `init` function for given context.
// The `handlers` object is a function lookup table, i.e. object with function
// names as its keys and functions (code) as corresponding values. The function
// will be invoked, when given context is requested to handle message
// representing command with name that can be found as a key of the `handlers`
// object. Its return value (passed in callback, see below) will be treated as
// value that should be passed back to the requestor.
//
// Each message handling function can take any number of parameters, but MUST
// take callback as its last argument and invoke this callback when the message
// handler is done with processing of the message (regardless if synchronous or
// asynchronous). The callback takes one argument, this argument is treated as
// return value of the message handler. The callback function MUST be invoked
// once and only once.
//
// The `init` function returns (for any context it is invoked in) messaging
// object with two function: `cmd` and `bcast`, both used for sending messages
// to different contexts (or same context in different windows / tabs).
//
// Both functions behave the same way and have also the same arguments, the only
// difference is that the `cmd` callback (its last argument, if provided) is
// invoked with only one response value from all collected responses, while to
// the `bcast` callback (if provided) we pass array with all valid responses we
// collected while broadcasting given request.
//
// `cmd` and `bcast` functions arguments:
//
// (optional) [int] tabId: if not specified, broadcasted to all tabs,
//      if specified, sent only to given tab, can use SAME_TAB value here
//      (exported from this module, too)
//
// (optional) [array] contexts: if not specified, broadcasted to all contexts,
//      if specified, sent only to listed contexts (context name is provided
//      as the first argument when invoking the `init` function)
//
// (required) [string] command: name of the command to be executed
//
// (optional) [any type] arguments: any number of aruments that follow command
//      name are passed to execution handler when it is invoked
//
// (optional) [function(result)] callback: if provided (as last argument to
//      `cmd` or `bcast`), this function will be invoked when the response(s)
//      is/are received
//
// The `cmd` and `bcast` functions return `true` if the processing of the
// request was successful (i.e. if all the arguments were recognized properly),
// otherwise it returns `false`.
//
// When `cmd` or `bcast` function is invoked from background context, a set of
// context instances, to which the message will be sent to, is created based on
// provided arguments (tab id and context names). The set is NOT filtered by
// provided command name, as background context doesn't know what message
// handlers are used in all the contexts (i.e. it doesn't know the function
// names in message handling lookup function tables of non-background contexts).
//
// When tab id or context names are NOT provided, the command is broadcasted to
// all possible context instances, which the background knows about, and that
// may require a lot of messaging... So for performance reasons it is wise to
// provide tab-id and / or context name(s) whenever possible to reduce the size
// of the context instances set as much as it gets.
//
// When message corresponding to command is then received in non-background
// context, the handler lookup table is checked if it contains handler for
// requested command name. If so, the handler is invokend and its "return value"
// (passed in callback, to allow asynchronous message handling) is then sent
// back to background. If there is no corresponding handler (for requested
// command name), message indicating that is sent back instead.
//
// When background collects all the responses back from all the context
// instances it sent the message to, it invokes the `cmd` or `bcast` callback,
// passing the response value(s). If there was no callback provided, the
// collected response values are simply dropped.
//
// When `cmd` or `bcast` function is invoked from non-background context, the
// request message is sent to background. Background then dispatches the request
// to all relevant context instances that match provided filters (again, based on
// passed tab id and / or context names), and dispatches the request in favor of
// the context instance that sent the original request to background. The
// dispatching logic is described above (i.e. it is the same as if the request
// was sent by background).
//
// There is one difference though: if background has corresponding handler for
// requested command name (and background context is not filtered out when
// creating the set of contexts), this handler is invoked (in background
// context) and the "return value" is also part of the collected set of
// responses.
//
// When all the processing in all the context instances (including background
// context, if applicable) is finished and responses are collected, the
// responses are sent back to the original context instance that initiated the
// message processing.
//
//
// EXAMPLE:
//
// background script:
// -----
//
// var msg = require('msg').init('bg', {
//   square: function(what, done) { done(what*what); }
// });
//
// setInterval(function() {
//   msg.bcast(/* ['ct'] */, 'ping', function(responses) {
//     console.log(responses);  // --->  ['pong','pong',...]
//   });
// }, 1000);  // broadcast 'ping' each second
//
//
// content script:
// -----
//
// var msg = require('msg').init('ct', {
//   ping: function(done) { done('pong'); }
// });
//
// msg.cmd(/* ['bg'] */, 'square', 5, function(res) {
//   console.log(res);  // ---> 25
// });
//
// ----------
//
// For convenient sending requests from non-background contexts to
// background-only (as this is most common case: non-bg context needs some info
// from background), there is one more function in the messaging object returned
// by the init() function. The function is called 'bg' and it prepends the list
// of passed arguments with ['bg'] array, so that means the reuqest is targeted
// to background-only. The 'bg' function does NOT take 'tabId' or 'contexts'
// parameters, the first argument must be the command name.
//
// EXAMPLE:
//
// background script
// -----
//
// ( ... as above ... )
//
// content script:
// -----
//
// var msg = require('msg').init('ct', {
//   ping: function(done) { done('pong'); }
// });
//
// msg.bg('square', 5, function(res) {
//   console.log(res);  // ---> 25
// });
//
// ----------
//
// There are two dedicated background handlers that, when provided in `handlers`
// object for `bg` context in `init` function, are invoked by the messaging
// system itself. These handlers are:
//
// + onConnect: function(contextName, tabId),
// + onDisconnect: function(contextName, tabId)
//
// These two special handlers, if provided, are invoked when new Port is
// connected (i.e. when `init` function is invoked in non-bg context), and
// then when they are closed (disconnected) later on. This notification system
// allows to maintain some state about connected contexts in extension
// backround.
//
// Please note that unlike all other handlers passed as the `handlers` object to
// `init` function, these two special handlers do NOT take callback as their
// last arguments. Any return value these handlers may return is ignored.
//
// The `contextName` parameter is value provided to non-background `init`
// function, while the `tabId` is provided by the browser. If tabId is not
// provided by the browser, the `tabId` will be `Infinity`.
//


// constant for "same tab as me"
var SAME_TAB = -1000; // was -Infinity, but JSON.stringify() + JSON.parse() don't like that value

// run-time API:
// variable + exported function to change it, so it can be mocked in unit tests
/* global chrome */
var runtime = (typeof chrome === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(chrome)) === 'object' && chrome.runtime;
// the same for devtools API:
var devtools = (typeof chrome === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(chrome)) === 'object' && chrome.devtools;

// utility function for looping through object's own keys
// callback: function(key, value, obj) ... doesn't need to use all 3 parameters
// returns object with same keys as the callback was invoked on, values are the
//   callback returned values ... can be of course ignored by the caller, too
function forOwnProps(obj, callback) {
  if (typeof callback !== 'function') {
    return null;
  }
  var res = {};
  for (var key in obj) {
    // eslint-disable-line no-restricted-syntax
    if (obj.hasOwnProperty(key)) {
      // eslint-disable-line no-prototype-builtins
      res[key] = callback(key, obj[key], obj);
    }
  }
  return res;
}

// we wrap the whole module functionality into isolated scope, so that later we
// can instantiate multiple parallel scopes for unit testing.
// The module will still seem to hold singleton object, because we'll create
// this singleton and will export its methods as (whole) module methods.

function Messaging() {
  // handlers available in given context (function lookup table), set in `init()`
  // format:
  // {
  //   (string)<functioName>: (function)<code>,
  //   ...
  // }
  this.handlers = {};

  // id assigned by background, used in non-background contexts only
  // in background set to 'bg'
  this.id = null;

  // port used for communication with background (i.e. not used in background)
  // type: (chrome.runtime) Port
  this.port = null;

  // map of ports for connected extensions
  // key = extension id, value = port
  this.extPorts = {};

  // callback lookup table: if request waits for response, this table holds
  // the callback function that will be invoke upon response
  // format:
  // {
  //   (int)<requestId>: (function)<callback code>,
  //   ...
  // }
  this.cbTable = {};

  // background table of pending requests
  // format:
  // {
  //   (string)<portId>: [ { id: (int)<requestId>, cb: (function)<callback> }, ...],
  //   ...
  // }
  this.pendingReqs = {};

  // unique context id, used by background
  this.uId = 1;

  // request id, used by all contexts
  this.requestId = 1;

  // mapping non-background context names to objects indexed by name of the context
  // instances, holding { tab-id, (chrome.runtime.)Port } pairs,
  // used for message dispatching
  // format:
  // {
  //   (string)<category>: {
  //     (string)<id>: { tabId: (optional)<int>, port: <chrome.runtime.Port> },
  //     ...
  //   },
  //   ...
  // }
  // background-only variable
  this.portMap = {};

  // runetime and devtools references, so that we can change it in unit tests
  this.runtime = runtime;
  this.devtools = devtools;
}

// background function for selecting target ports to which we broadcast the request
// fromBg: is the request to collect targets from bacground, or based on message?
// targ*: filter for target ports
// src*: information about source port
// returns array of { port: (chrome.runtime.Port), id: (string) }
Messaging.prototype.selectTargets = function selectTargets(fromBg, targTabId, targCategories, srcCategory, srcPortId) {
  var res = [];
  // eslint-disable-next-line no-underscore-dangle
  var _port = this.portMap[srcCategory] && this.portMap[srcCategory][srcPortId];
  if (!fromBg && !_port) {
    // this should never happen, we just got request from this port!
    return [];
  }
  if (!fromBg && targTabId === SAME_TAB) {
    targTabId = _port.tabId; // eslint-disable-line no-param-reassign
  }
  // iterate through portMap, pick targets:
  forOwnProps(this.portMap, function (categ, portGroup) {
    if (targCategories && targCategories.indexOf(categ) === -1) {
      // we are interested only in specified contexts,
      // and this category is not on the list
      return;
    }
    forOwnProps(portGroup, function (id, _ref) {
      if (targTabId && targTabId !== _ref.tabId) {
        // we are interested in specified tab id,
        // and this id doesn't match
        return;
      }
      if (fromBg || _port.port !== _ref.port) {
        // do not ask me back, ask only different ports
        res.push({ port: _ref.port, id: id });
      }
    });
  });
  return res;
};

// message handler (useb by both background and non-backound)
Messaging.prototype.onCustomMsg = function onCustomMsg(message) {
  /* eslint-disable no-underscore-dangle */
  var _port = void 0;
  var _arr = void 0;
  var _localHandler = void 0;
  var _ref = void 0;
  var i = void 0;
  /* eslint-enable */

  // helper functions:

  // send response on result (non-background):
  function sendResultCb(result) {
    if (message.sendResponse) {
      this.port.postMessage({
        cmd: 'response',
        portId: this.id,
        reqId: message.reqId,
        resultValid: true,
        result: result
      });
    }
  }

  // create callback waiting for N results, then send response (background):
  function createCbForMoreResults(N) {
    var _this = this;

    var results = [];
    var myId = this.runtime.id;
    return function (result, resultValid) {
      if (resultValid !== false) {
        // can be either `true` or `undefined`
        results.push(result);
      }
      N -= 1; // eslint-disable-line no-param-reassign
      if (!N && message.sendResponse && ( // eslint-disable-line no-cond-assign
      (_port = _this.extPorts[message.extensionId]) || _this.portMap[message.category] && (_port = _this.portMap[message.category][message.portId]))) {
        var response = {
          cmd: 'response',
          reqId: message.reqId,
          result: message.broadcast ? results : results[0]
        };

        if (message.extensionId) {
          response.extensionId = myId;
        }
        _port.port.postMessage(response);
      }
    }; // .bind(this);
  }

  // main message processing:
  if (!message || !message.cmd) {
    return;
  }
  if (message.cmd === 'setName') {
    this.id = message.name;
    return;
  }
  if (this.id === 'bg') {
    // background
    if (message.cmd === 'request') {
      var targetPorts = this.selectTargets(false, message.tabId, message.contexts, message.category, message.portId);
      var responsesNeeded = targetPorts.length;
      if (message.tabId === undefined && (!message.contexts || message.contexts.indexOf('bg') !== -1)) {
        // we are also interested in response from background itself
        if ( // eslint-disable-line no-cond-assign
        (_ref = this.handlers[message.cmdName]) && typeof _ref === 'function') {
          _localHandler = _ref;
          responsesNeeded += 1;
        }
      }
      if (!responsesNeeded) {
        // no one to answer that now
        if ( // eslint-disable-line no-cond-assign
        message.sendResponse && ((_port = this.extPorts[message.extensionId]) || this.portMap[message.category] && (_port = this.portMap[message.category][message.portId]))) {
          var response = {
            cmd: 'response',
            reqId: message.reqId,
            resultValid: false,
            result: message.broadcast ? [] : undefined
          };
          if (message.extensionId) {
            response.extensionId = this.runtime.id;
          }
          _port.port.postMessage(response);
        }
      } else {
        // some responses needed
        var cb = createCbForMoreResults.call(this, responsesNeeded);
        // send to target ports
        for (i = 0; i < targetPorts.length; i += 1) {
          _port = targetPorts[i];
          _port.port.postMessage({
            cmd: 'request',
            cmdName: message.cmdName,
            sendResponse: true,
            args: message.args,
            reqId: this.requestId
          });
          _arr = this.pendingReqs[_port.id] || [];
          _arr.push({ id: this.requestId, cb: cb });
          this.pendingReqs[_port.id] = _arr;
          this.requestId += 1;
        }
        // get local response (if background can provide it)
        if (_localHandler) {
          message.args.push(cb);
          _localHandler.apply(this.handlers, message.args);
        }
      }
    } else if (message.cmd === 'response') {
      var id = message.portId || message.extensionId;
      _arr = this.pendingReqs[id]; // warning: IE creates a copy here!
      if (_arr) {
        // some results from given port expected, find the callback for reqId
        i = 0;
        while (i < _arr.length && _arr[i].id !== message.reqId) {
          i += 1;
        }
        if (i < _arr.length) {
          // callback found
          _arr[i].cb(message.result, message.resultValid);
          this.pendingReqs[id].splice(i, 1); // need to use orig array (IE problem)
          if (!this.pendingReqs[id].length) {
            // ... same here
            delete this.pendingReqs[id];
          }
        }
      }
    } else if (message.cmd === 'updateTabId') {
      var context = message.context;
      var portId = message.portId;
      if ( // eslint-disable-line no-cond-assign
      (_port = this.portMap[context]) && (_port = _port[portId])) {
        if (typeof this.handlers.onDisconnect === 'function') {
          this.handlers.onDisconnect(context, _port.tabId);
        }
        _port.tabId = message.tabId;
        if (typeof this.handlers.onConnect === 'function') {
          this.handlers.onConnect(context, _port.tabId);
        }
      }
    }
  } else if (message.cmd === 'request') {
    // non-background
    _localHandler = this.handlers[message.cmdName];
    if (typeof _localHandler !== 'function') {
      if (message.sendResponse) {
        this.port.postMessage({
          cmd: 'response',
          portId: this.id,
          reqId: message.reqId,
          resultValid: false
        });
      }
    } else {
      message.args.push(sendResultCb.bind(this));
      _localHandler.apply(this.handlers, message.args);
    }
  } else if (message.cmd === 'response') {
    if (this.cbTable[message.reqId]) {
      this.cbTable[message.reqId](message.result);
      delete this.cbTable[message.reqId];
    }
  }
};

// invoke callbacks for pending requests and remove the requests from the structure
Messaging.prototype.closePendingReqs = function closePendingReqs(portId) {
  var arr = void 0;
  if (arr = this.pendingReqs[portId]) {
    // eslint-disable-line no-cond-assign
    for (var i = 0; i < arr.length; i += 1) {
      arr[i].cb(undefined, false);
    }
    delete this.pendingReqs[portId];
  }
};

Messaging.prototype.registerExternalConnection = function regExternalConnection(extensionId, port) {
  this.extPorts[extensionId] = { port: port };

  var onCustomMsg = void 0;
  var onDisconnect = void 0;

  // on disconnect: remove listeners and delete from port map
  function onDisconnectFn() {
    // listeners:
    port.onDisconnect.removeListener(onDisconnect);
    port.onMessage.removeListener(onCustomMsg);
    delete this.extPorts[extensionId];
    // close all pending requests:
    this.closePendingReqs(extensionId);
    // invoke custom onDisconnect handler
    if (typeof this.handlers.onExtensionDisconnect === 'function') {
      this.handlers.onExtensionDisconnect(extensionId);
    }
  }

  // install port handlers
  port.onMessage.addListener(onCustomMsg = this.onCustomMsg.bind(this));
  port.onDisconnect.addListener(onDisconnect = onDisconnectFn.bind(this));
  // invoke custom onConnect handler
  if (typeof this.handlers.onExtensionConnect === 'function') {
    this.handlers.onExtensionConnect(extensionId);
  }
};

Messaging.prototype.onConnectExternal = function onConnectExternal(port) {
  if (this.extPorts[port.sender.id]) {
    return;
  }

  this.registerExternalConnection(port.sender.id, port);
};

// backround onConnect handler
Messaging.prototype.onConnect = function onConnect(port) {
  // add to port map
  var categName = port.name || 'unknown';
  var portId = categName + '-' + this.uId;
  this.uId += 1;
  var portCateg = this.portMap[categName] || {};
  var tabId = port.sender && port.sender.tab && port.sender.tab.id || Infinity;
  portCateg[portId] = { port: port, tabId: tabId };
  this.portMap[categName] = portCateg;
  var onCustomMsg = void 0;
  var onDisconnect = void 0;
  // on disconnect: remove listeners and delete from port map
  function onDisconnectFn() {
    // listeners:
    port.onDisconnect.removeListener(onDisconnect);
    port.onMessage.removeListener(onCustomMsg);
    // port map:
    portCateg = this.portMap[categName];
    var _port = void 0; // eslint-disable-line no-underscore-dangle
    if (portCateg && (_port = portCateg[portId])) {
      // eslint-disable-line no-cond-assign
      tabId = _port.tabId;
      delete portCateg[portId];
    }
    // close all pending requests:
    this.closePendingReqs(portId);
    // invoke custom onDisconnect handler
    if (typeof this.handlers.onDisconnect === 'function') {
      this.handlers.onDisconnect(categName, tabId);
    }
  }
  // install port handlers
  port.onMessage.addListener(onCustomMsg = this.onCustomMsg.bind(this));
  port.onDisconnect.addListener(onDisconnect = onDisconnectFn.bind(this));
  // ask counter part to set its id
  port.postMessage({ cmd: 'setName', name: portId });
  // invoke custom onConnect handler
  if (typeof this.handlers.onConnect === 'function') {
    this.handlers.onConnect(categName, tabId);
  }
};

// create main messaging object, hiding all the complexity from the user
// it takes name of local context `myContextName`
//
// the returned object has two main functions: cmd and bcast
//
// they behave the same way and have also the same arguments, the only
// difference is that to `cmd` callback (if provided) is invoked with only one
// response value from all possible responses, while to `bcast` callback (if
// provided) we pass array with all valid responses we collected while
// broadcasting given request.
//
// functions arguments:
//
// (optional) [int] tabId: if not specified, broadcasted to all tabs,
//      if specified, sent only to given tab, can use SAME_TAB value here
//
// (optional) [array] contexts: if not specified, broadcasted to all contexts,
//      if specified, sent only to listed contexts
//
// (required) [string] command: name of the command to be executed
//
// (optional) [any type] arguments: any number of aruments that follow command
//      name are passed to execution handler when it is invoked
//
// (optional) [function(result)] callback: if provided (as last argument to
//      `cmd` or `bcast`) this function will be invoked when the response(s)
//      is/are received
//
// the functions return `true` if the processing of the request was successful
// (i.e. if all the arguments were recognized properly), otherwise it returns
// `false`.
//
// for non-bg contexts there is one more function in the messaging object
// available: 'bg' function, that is the same as 'cmd', but prepends the list of
// arguments with ['bg'], so that the user doesn't have to write it when
// requesting some info in non-bg context from background.
//
Messaging.prototype.createMsgObject = function createMsgObject(myContextName) {
  // generator for functions `cmd` and `bcast`
  function createFn(broadcast) {
    // helper function for invoking provided callback in background
    function createCbForMoreResults(N, callback) {
      var results = [];
      return function (result, resultValid) {
        if (resultValid) {
          results.push(result);
        }
        N -= 1; // eslint-disable-line no-param-reassign
        if (N <= 0 && callback) {
          callback(broadcast ? results : results[0]);
        }
      };
    }
    // generated function:
    return function _msg() {
      // process arguments:
      if (!arguments.length) {
        // at least command name must be provided
        return false;
      }
      if (!this.id) {
        // since we learn our id of non-background context in asynchronous
        // message, we may need to wait for it...
        var _ctx = this;
        var _args = arguments;
        setTimeout(function () {
          _msg.apply(_ctx, _args);
        }, 1);
        return true;
      }
      var tabId = void 0;
      var contexts = void 0;
      var cmdName = void 0;
      var args = [];
      var callback = void 0;
      var curArg = 0;
      var argsLimit = arguments.length;
      // check if we have callback:
      if (typeof arguments[argsLimit - 1] === 'function') {
        argsLimit -= 1;
        callback = arguments[argsLimit];
      }
      // other arguments:
      while (curArg < argsLimit) {
        var arg = arguments[curArg];
        curArg += 1;
        if (cmdName !== undefined) {
          args.push(arg);
        } else {
          // we don't have command name yet...
          switch (typeof arg === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(arg)) {
            // tab id
            case 'number':
              if (tabId !== undefined) {
                return false; // we already have tab id --> invalid args
              }
              tabId = arg;
              break;
            // contexts  (array)
            case 'object':
              if (typeof arg.length === 'undefined' || contexts !== undefined) {
                return false; // we either have it, or it is not array-like object
              }
              contexts = arg;
              break;
            // command name
            case 'string':
              cmdName = arg;
              break;
            // anything else --> error
            default:
              return false;
          }
        }
      }
      if (cmdName === undefined) {
        return false; // command name is mandatory
      }
      // store the callback and issue the request (message)
      if ('bg' === this.id) {
        var targetPorts = this.selectTargets(true, tabId, contexts);
        var responsesNeeded = targetPorts.length;
        var cb = createCbForMoreResults.call(this, responsesNeeded, callback);
        // send to target ports
        for (var i = 0; i < targetPorts.length; i += 1) {
          var _port = targetPorts[i];
          _port.port.postMessage({
            cmd: 'request',
            cmdName: cmdName,
            sendResponse: true,
            args: args,
            reqId: this.requestId
          });
          var _arr = this.pendingReqs[_port.id] || [];
          _arr.push({ id: this.requestId, cb: cb });
          this.pendingReqs[_port.id] = _arr;
          this.requestId += 1;
        }
        if (!targetPorts.length) {
          // no one to respond, invoke the callback (if provided) right away
          cb(null, false);
        }
      } else {
        if (callback) {
          this.cbTable[this.requestId] = callback;
        }
        this.port.postMessage({
          cmd: 'request',
          cmdName: cmdName,
          reqId: this.requestId,
          sendResponse: callback !== undefined,
          broadcast: broadcast,
          category: myContextName,
          portId: this.id,
          tabId: tabId,
          contexts: contexts,
          args: args
        });
        this.requestId += 1;
      }
      // everything went OK
      return true;
    }.bind(this);
  }

  function createCmdExtFn() {
    return function _msg(extensionId, commandName) {
      // process arguments:
      if (arguments.length < 2) {
        // at least extension id and command name must be provided
        return false;
      }

      if (this.id !== 'bg') {
        return false; // only background can send messagess to another extensions
      }

      var args = Array.prototype.slice.call(arguments, 2);
      var callback = void 0;
      if (typeof args[args.length - 1] === 'function') {
        callback = args.pop();
      }

      var _port = this.extPorts[extensionId];
      if (!_port) {
        // no one to respond, invoke the callback (if provided) right away
        if (callback) {
          callback();
        }

        return true;
      }

      _port.port.postMessage({
        cmd: 'request',
        cmdName: commandName,
        sendResponse: true,
        args: args,
        reqId: this.requestId,
        extensionId: this.runtime.id
      });

      var _arr = this.pendingReqs[extensionId] || [];
      _arr.push({ id: this.requestId,
        cb: function cb(result /* , resultValid/**/) {
          // ignore 'resultValid' because it is not applicable here
          if (callback) {
            callback(result);
          }
        }
      });
      this.pendingReqs[extensionId] = _arr;
      this.requestId += 1;

      // everything went OK
      return true;
    }.bind(this);
  }

  // returned object:
  var res = {
    cmd: createFn.call(this, false),
    bcast: createFn.call(this, true)
  };

  // for more convenience (when sending request from non-bg to background only)
  // adding 'bg(<cmdName>, ...)' function, that is equivalent to "cmd(['bg'], <cmdName>, ...)"
  if (myContextName !== 'bg') {
    res.bg = function bg() {
      if (0 === arguments.length || 'string' !== typeof arguments[0]) {
        return false;
      }
      var args = [['bg']];
      for (var i = 0; i < arguments.length; i += 1) {
        args.push(arguments[i]);
      }
      return res.cmd.apply(res, args);
    };
  } else {
    res.connectExt = function connectExt(id) {
      if (this.extPorts[id]) {
        // already connected
        return true;
      }
      var port = this.runtime.connect(id);
      this.registerExternalConnection(id, port);
      return undefined;
    }.bind(this);
    res.cmdExt = createCmdExtFn.call(this);
  }

  return res;
};

// init function, exported
//
// takes mandatory `context`, it is any string (e.g. 'ct', 'popup', ...),
// only one value is of special meaning: 'bg' ... must be used for initializing
// of the background part, any other context is considered non-background
//
// optionally takes `handlers`, which is object mapping function names to
// function codes, that is used as function lookup table. each message handling
// function MUST take callback as its last argument and invoke this callback
// when the message handler is done with processing of the message (regardless
// if synchronous or asynchronous). the callback takes one argument, this
// argument is treated as return value of the message handler.
//
// for background (`context` is 'bg'): installs onConnect listener
// for non-background context it connects to background
//
Messaging.prototype.init = function init(context, handlers) {
  // set message handlers (optional)
  this.handlers = handlers || {};

  // listener references
  var onDisconnect = void 0;
  var onCustomMsg = void 0;

  // helper function:
  function onDisconnectFn() {
    this.port.onDisconnect.removeListener(onDisconnect);
    this.port.onMessage.removeListener(onCustomMsg);
  }

  var tabId = void 0;
  function updateTabId() {
    if (!this.id) {
      setTimeout(updateTabId.bind(this), 1);
      return;
    }
    this.port.postMessage({
      cmd: 'updateTabId',
      context: context,
      portId: this.id,
      tabId: tabId
    });
  }

  if (context === 'bg') {
    // background
    this.id = 'bg';
    this.runtime.onConnect.addListener(this.onConnect.bind(this));
    this.runtime.onConnectExternal.addListener(this.onConnectExternal.bind(this));
  } else {
    // anything else than background
    this.port = this.runtime.connect({ name: context });
    this.port.onMessage.addListener(onCustomMsg = this.onCustomMsg.bind(this));
    this.port.onDisconnect.addListener(onDisconnect = onDisconnectFn.bind(this));
    // tabId update for developer tools
    // unfortunately we need dedicated name for developer tools context, due to
    // this bug: https://code.google.com/p/chromium/issues/detail?id=356133
    // ... we are not able to tell if we are in DT context otherwise :(
    if ( // eslint-disable-line no-cond-assign
    context === 'dt' && this.devtools && (tabId = this.devtools.inspectedWindow) && typeof (tabId = tabId.tabId) === 'number') {
      updateTabId.call(this);
    }
  }

  return this.createMsgObject(context);
};

// singleton representing this module
var singleton = new Messaging();

// helper function to install methods used for unit tests
function installUnitTestMethods(target, delegate) {
  /* eslint-disable no-underscore-dangle, no-param-reassign */
  // setters
  target.__setRuntime = function (rt) {
    delegate.runtime = rt;return target;
  };
  target.__setDevTools = function (dt) {
    delegate.devtools = dt;return target;
  };
  // getters
  target.__getId = function () {
    return delegate.id;
  };
  target.__getPort = function () {
    return delegate.port;
  };
  target.__getPortMap = function () {
    return delegate.portMap;
  };
  target.__getHandlers = function () {
    return delegate.handlers;
  };
  target.__getPendingReqs = function () {
    return delegate.pendingReqs;
  };
  /* eslint-enable */
}

/* harmony default export */ __webpack_exports__["a"] = {
  // same tab id
  SAME_TAB: SAME_TAB,
  // see description for init function above
  init: singleton.init.bind(singleton),
  // --- for unit tests ---
  // allow unit testing of the main module:
  __allowUnitTests: function __allowUnitTests() {
    installUnitTestMethods(this, singleton);
  },

  // context cloning
  __createClone: function __createClone() {
    var clone = new Messaging();
    clone.SAME_TAB = SAME_TAB;
    installUnitTestMethods(clone, clone);
    return clone;
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(9);
var ctx = __webpack_require__(48);
var hide = __webpack_require__(3);
var has = __webpack_require__(1);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(11)(function () {
  return Object.defineProperty(__webpack_require__(30)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(12);
var $export = __webpack_require__(31);
var redefine = __webpack_require__(38);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(17);
var $iterCreate = __webpack_require__(53);
var setToStringTag = __webpack_require__(20);
var getPrototypeOf = __webpack_require__(59);
var ITERATOR = __webpack_require__(6)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(10);
var dPs = __webpack_require__(56);
var enumBugKeys = __webpack_require__(16);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(30)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(50).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(37);
var hiddenKeys = __webpack_require__(16).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(1);
var toIObject = __webpack_require__(5);
var arrayIndexOf = __webpack_require__(47)(false);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// create handler module for given `context`.
// handles `random`, `randomAsync`, and `echo` commands.
// both `random` function log the invocation information to console and return
// random number 0 - 999. `randomAsync` returns the value with 15 second delay.
// `echo` function doesn't return anything, just logs the input parameter
// `what`.

function log() {
  var _console;

  (_console = console).log.apply(_console, arguments); // eslint-disable-line no-console
}

var handlers = {};

handlers.create = function (context) {
  return {
    random: function random(done) {
      log('--->' + context + '::random() invoked');
      var r = Math.floor(1000 * Math.random());
      log('<--- returns: ' + r);
      done(r);
    },
    randomAsync: function randomAsync(done) {
      log('--->' + context + '::randomAsync() invoked (15 sec delay)');
      setTimeout(function () {
        var r = Math.floor(1000 * Math.random());
        log('<--- returns: ' + r);
        done(r);
      }, 15 * 1000);
    },
    echo: function echo(what, done) {
      log('---> ' + context + '::echo("' + what + '") invoked');
      log('<--- (no return value)');
      done();
    }
  };
};

// for surpressing console.log output in unit tests:
handlers.__resetLog = function () {
  // eslint-disable-line no-underscore-dangle
  log = function log() {}; // eslint-disable-line no-func-assign
};

/* harmony default export */ __webpack_exports__["a"] = handlers;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(43), __esModule: true };

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(44), __esModule: true };

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(41);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(40);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(67);
__webpack_require__(65);
__webpack_require__(68);
__webpack_require__(69);
module.exports = __webpack_require__(9).Symbol;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
__webpack_require__(70);
module.exports = __webpack_require__(26).f('iterator');


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(5);
var toLength = __webpack_require__(62);
var toAbsoluteIndex = __webpack_require__(61);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(45);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(18);
var gOPS = __webpack_require__(36);
var pIE = __webpack_require__(19);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(29);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(29);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(34);
var descriptor = __webpack_require__(13);
var setToStringTag = __webpack_require__(20);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(3)(IteratorPrototype, __webpack_require__(6)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(14)('meta');
var isObject = __webpack_require__(7);
var has = __webpack_require__(1);
var setDesc = __webpack_require__(4).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(11)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(10);
var getKeys = __webpack_require__(18);

module.exports = __webpack_require__(2) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(19);
var createDesc = __webpack_require__(13);
var toIObject = __webpack_require__(5);
var toPrimitive = __webpack_require__(24);
var has = __webpack_require__(1);
var IE8_DOM_DEFINE = __webpack_require__(32);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(2) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(5);
var gOPN = __webpack_require__(35).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(1);
var toObject = __webpack_require__(63);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(23);
var defined = __webpack_require__(15);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(23);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(23);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(15);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(46);
var step = __webpack_require__(54);
var Iterators = __webpack_require__(17);
var toIObject = __webpack_require__(5);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(33)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 65 */
/***/ (function(module, exports) {



/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(60)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(33)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(1);
var DESCRIPTORS = __webpack_require__(2);
var $export = __webpack_require__(31);
var redefine = __webpack_require__(38);
var META = __webpack_require__(55).KEY;
var $fails = __webpack_require__(11);
var shared = __webpack_require__(22);
var setToStringTag = __webpack_require__(20);
var uid = __webpack_require__(14);
var wks = __webpack_require__(6);
var wksExt = __webpack_require__(26);
var wksDefine = __webpack_require__(25);
var enumKeys = __webpack_require__(49);
var isArray = __webpack_require__(52);
var anObject = __webpack_require__(10);
var isObject = __webpack_require__(7);
var toIObject = __webpack_require__(5);
var toPrimitive = __webpack_require__(24);
var createDesc = __webpack_require__(13);
var _create = __webpack_require__(34);
var gOPNExt = __webpack_require__(58);
var $GOPD = __webpack_require__(57);
var $DP = __webpack_require__(4);
var $keys = __webpack_require__(18);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(35).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(19).f = $propertyIsEnumerable;
  __webpack_require__(36).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(12)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(3)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('asyncIterator');


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('observable');


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
var global = __webpack_require__(0);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(17);
var TO_STRING_TAG = __webpack_require__(6)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_handlers__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_msg__ = __webpack_require__(28);



// here we use SHARED message handlers, so all the contexts support the same
// commands. in background, we extend the handlers with two special
// notification hooks. but this is NOT typical messaging system usage, since
// you usually want each context to handle different commands. for this you
// don't need handlers factory as used below. simply create individual
// `handlers` object for each context and pass it to msg.init() call. in case
// you don't need the context to support any commands, but want the context to
// cooperate with the rest of the extension via messaging system (you want to
// know when new instance of given context is created / destroyed, or you want
// to be able to issue command requests from this context), you may simply
// omit the `hadnlers` parameter for good when invoking msg.init()

console.log('BACKGROUND SCRIPT WORKS!'); // eslint-disable-line no-console

// adding special background notification handlers onConnect / onDisconnect
function logEvent(ev, context, tabId) {
  console.log(ev + ': context = ' + context + ', tabId = ' + tabId); // eslint-disable-line no-console
}
__WEBPACK_IMPORTED_MODULE_0__modules_handlers__["a" /* default */].onConnect = logEvent.bind(null, 'onConnect');
__WEBPACK_IMPORTED_MODULE_0__modules_handlers__["a" /* default */].onDisconnect = logEvent.bind(null, 'onDisconnect');
var message = __WEBPACK_IMPORTED_MODULE_1__modules_msg__["a" /* default */].init('bg', __WEBPACK_IMPORTED_MODULE_0__modules_handlers__["a" /* default */].create('bg'));

// issue `echo` command in 10 seconds after invoked,
// schedule next run in 5 minutes
function helloWorld() {
  console.log('===== will broadcast "hello world!" in 10 seconds'); // eslint-disable-line no-console
  setTimeout(function () {
    console.log('>>>>> broadcasting "hello world!" now'); // eslint-disable-line no-console
    message.bcast('echo', 'hello world!', function () {
      return console.log('<<<<< broadcasting done');
    } // eslint-disable-line no-console
    );
  }, 10 * 1000);
  setTimeout(helloWorld, 5 * 60 * 1000);
}

// start broadcasting loop
helloWorld();

/***/ })
/******/ ]);
//# sourceMappingURL=background.js.map