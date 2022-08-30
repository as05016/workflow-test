#!/bin/bash
cd test/workflow-test/
git fetch
git checkout secondary
git pull
npm install
pm2 restart app2.json 