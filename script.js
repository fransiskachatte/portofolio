document.addEventListener('DOMContentLoaded', () => {

  // 1. Shadow pada Navbar saat Scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Filter Kategori Achievement & Projects
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Pop-Up Modal Detail Proyek
  const modal = document.getElementById('projectModal');
  const closeModal = document.querySelector('.close-modal');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalInst = document.getElementById('modalInst');
  const modalDesc = document.getElementById('modalDesc');

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      modalBadge.textContent = card.querySelector('.badge-mini').textContent;
      modalTitle.textContent = card.getAttribute('data-title');
      modalInst.textContent = `${card.getAttribute('data-inst')} • ${card.getAttribute('data-date')}`;
      modalDesc.textContent = card.getAttribute('data-desc');

      modal.style.display = 'flex';
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

});