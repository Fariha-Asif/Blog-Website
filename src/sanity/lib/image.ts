import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from '../env';

// Create the image URL builder
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source: SanityImageSource) => {
  return builder.image(source).auto('format').fit('max').url();
};
