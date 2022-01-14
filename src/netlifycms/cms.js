import CMS from "netlify-cms-app";
import cloudinary from "netlify-cms-media-library-cloudinary";

CMS.init();
CMS.registerMediaLibrary(cloudinary);
