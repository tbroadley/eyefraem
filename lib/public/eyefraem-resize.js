Array.prototype.slice.call(document.querySelectorAll('iframe')).forEach(function(element) {
  element.addEventListener('load', function() {
    var children = Array.prototype.slice.call(element.contentWindow.document.body.children);
    var totalHeight = children.map(function(child) {
      var styles = getComputedStyle(child);
      return child.offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.marginBottom);
    }).reduce(function(accumulator, height) {
      return accumulator + height;
    });
    element.height = totalHeight + 'px';
  });
});
