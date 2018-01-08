//index.js
//获取应用实例
import utils from '../../utils/index'
var app = getApp()

Page({
  data: {
    title: '评论',
    nick:'昵称',
    tableID: app.globalData.tableId, 
    comments: [],
    limit:30,
    count:100
  },

  onLoad(options) {
    wx.BaaS.login().then(() => {
      this.setData({
        profile: wx.BaaS.storage.get('userinfo')
      })
      this.fetchCommentList()
    })
  },

  // 获取 comments 数据
  fetchCommentList() {
    utils.getComments(this, (res) => {
      this.setData({
        comments: res.data.objects ,// comments array, mock data in mock/mock.js
        count: res.data.meta.total_count,
      })
    })
  },

  // 绑定添加书目的输入框事件，设置添加的数目名称
  // bindCreateCommentNameInput(e) {
  //   let that = this
  //   let value = e.detail.value
  //   this.setData({
  //     creatingCommentName: value
  //   })
  
  // },

  // 绑定添加书目的提交按钮点击事件，向服务器发送数据
  // createComment(e) {
  //   utils.addComment(this, (res) => {
  //     this.setData({
  //       createCommentValue: '',
  //     })
  //     this.fetchCommentList()
  //   })
  // },

  // 绑定每一行书目的“编辑”按钮点击事件，控制输入框和文本显示
  // editCommentButtonClicked(e) {
  //   let that = this
  //   let activeIndex = e.currentTarget.dataset.index
  //   let CommentList = this.data.CommentList

  //   CommentList.forEach((elem, idx) => {
  //     if (activeIndex == idx) {
  //      elem.isEditing = true
  //     } else {
  //       elem.isEditing = false
  //     }
  //   })

  //   that.setData({
  //     CommentList
  //   })
  // },

  // 绑定每一行书目的输入框事件，设定当前正在编辑的书名
  // bindEditCommentNameInput(e) {
  //   let CommentName = e.detail.value
  //   this.setData({
  //     editingCommentName: CommentName,
  //   })
  // },

  // 绑定修改书目的提交按钮点击事件，向服务器发送数据
  // updateComment(e) {

  //   this.setData({
  //     curRecordId: e.target.dataset.CommentId,
  //   })

  //   utils.updateComment(this, (res) => {
  //     this.fetchCommentList()
  //     this.setData({curRecordId: ''})
  //   })
  // },

  // // 删除当前行的书目
  // deleteComment(e) {
  //   this.setData({
  //     curRecordId: e.target.dataset.CommentId,
  //   })
  //   utils.deleteComment(this, (res) => {
  //     this.fetchCommentList()
  //     this.setData({curRecordId: ''})
  //   })
  // },

})