pdf_els_networks.pdf : els_manuscript.pdf further_readings.pdf
	pdfunite $^ $@

# Generate the manuscipt
els_manuscript.pdf: els_networks.md
	pandoc $< -o $@ --bibliography manuscript.json --csl elsevier.csl --latex-engine=xelatex

# Generate the document countening further readings
further_readings.pdf : furtherreading.md
	pandoc $< -o $@ --bibliography manuscript.json --csl elsevier.csl --latex-engine=xelatex
