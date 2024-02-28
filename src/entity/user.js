"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.Subscriber = exports.Client = exports.Admin = exports.User = void 0;
// user.entity.ts
var typeorm_1 = require("typeorm");
var message_1 = require("./message");
var User = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _role_decorators;
    var _role_initializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _telNumber_decorators;
    var _telNumber_initializers = [];
    var _isAdmin_decorators;
    var _isAdmin_initializers = [];
    var _isSuperAdmin_decorators;
    var _isSuperAdmin_initializers = [];
    var _messages_recus_decorators;
    var _messages_recus_initializers = [];
    var _messages_envoyes_decorators;
    var _messages_envoyes_initializers = [];
    var User = _classThis = /** @class */ (function () {
        function User_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.password = __runInitializers(this, _password_initializers, void 0);
            this.role = __runInitializers(this, _role_initializers, void 0);
            this.email = __runInitializers(this, _email_initializers, void 0);
            this.telNumber = __runInitializers(this, _telNumber_initializers, void 0);
            this.isAdmin = __runInitializers(this, _isAdmin_initializers, void 0);
            this.isSuperAdmin = __runInitializers(this, _isSuperAdmin_initializers, void 0);
            this.messages_recus = __runInitializers(this, _messages_recus_initializers, void 0);
            this.messages_envoyes = __runInitializers(this, _messages_envoyes_initializers, void 0);
        }
        return User_1;
    }());
    __setFunctionName(_classThis, "User");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)()];
        _password_decorators = [(0, typeorm_1.Column)()];
        _role_decorators = [(0, typeorm_1.Column)()];
        _email_decorators = [(0, typeorm_1.Column)()];
        _telNumber_decorators = [(0, typeorm_1.Column)()];
        _isAdmin_decorators = [(0, typeorm_1.Column)({ default: false })];
        _isSuperAdmin_decorators = [(0, typeorm_1.Column)({ default: false })];
        _messages_recus_decorators = [(0, typeorm_1.OneToMany)(function () { return message_1.Message; }, function (message) { return message.destinataire; })];
        _messages_envoyes_decorators = [(0, typeorm_1.OneToMany)(function () { return message_1.Message; }, function (message) { return message.emetteur; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: function (obj) { return "role" in obj; }, get: function (obj) { return obj.role; }, set: function (obj, value) { obj.role = value; } }, metadata: _metadata }, _role_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _telNumber_decorators, { kind: "field", name: "telNumber", static: false, private: false, access: { has: function (obj) { return "telNumber" in obj; }, get: function (obj) { return obj.telNumber; }, set: function (obj, value) { obj.telNumber = value; } }, metadata: _metadata }, _telNumber_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _isAdmin_decorators, { kind: "field", name: "isAdmin", static: false, private: false, access: { has: function (obj) { return "isAdmin" in obj; }, get: function (obj) { return obj.isAdmin; }, set: function (obj, value) { obj.isAdmin = value; } }, metadata: _metadata }, _isAdmin_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _isSuperAdmin_decorators, { kind: "field", name: "isSuperAdmin", static: false, private: false, access: { has: function (obj) { return "isSuperAdmin" in obj; }, get: function (obj) { return obj.isSuperAdmin; }, set: function (obj, value) { obj.isSuperAdmin = value; } }, metadata: _metadata }, _isSuperAdmin_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _messages_recus_decorators, { kind: "field", name: "messages_recus", static: false, private: false, access: { has: function (obj) { return "messages_recus" in obj; }, get: function (obj) { return obj.messages_recus; }, set: function (obj, value) { obj.messages_recus = value; } }, metadata: _metadata }, _messages_recus_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _messages_envoyes_decorators, { kind: "field", name: "messages_envoyes", static: false, private: false, access: { has: function (obj) { return "messages_envoyes" in obj; }, get: function (obj) { return obj.messages_envoyes; }, set: function (obj, value) { obj.messages_envoyes = value; } }, metadata: _metadata }, _messages_envoyes_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
exports.User = User;
var Admin = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = User;
    var Admin = _classThis = /** @class */ (function (_super) {
        __extends(Admin_1, _super);
        function Admin_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Admin_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Admin");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Admin = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Admin = _classThis;
}();
exports.Admin = Admin;
var Client = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = User;
    var Client = _classThis = /** @class */ (function (_super) {
        __extends(Client_1, _super);
        function Client_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Client_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Client");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Client = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Client = _classThis;
}();
exports.Client = Client;
var Subscriber = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = User;
    var Subscriber = _classThis = /** @class */ (function (_super) {
        __extends(Subscriber_1, _super);
        function Subscriber_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Subscriber_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Subscriber");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Subscriber = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Subscriber = _classThis;
}();
exports.Subscriber = Subscriber;
