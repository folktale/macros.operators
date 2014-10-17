bin        = $(shell npm bin)
sjs        = $(bin)/sjs
VERSION    = $(shell node -e 'console.log(require("./package.json").version)')

# -- Configuration -----------------------------------------------------
TEST_DIR = test/specs-src
TEST_BLD = test/specs
TEST_SRC = $(wildcard $(TEST_DIR)/*.sjs)
TEST_TGT = ${TEST_SRC:$(TEST_DIR)/%.sjs=$(TEST_BLD)/%.js}


# -- Compilation -------------------------------------------------------
$(TEST_BLD)/%.js: $(TEST_DIR)/%.sjs
	mkdir -p $(dir $@)
	$(sjs) --readable-names \
	       --module alright/macros \
	       --module hifive/macros \
	       --module es6-macros/macros/destructure \
	       --module lambda-chop/macros \
	       --module ./ \
	       --output $@ \
	       $<

bundle: macros/*.sjs
	cat macros/*.sjs > index.sjs

# -- Tasks -------------------------------------------------------------
test: bundle $(TEST_TGT)
	node test/run

publish: bundle test
	npm install
	npm publish

bump:
	node tools/bump-version.js $$VERSION_BUMP

bump-feature:
	VERSION_BUMP=FEATURE $(MAKE) bump

bump-major:
	VERSION_BUMP=MAJOR $(MAKE) bump

.PHONY: test bump bump-feature bump-major publish 
