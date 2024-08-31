import {defineConfig, setup, tw} from "npm:@twind/core@1";
import presetTailwind from "npm:@twind/preset-tailwind@1";

const config = defineConfig({
  presets: [presetTailwind()],
});

setup(config);

export {tw};
