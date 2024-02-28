"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
var typeorm_1 = require("typeorm");
var Subscription = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _sessionnb_decorators;
    var _sessionnb_initializers = [];
    var _subplan_decorators;
    var _subplan_initializers = [];
    var _substate_decorators;
    var _substate_initializers = [];
    var _paymentmethode_decorators;
    var _paymentmethode_initializers = [];
    var Subscription = _classThis = /** @class */ (function () {
        function Subscription_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.sessionnb = __runInitializers(this, _sessionnb_initializers, void 0);
            this.subplan = __runInitializers(this, _subplan_initializers, void 0);
            this.substate = __runInitializers(this, _substate_initializers, void 0);
            this.paymentmethode = __runInitializers(this, _paymentmethode_initializers, void 0);
        }
        return Subscription_1;
    }());
    __setFunctionName(_classThis, "Subscription");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _sessionnb_decorators = [(0, typeorm_1.Column)()];
        _subplan_decorators = [(0, typeorm_1.Column)()];
        _substate_decorators = [(0, typeorm_1.Column)()];
        _paymentmethode_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _sessionnb_decorators, { kind: "field", name: "sessionnb", static: false, private: false, access: { has: function (obj) { return "sessionnb" in obj; }, get: function (obj) { return obj.sessionnb; }, set: function (obj, value) { obj.sessionnb = value; } }, metadata: _metadata }, _sessionnb_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _subplan_decorators, { kind: "field", name: "subplan", static: false, private: false, access: { has: function (obj) { return "subplan" in obj; }, get: function (obj) { return obj.subplan; }, set: function (obj, value) { obj.subplan = value; } }, metadata: _metadata }, _subplan_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _substate_decorators, { kind: "field", name: "substate", static: false, private: false, access: { has: function (obj) { return "substate" in obj; }, get: function (obj) { return obj.substate; }, set: function (obj, value) { obj.substate = value; } }, metadata: _metadata }, _substate_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _paymentmethode_decorators, { kind: "field", name: "paymentmethode", static: false, private: false, access: { has: function (obj) { return "paymentmethode" in obj; }, get: function (obj) { return obj.paymentmethode; }, set: function (obj, value) { obj.paymentmethode = value; } }, metadata: _metadata }, _paymentmethode_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Subscription = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Subscription = _classThis;
}();
exports.Subscription = Subscription;
