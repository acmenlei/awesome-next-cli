export async function queryTest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(12345);
    }, 2000);
  });
}
