function toggleMenu(){document.getElementById('links').classList.toggle('show')}
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>document.getElementById('links').classList.remove('show')));
