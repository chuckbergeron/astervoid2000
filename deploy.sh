#!/bin/sh

echo "Shut down the jekyll serve command before continuing ... go ahead, we'll wait ...\n"
read -rsp $'... Press any key to continue or control-c to cancel...\n';

git checkout gh-pages
bundle exec jekyll build
git add .
git commit -a -m "deployed new version"
git push origin gh-pages

