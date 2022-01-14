import CMS from "netlify-cms-app";
import cloudinary from "netlify-cms-media-library-cloudinary";

CMS.init();
console.log(cloudinary);
CMS.registerMediaLibrary(cloudinary);
