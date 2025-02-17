#!/bin/bash

srcdir=$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )
cd $srcdir

export GOPROXY=https://proxy.golang.org && export GOSUMDB=sum.golang.org && export GO111MODULE=on
CGO_ENABLED=0 go build -installsuffix 'static'