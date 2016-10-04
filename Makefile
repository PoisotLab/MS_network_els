SOURCE=ms.md
TYPE=draft# alt. value: preprint
TITLE=els_complex_ecological_networks
MARKED= plmt/$(TITLE)_temp.md
PFLAGS= --variable=$(TYPE) --filter pandoc-citeproc
OUTPUT= $(TITLE)_$(TYPE)_version.pdf
BIB=default.json

TABLES = $(wildcard tables/*.md)
TABLESLATEX = $(TABLES:.md=.tex)

PHONY: all

all: $(OUTPUT)

clean:
	rm $(MARKED)

$(BIB): $(SOURCE)
	node plmt/index.js $(SOURCE)

$(MARKED): $(SOURCE) $(TABLESLATEX)
	node plmt/critic.js $< plmt/tmp1
	node plmt/figures.js plmt/tmp1 plmt/tmp2
	node plmt/tables.js plmt/tmp2 $@
	rm plmt/tmp*

$(OUTPUT): $(MARKED)
	pandoc $< -o $@ $(PFLAGS) --template plmt/plmt.tex plmt.yaml
	-@rm $(MARKED)
	-@rm tables/*tex

tables/%.tex: tables/%.md
	pandoc $< -o $@
