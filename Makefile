# This rule will, by default, make the  pdf document and remove the useless pdf.
all : pdf_els_networks.pdf rm_files

# This rule will generate the final maniscript (main text + further readings)
pdf_els_networks.pdf : els_manuscript.pdf further_readings.pdf
	pdfunite $^ $@

# This rule will generate the manuscipt
els_manuscript.pdf: els_networks.md
	pandoc $< -o $@ --bibliography manuscript.json --csl elsevier.csl --latex-engine=xelatex

# This rule will generate the further readings document
further_readings.pdf : furtherreading.md
	pandoc $< -o $@ --bibliography manuscript.json --csl elsevier.csl --latex-engine=xelatex

# This rule will remove useless pdf files
rm_files : els_manuscript.pdf further_readings.pdf
	rm $^
