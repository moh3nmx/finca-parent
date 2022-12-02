export default function (_this) {
  return {
    getChildren() {
      return _this.$call({
        url: '/Parent/GetChildren',
        method: 'get',
        toast: true,
        loading: true
      })
    }
  }
}