export const handleUpdate = (e) => {
    const target = e.currentTarget;
  const suffix = target.dataset.sizing || '';
  
  document.documentElement.style.setProperty(`--${target.name}`, target.value + suffix);
}