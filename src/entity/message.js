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
exports.Message = void 0;
// message.entity.ts
var typeorm_1 = require("typeorm");
var user_1 = require("./user"); // Adjust the import path as per your project structure
var Message = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _datesent_decorators;
    var _datesent_initializers = [];
    var _content_decorators;
    var _content_initializers = [];
    var _destinataire_decorators;
    var _destinataire_initializers = [];
    var _emetteur_decorators;
    var _emetteur_initializers = [];
    var _emetteu_decorators;
    var _emetteu_initializers = [];
    var _destinatair_decorators;
    var _destinatair_initializers = [];
    var Message = _classThis = /** @class */ (function () {
        function Message_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.datesent = __runInitializers(this, _datesent_initializers, void 0);
            this.content = __runInitializers(this, _content_initializers, void 0);
            this.destinataire = __runInitializers(this, _destinataire_initializers, void 0);
            this.emetteur = __runInitializers(this, _emetteur_initializers, void 0);
            this.emetteu = __runInitializers(this, _emetteu_initializers, void 0);
            this.destinatair = __runInitializers(this, _destinatair_initializers, void 0);
        }
        return Message_1;
    }());
    __setFunctionName(_classThis, "Message");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _datesent_decorators = [(0, typeorm_1.Column)()];
        _content_decorators = [(0, typeorm_1.Column)()];
        _destinataire_decorators = [(0, typeorm_1.Column)()];
        _emetteur_decorators = [(0, typeorm_1.Column)()];
        _emetteu_decorators = [(0, typeorm_1.ManyToOne)(function () { return user_1.User; }, function (user) { return user.messages_envoyes; })];
        _destinatair_decorators = [(0, typeorm_1.ManyToOne)(function () { return user_1.User; }, function (user) { return user.messages_recus; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _datesent_decorators, { kind: "field", name: "datesent", static: false, private: false, access: { has: function (obj) { return "datesent" in obj; }, get: function (obj) { return obj.datesent; }, set: function (obj, value) { obj.datesent = value; } }, metadata: _metadata }, _datesent_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _content_decorators, { kind: "field", name: "content", static: false, private: false, access: { has: function (obj) { return "content" in obj; }, get: function (obj) { return obj.content; }, set: function (obj, value) { obj.content = value; } }, metadata: _metadata }, _content_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _destinataire_decorators, { kind: "field", name: "destinataire", static: false, private: false, access: { has: function (obj) { return "destinataire" in obj; }, get: function (obj) { return obj.destinataire; }, set: function (obj, value) { obj.destinataire = value; } }, metadata: _metadata }, _destinataire_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _emetteur_decorators, { kind: "field", name: "emetteur", static: false, private: false, access: { has: function (obj) { return "emetteur" in obj; }, get: function (obj) { return obj.emetteur; }, set: function (obj, value) { obj.emetteur = value; } }, metadata: _metadata }, _emetteur_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _emetteu_decorators, { kind: "field", name: "emetteu", static: false, private: false, access: { has: function (obj) { return "emetteu" in obj; }, get: function (obj) { return obj.emetteu; }, set: function (obj, value) { obj.emetteu = value; } }, metadata: _metadata }, _emetteu_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _destinatair_decorators, { kind: "field", name: "destinatair", static: false, private: false, access: { has: function (obj) { return "destinatair" in obj; }, get: function (obj) { return obj.destinatair; }, set: function (obj, value) { obj.destinatair = value; } }, metadata: _metadata }, _destinatair_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Message = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Message = _classThis;
}();
exports.Message = Message;
