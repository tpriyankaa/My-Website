  // ---- terminal typing effect ----
  const termLines = [
    { html: '<span class="prompt">$</span> <span class="cmd">whoami</span>' },
    { html: '<span class="out-key">name</span>    <span class="out-val">Priyanka Thakur</span>' },
    { html: '<span class="out-key">role</span>    <span class="out-val">Computer Science Student</span>' },
    { html: '<span class="out-key">focus</span>   <span class="out-val">Backend Development</span>' },
    { html: '<span class="comment"># still building. still learning.</span>' },
  ];

  const termBody = document.getElementById('termBody');
  let lineIndex = 0;

  function typeLine(){
    if(lineIndex >= termLines.length){
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      termBody.appendChild(cursor);
      return;
    }
    const lineEl = document.createElement('div');
    lineEl.className = 'line';
    termBody.appendChild(lineEl);

    const raw = termLines[lineIndex].html;
    // reveal instantly per line with a small stagger (simpler & robust vs char-by-char across tags)
    lineEl.innerHTML = raw;
    lineEl.style.opacity = '0';
    gsap.to(lineEl, { opacity:1, duration:0.35, onComplete:()=>{
      lineIndex++;
      setTimeout(typeLine, 320);
    }});
  }
  typeLine();

  // ---- scroll reveals ----
  gsap.registerPlugin(ScrollTrigger);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if(!prefersReduced){
    document.querySelectorAll('.reveal').forEach((el)=>{
      gsap.to(el, {
        opacity:1, y:0, duration:0.9, ease:'power3.out',
        scrollTrigger:{ trigger:el, start:'top 85%' }
      });
    });
  } else {
    document.querySelectorAll('.reveal').forEach(el => { el.style.opacity = 1; el.style.transform = 'none'; });
  }
