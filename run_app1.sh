#!/bin/bash
cd test/workflow-test/
git fetch
git pull
npm install
pm2 restart app1.json 