"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeComponent = void 0;
var LikeComponent = /** @class */ (function () {
  function LikeComponent(_likeCount, _isSelected) {
    this._likeCount = _likeCount;
    this._isSelected = _isSelected;
  }
  //see if this button is Selected or not
  LikeComponent.prototype.onClick = function () {
    // if (this.isSelected){
    //     this.LikeCount--
    // }else{
    //     this.LikeCount++
    // }
    // We can write it in a better way:
    this._likeCount += this._isSelected ? -1 : +1;
    //to toggel this field:
    this._isSelected = !this._isSelected;
  };
  Object.defineProperty(LikeComponent.prototype, "likeCount", {
    get: function () {
      return this._isSelected;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(LikeComponent.prototype, "isSelected", {
    get: function () {
      return this._isSelected;
    },
    enumerable: false,
    configurable: true,
  });
  return LikeComponent;
})();
exports.LikeComponent = LikeComponent;
