window.onunload = () => {
  console.log('before unload')
  alert('unload')
}
window.onload = () => {
  console.log('before onload')
  const list = document.getElementById('list');
  const max = 20000;
  const slice = Math.min(100, max);
  let count = 0;
  const options = {
    root: list,
    rootMargin: '0px',
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6 ,0.7, 0.8, 0.9, 1]
  }
  window.requestIdleCallback(function() {
    console.log('request idle callback')
  }, {
    timeout: 100
  })
  console.time('insert')
  const observer = new IntersectionObserver(intersectionCB, options);
  function paint() {
    if (count * slice >= max) {
      console.timeEnd('insert')
      return
    }
    const fragement = document.createDocumentFragment();
    for (let i = 1; i <= slice; i++) {
      const spanDOM = document.createElement('span');
      spanDOM.id = `span-${count * slice + i}`
      spanDOM.innerText = '加载中...'
      spanDOM.classList.add('item')
      fragement.appendChild(spanDOM);
      observer.observe(spanDOM);
    }
    list.appendChild(fragement);
    count++;
    requestAnimationFrame(paint)
  }
  paint();
  function intersectionCB(entries, observer) {
    entries.forEach(entry => {
      console.log('entry ', entry )
      let elem = entry.target;
      if (entry.intersectionRatio !== 0 && !elem.innerText) {
        elem.innerText = `${Math.ceil(entry.intersectionRatio)}%`
      }
      if (entry.intersectionRatio === 1) {
        elem.innerText = `加载完成，元素id：${elem.id}` ;
        elem.style.backgroundColor = `#${(Math.random()*0xffffff<<0).toString(16)}`
        // console.log('elm1 ', elem.innerText)
        // elem.innerText = '元素滚动到了'
      }
    });
  }
}
document.addEventListener('visibilitychange', () => {
  console.log('visibilitychange')
}, false)