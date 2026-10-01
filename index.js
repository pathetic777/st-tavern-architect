jQuery(() => {
  const container = document.createElement('div');
  container.id = 'st-architect-container';
  container.style.cssText = 'display:none;position:fixed;top:3%;left:5%;width:90vw;height:92vh;z-index:9999;background:#121212;border:1px solid #444;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,0.85);overflow:hidden;';

  const bar = document.createElement('div');
  bar.style.cssText = 'height:36px;background:#1a1a1a;display:flex;align-items:center;justify-content:space-between;padding:0 14px;border-bottom:1px solid #333;';

  const title = document.createElement('span');
  title.innerText = '酒馆建筑师 (Tavern Architect)';
  title.style.cssText = 'font-size:13px;font-weight:bold;color:#81d4fa;';

  const closeBtn = document.createElement('button');
  closeBtn.innerText = '✕';
  closeBtn.style.cssText = 'background:transparent;border:none;color:#aaa;font-size:18px;cursor:pointer;line-height:1;';
  closeBtn.onclick = () => { container.style.display = 'none'; };

  bar.appendChild(title);
  bar.appendChild(closeBtn);

  const frame = document.createElement('iframe');
  frame.id = 'st-architect-frame';
  frame.src = new URL('workbench.html', import.meta.url).href;
  frame.style.cssText = 'width:100%;height:calc(100% - 36px);border:none;';

  container.appendChild(bar);
  container.appendChild(frame);
  document.body.appendChild(container);

  const btn = $(`
    <div class="list-group-item flex-container flexGap5" style="cursor:pointer;">
      <i class="fa-solid fa-cubes"></i> 酒馆建筑师 (3D建模)
    </div>
  `);

  btn.on('click', () => {
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
  });

  $('#extensions_settings').append(btn);
});

