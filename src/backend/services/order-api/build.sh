#!/bin/bash

echo "Building Order API"
srcdir=$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )
cd $srcdir
./gradlew clean 
./gradlew build