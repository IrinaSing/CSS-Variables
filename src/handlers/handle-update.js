const inputs = document.querySelectorAll('.controls input');

const handleUpdate = () => {
    const target = e.currentTarget;
  const suffix = target.dataset.sizing || '';
  
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}