"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const menu_json_1 = __importDefault(require("./menu.json"));
const MenuTreeBuilder_1 = __importDefault(require("./MenuTreeBuilder"));
class MobileMenu extends skydapp_browser_1.DomNode {
    constructor() {
        super(".mobile-menu");
        this.append(MenuTreeBuilder_1.default.build(menu_json_1.default.menu));
    }
}
exports.default = MobileMenu;
//# sourceMappingURL=MobileMenu.js.map