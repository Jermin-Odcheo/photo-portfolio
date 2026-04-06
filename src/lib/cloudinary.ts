import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

const cld = new Cloudinary({
  cloud: {
   cloudName: cloudName || "dq7cprmlr",
  },
});

export type CloudinaryImageOptions = {
  width?: number;
  height?: number;
};

export function cloudinaryImageUrl(
  publicId: string,
  options: CloudinaryImageOptions = {}
) {
  const image = cld.image(publicId).format("auto").quality("auto");

  if (options.width && options.height) {
    image.resize(fill().width(options.width).height(options.height));
  }

  return image.toURL();
}

