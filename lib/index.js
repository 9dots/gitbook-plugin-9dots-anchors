/**
 * Expose
 */

module.exports = {
  hooks: {
    page: function (page) {
      page.content = page.content.replace(/(<a)(.*?)(?=.pdf)/g, '$1 target="_blank"$2')
      return page
    }
  }
}
