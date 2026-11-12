document.addEventListener('DOMContentLoaded',()=>{
  const a=document.getElementById('tA');
  const go=document.getElementById('go');
  const pv=document.getElementById('pv');
  const t1=document.getElementById('tab-a');
  const t2=document.getElementById('tab-b');
  const tabBtn=document.querySelectorAll('.tab');
  tabBtn.forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.panel').forEach(p=>p.style.display='none');
    const id=b.dataset?.tab==='b'?'tab-b':'tab-a';
    document.getElementById(id).style.display='block';
    tabBtn.forEach(x=>x.classList.toggle('active',x===b));
  }));
  // initialize
  document.getElementById('tab-a').style.display='block';
  go.addEventListener('click',()=>{pv.innerHTML='<strong>Preview:</strong> '+escapeHtml(a.value)});
  function escapeHtml(s){return (s||'').replace(/[&<>"]/g,m=>({&:'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[m]))}
});