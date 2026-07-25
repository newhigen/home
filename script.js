// 재직 기간을 현재 날짜 기준으로 계산해 채운다. 표기는 문서 언어(<html lang>)를 따른다.
(function () {
  var EN = document.documentElement.lang === 'en';

  function months(start, end) {
    var s = start.split('.').map(Number);
    var e = end ? end.split('.').map(Number) : null;
    var now = new Date();
    var ey = e ? e[0] : now.getFullYear();
    var em = e ? e[1] : now.getMonth() + 1;
    return (ey - s[0]) * 12 + (em - s[1]) + 1;
  }

  function label(n) {
    var y = Math.floor(n / 12), m = n % 12;
    if (EN) {
      var yl = y + (y === 1 ? ' yr' : ' yrs');
      var ml = m + (m === 1 ? ' mo' : ' mos');
      if (y === 0) return ml;
      if (m === 0) return yl;
      return yl + ' ' + ml;
    }
    if (y === 0) return m + '개월';
    if (m === 0) return y + '년';
    return y + '년 ' + m + '개월';
  }

  document.querySelectorAll('[data-from]').forEach(function (el) {
    el.textContent = label(months(el.dataset.from, el.dataset.to));
  });
})();
