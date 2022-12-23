# To reproduce the bug
1. Clone this repository `git clone git@github.com:CharlieBrownCharacter/vite-tiptap-error.git`
2. `cd vite-tiptap-error/ui`
3. `yarn install` OR `npm install`
4. `cd vite-tiptap-error/ui/dev`
5. `yarn install` OR `npm install`
6. `yarn dev:ssr`

Then you will see the error

```
Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /home/whatever/devotto/vite-tiptap-error/ui/dev/node_modules/lowlight/lib/common.js
require() of ES modules is not supported.
require() of /home/whatever/devotto/vite-tiptap-error/ui/dev/node_modules/lowlight/lib/common.js from /home/whatever/devotto/vite-tiptap-error/ui/dev is an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which defines all .js files in that package scope as ES modules.
Instead rename common.js to end in .cjs, change the requiring code to use import(), or remove "type": "module" from /home/whatever/devotto/vite-tiptap-error/ui/dev/node_modules/lowlight/package.json.
```
