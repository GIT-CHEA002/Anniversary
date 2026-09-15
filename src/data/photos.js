const modules = import.meta.glob('./assets/chenda*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});
export const PHOTOS = Object.keys(modules)
  .sort((a, b) => {
    const numA = parseInt(a.match(/(\d+)/)[1], 10);
    const numB = parseInt(b.match(/(\d+)/)[1], 10);
    return numA - numB;
  })
  .map((key) => modules[key]);