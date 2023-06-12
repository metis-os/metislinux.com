#!/bin/sh

commit=$*
git add .
git commit -am "$commit"
git push origin main

