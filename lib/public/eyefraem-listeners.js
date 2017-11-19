function sendUpOrUpdateState(action) {
  if (window.parent === window) {
    fetch('/eyefraem-action?action=' + action, {
      method: 'post',
    }).then(function() {
      window.location.reload(true);
    });
  } else {
    console.log('postMessage');
    window.parent.postMessage({ action: action }, '*');
  }
}

Array.prototype.slice.call(document.querySelectorAll('[data-click]')).forEach(function(element) {
  var action = element.dataset.click;
  element.addEventListener('click', function() {
    sendUpOrUpdateState(action);
  });
});

window.addEventListener('message', function(event) {
  sendUpOrUpdateState(event.data.action);
});
