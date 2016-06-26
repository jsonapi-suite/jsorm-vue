/**
 * rachelle
 * @version 0.0.1
 * @copyright (c) 2016 KFlash
 * @license MIT <undefined/blob/master/LICENSE>
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.Rachelle = factory());
}(this, function () {

    var rachelle = {
        // 'a' should not be covered
        a: function () {
            var uncovered = true;
            return uncovered;
        },
        b: function () { return true; }
    };

    return rachelle;

}));