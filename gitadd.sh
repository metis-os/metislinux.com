#!/bin/sh

commit=$*
git add .
git commit -am "$commit"
git push --set-upstream origin 9d10a8e90f812bba3eb74d529d11ba920a4b1a47

