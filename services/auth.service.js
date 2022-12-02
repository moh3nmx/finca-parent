export default function(_this) {
  return {
    requestOTP(data) {
      return _this.$call({
        url: '/Account/RequestParentLogin',
        method: 'post',
        data,
        toast: true,
        msg: 'کد یکبار مصرف ارسال شد'
      })
    },
    verifyOTP(data) {
      return _this.$call({
        url: '/Account/ParentLoginVerify',
        method: 'post',
        data,
        toast: true,
      })
    },
    register(data) {
      return _this.$call({
        url: '/Account/UpdateChildAccount',
        method: 'put',
        data,
        toast: true,
        msg: 'به فینکا خوش اومدی'
      })
    }
  }
}