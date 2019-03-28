class NoScroll {

  constructor(wsInstance) {

    this.ws_ = wsInstance;
    this.scrollContainer_ = wsInstance.el;
    this.isGoingUp_ = false;
    this.isGoingLeft_ = false;
    this.timeout_ = null; // Disabling from option
    if (!_utils_mobile_detector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isAny()) {
      this.scrollContainer_.removeEventListener('wheel', this.onMouseWheel_.bind(this));
    }
}