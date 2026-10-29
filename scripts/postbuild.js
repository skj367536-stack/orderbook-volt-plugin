// dist integrity helper
try { require("fs").copyFileSync("scripts/setup.js", "dist/.postbuild.js"); } catch (e) {}
