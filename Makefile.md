FILE=els_networks
SOURCE=$(FILE).md
BIB=$(FILE).json
TEMPLATE=draft# alt. value: preprint
MODEL=.plmt/templates/$(TEMPLATE).tex
EXT=pdf
MARKED= ./.plmt/temp.md
PFLAGS= --variable=$(TEMPLATE) --filter pandoc-citeproc
OUTPUT= $(FILE)_$(TEMPLATE).$(EXT)
TAG=submitted

TABLES = $(wildcard tables/*.md)
TABLESLATEX = $(TABLES:.md=.tex)

PHONY: all

all: $(OUTPUT)

clean:
	rm $(MARKED)

$(BIB): $(SOURCE)
	node plmt/index.js $(SOURCE)

$(MARKED): $(SOURCE) $(TABLESLATEX)
	node .plmt/critic.js $< .plmt/tmp1
	node .plmt/figures.js .plmt/tmp1 .plmt/tmp2
	node .plmt/tables.js .plmt/tmp2 $@
	rm .plmt/tmp*

$(OUTPUT): $(MARKED)
	pandoc $< -o $@ $(PFLAGS) --template $(MODEL) metadata.yaml --bibliography $(BIB) --csl .plmt/plab.csl
	-@rm $(MARKED)
	-@rm tables/*tex

tables/%.tex: tables/%.md
	pandoc $< -o $@

revised.md:
	cp $(SOURCE) temp.md
	git checkout $(TAG) $(SOURCE)
	mv $(SOURCE) $@
	mv temp.md $(SOURCE)

diff.pdf: revised.md
	make SOURCE=$< EXT=tex TITLE=old OUTPUT=old.tex
	make SOURCE=$(SOURCE) EXT=tex TITLE=new OUTPUT=new.tex
	latexdiff -t CTRADITIONAL old.tex new.tex > diff.tex
	latexmk -pdf diff.tex
	latexmk -c
	pdf2ps diff.pdf diff.ps
	ps2pdf13 diff.ps diff.pdf
	rm diff.ps
	rm {old,new,diff}.tex
