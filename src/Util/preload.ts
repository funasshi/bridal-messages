export function preloadImages(
  imageUrls: string[],
): Promise<HTMLImageElement[]> {
  const promises: Promise<HTMLImageElement>[] = [];

  for (const imageUrl of imageUrls) {
    const image = new Image();
    image.src = imageUrl;

    const promise = new Promise<HTMLImageElement>((resolve, reject) => {
      image.onload = () => resolve(image);
      image.onerror = () =>
        reject(new Error(`Failed to load image: ${imageUrl}`));
    });

    promises.push(promise);
  }

  return Promise.all(promises);
}
