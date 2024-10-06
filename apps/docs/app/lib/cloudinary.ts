import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dt0wvlwmp",
  api_key: String(798494478547183),
  api_secret: "yY0JseWEzG8nQ6IPc6ByBb3QrNI",
});
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

export { cloudinary };
