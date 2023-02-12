import { portableTextToHtml } from "astro-sanity";
import { getSanityImage } from "./getSanityImage";

const customComponents = {
  types: {
    image: ({ value }) => `<img src="${getSanityImage(value).url()}" />`,
  },
};

export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, customComponents);
}