// Aggiunge un pulsante "Copia" a ogni blocco di codice
document.querySelectorAll('pre').forEach(function (pre) {
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'copia';
  btn.textContent = 'Copia';
  btn.addEventListener('click', function () {
    navigator.clipboard.writeText(pre.querySelector('code').textContent).then(function () {
      btn.textContent = 'Copiato';
      setTimeout(function () { btn.textContent = 'Copia'; }, 1500);
    });
  });
  pre.appendChild(btn);
});
