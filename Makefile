#
# Vars
#

BIN = ./node_modules/.bin
.DEFAULT_GOAL := all

#
# Tasks
#

test:
	@node test/*

validate:
	@standard

all: validate test

init:
	@git init
	@git add .
	@git commit -am "FIRST"
	@hub create 9dots/gitbook-plugin-9dots-anchors -d "Open pdfs in a new window."
	@travis enable
	@git push -u origin master

#
# Phony
#

.PHONY: test validate all init
