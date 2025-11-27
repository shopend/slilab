#!/bin/bash
ssh-keyscan github.com >> ~/.ssh/known_hosts 2>/dev/null
git push -u origin main
