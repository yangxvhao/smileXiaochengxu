
let getComments = (ctx, cb) => {
  let tableId = getApp().globalData.tableId,
  Comments = new wx.BaaS.TableObject(tableId)
  Comments.limit(ctx.data.limit).offset(Math.ceil(Math.random() * 1000000) % ctx.data.count).find()
    .then(res => cb(res))
    .catch(err => console.dir(err))
}

// let addBook = (ctx, cb) => {

//   let tableId = getApp().globalData.tableId,
//     Books = new wx.BaaS.TableObject(tableId),
//     Book = Books.create(),
//     bookName = ctx.data.creatingBookName

//   let data = {
//     bookName,
//   }

//   Book.set(data)
//     .save()
//     .then(res => cb(res))
//     .catch(err => console.dir(err))

// }

// let updateBook = (ctx, cb) => {
//   let tableId = getApp().globalData.tableId,
//     recordId = ctx.data.curRecordId,
//     bookName = ctx.data.editingBookName

//   let Books = new wx.BaaS.TableObject(tableId),
//     Book = Books.getWithoutData(recordId)

//   let data = {
//     bookName
//   }

//   Book.set(data)
//     .update()
//     .then(res => cb(res))
//     .catch(err => console.dir(err))
// }

// let deleteBook = (ctx, cb) => {
//   let tableId = getApp().globalData.tableId,
//     recordId = ctx.data.curRecordId

//   let Books = new wx.BaaS.TableObject(tableId)

//   Books.delete(recordId)
//     .then(res => cb(res))
//     .catch(err => console.dir(err))
// }

module.exports = {
  getComments,
  // addBook,
  // updateBook,
  // deleteBook,
}