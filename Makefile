pdf_els_networks.pdf: els_networks.md
	pandoc $< -o $@ --bibliography manuscript.json
