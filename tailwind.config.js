import withMT from "@material-tailwind/html/utils/withMT";
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
  "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  flowbite.content(),
],
theme: {
  extend: {},
},
plugins: [
  flowbite.plugin(),
],
});

