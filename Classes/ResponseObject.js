module.exports = class ResponseObject {
  constructor (status, content, errorMessage) {
    this.status = status;
    this.content = content;
    this.errorMessage = errorMessage;
  }
}